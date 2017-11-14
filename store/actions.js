export default {
  addNewPost ({commit, state}, newPost) {
    commit('addNewPost', newPost)
  },
  editProfile ({commit, state}, newProfile) {
    commit('editProfile', newProfile)
  }
}
