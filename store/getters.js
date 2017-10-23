export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError
}
