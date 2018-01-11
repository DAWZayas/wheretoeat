import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'
import { newFaceGooUser } from '~/utils/utils'
import uuidv1 from 'uuid/v1'

const _uploadImage = (folder, user) => (file) => {
  let ref = firebaseApp.storage().ref().child(folder + '/' + user)
  return ref.child(uuidv1()).child(file.name).put(file).then(snapshot => {
    return snapshot.downloadURL
  })
}
export default {
  uploadImage ({state}, {files, folder}) {
    return Promise.all(files.map(_uploadImage(folder, state.userId)))
  },
  updatePhotoURL ({state}, photoURL) {
    state.newProfile.update(photoURL)
  },
  createUserAuth ({commit, dispatch}, {email, password, newUser}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(({uid}) => {
      commit('setAuthError', '')
      let db = firebaseApp.database()
      db.ref('/users/' + uid).set(newUser)
      db.ref('/posts/' + uid).set({user: newUser.email})
    }).catch(error => {
      commit('setAuthError', error.message)
    })
  },
  bindAuth ({commit, dispatch, state}) {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        let db = firebaseApp.database()
        let userReference = db.ref('/users/' + user['uid'])
        userReference.once('value').then(snapshot => {
          if (!snapshot.val()) {
            let postReference = db.ref('/posts/' + user['uid'])
            userReference.set(newFaceGooUser(user.email))
            postReference.set({user: user.email})
          }
        })
        commit('setUser', user['uid'])
        dispatch('bindFirebaseSetProfile', user['uid'])
      } else {
        dispatch('unbindFirebaseReferences')
      }
    })
  },
  onSetLogOut ({state, dispatch}) {
    firebaseApp.auth().signOut().then(() => {
    }).catch(error => {
      console.log(error)
    })
  },
  addNewPost ({commit, state, dispatch}, newPost) { state.newPost.push(newPost) },
  editProfile ({commit, state}, newProfile) { state.newProfile.update(newProfile) },
  bindFirebaseSetProfile: firebaseAction(({state, commit, dispatch}, uid) => {
    let db = firebaseApp.database()
    let userProfile = db.ref('/users/' + uid)
    let userPosts = db.ref('/posts/' + uid)
    dispatch('bindFirebaseReference', {reference: userProfile, toBind: 'userData'}).then(() => { commit('setNewProfile', userProfile) })
    dispatch('bindFirebaseReference', {reference: userPosts, toBind: 'userPosts'}).then(() => { commit('setNewPost', userPosts) })
  }),
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        let values = state[toBind]
        typeof values === 'object' && delete values['.key']
        reference.set(values)
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setUser', null)
    commit('setUserData', null)
    commit('setUserPosts', null)
    try {
      unbindFirebaseRef('posts')
      unbindFirebaseRef('users')
    } catch (error) {
      return
    }
  })
}
