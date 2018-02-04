export default {
  getProfile: state => state.userData || {},
  profilePosts: state => state.userPosts,
  myImages: state => state.images,
  getUser: state => state.userId,
  getComments: state => state.postComments,
  getVPosts: state => state.vPosts,
  getCoords: state => state.coords,
  getNumPosts: state => state.numPosts
}
