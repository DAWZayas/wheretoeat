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
  setPosts (state, profilePosts) {
    state.profilePosts = profilePosts
  },
  setProfile (state, usrProfile) {
    state.infoProfile = usrProfile
  }
}
