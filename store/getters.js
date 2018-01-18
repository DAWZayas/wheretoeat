export default {
  getProfile: state => state.userData || {},
  profilePosts: state => state.userPosts,
  // getRefPosts: state => state.resultadoDeBusqueda,
  // getRefPosts: state => state.refPosts.map(Object.values),
  myImages: state => state.images,
  getUser: state => state.userId,
  // getSearchValue: state => state.searchValue
  getAllPosts: state => state.searchValue ? state.searchValue : null,
  getSearchValue: state => state.searchValue ? Object.values(state.searchValue) : null
}
