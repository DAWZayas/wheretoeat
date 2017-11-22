export default {
  addNewPost (state, newPost) {
    state.profilePosts.unshift(newPost)
  },
  editProfile (state, newProfile) {
    state.infoProfile = newProfile
  },
  editProfileRef (state, value) {
    state.infoPRef = value
  },
  setPostRef (state, value) {
    state.postRef = value
  },
  setProfile (state, usrProfile) {
    state.infoProfile = usrProfile
  }
}
