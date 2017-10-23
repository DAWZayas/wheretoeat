export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError
}
