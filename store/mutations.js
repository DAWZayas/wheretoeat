export default {
  addNewPost (state, newPost) {
    state.myList.unshift(newPost)
  },
  editProfile (state, newProfile) {
    state.infoProfile = newProfile
  }
}
