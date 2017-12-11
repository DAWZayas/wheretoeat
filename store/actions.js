import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

export default {
  logged ({state, commit}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      state.userId = firebaseApp.auth().R
      console.log('Conectado')
      commit('setLogged')
    })
  },
  resetLogError ({commit}) {
    commit('setAuthError', '')
  },
  setLogged ({commit, state}) {
    firebaseApp.auth().signOut()
    commit('setLogged')
  },
  addNewPost ({commit, state}, newPost) {
    if (state.postRef) {
      state.postRef.push(newPost)
    } else {
      commit('addNewPost', newPost)
    }
  },
  createUser ({commit, state}, {email, password, newUser}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(({uid}) => {
        firebaseApp.database().ref('/users/' + uid).set(newUser)
        commit('setUserId', uid)
        commit('setAuthError', '')
      })
      .catch(error => {
        commit('setAuthError', error.message)
      })
  },
  editProfile ({commit, state}, newProfile) {
    if (state.infoPRef) {
      state.infoPRef.update(newProfile)
    } else {
      commit('editProfile', newProfile)
    }
  },
  /**
   * Binds firebase configuration database reference to the store's corresponding object
   * @param {object} store
   */
  bindFirebaseSetPost: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let postRef = db.ref('/posts')

    dispatch('bindFirebaseReference', {reference: postRef, toBind: 'profilePosts'}).then(() => {
      commit('setPostRef', postRef)
    })
  }),
  bindFirebaseSetProfile: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let usrProfile = db.ref('/users/' + state.userId)
    dispatch('bindFirebaseReference', {reference: usrProfile, toBind: 'infoProfile'}).then(() => {
      commit('editProfileRef', usrProfile)
    })
  }),

  bindAuth ({commit, state}) {
    firebaseApp.auth().onAuthStateChanged(userId => {
      commit('setUserId', userId)
    })
  },
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
    /**
   * Undbinds firebase references
   */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setpostRef', null)
    try {
      unbindFirebaseRef('config')
    } catch (error) {
      return
    }
  })
}
