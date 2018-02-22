export default {
  setNewProfile (state, value) {
    state.newProfile = value
  },
  setNewPost (state, value) {
    state.newPost = value
  },
  setUserPosts (state, value) {
    state.userPosts = value
  },
  setUser (state, userid) {
    state.userId = userid
  },
  setUserData (state, userData) {
    state.userData = userData
  },
  addNewComment (state, newComment) {
    state.newComment = newComment
  },
  setAuthError (state, value) {
    state.authError = value
  },
  setCoords (state, value) {
    state.coords = value
  },
  setNumPosts (state, value) {
    state.numPosts = value
  },
  setMainPosts (state, value) {
    state.mainPosts = value
  }
}
