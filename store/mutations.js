export default {
  addNewPost (state, newPost) {
    state.profilePosts.unshift(newPost)
  },
  editProfile (state, newProfile) {
    state.infoProfile = newProfile
  },
  setPosts (state, profilePosts) {
    state.profilePosts = profilePosts
  },
  setProfile (state, usrProfile) {
    state.infoProfile = usrProfile
  }
}
