import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

export default {
  addNewPost ({commit, state}, newPost) {
    if (state.postRef) {
      state.postRef.push(newPost)
    } else {
      commit('addNewPost', newPost)
    }
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
    let usrProfile = db.ref('/users/1qzjsw20gwx')

    dispatch('bindFirebaseReference', {reference: usrProfile, toBind: 'infoProfile'}).then(() => {
      commit('editProfileRef', usrProfile)
    })
  }),
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
