export default {
  getProfile: state => state.userData || {},
  profilePosts: state => state.userPosts,
  myImages: state => state.images,
  getUser: state => state.userId
}
