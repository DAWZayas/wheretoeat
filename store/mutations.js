export default {
  setWorkingPomodoro (state, workingPomodoro) {
    state.config.workingPomodoro = workingPomodoro
  },
  setShortBreak (state, shortBreak) {
    state.config.shortBreak = shortBreak
  },
  setLongBreak (state, longBreak) {
    state.config.longBreak = longBreak
  },
  setConfigRef (state, value) {
    state.configRef = value
  },
  setUser (state, value) {
    state.user = value
  },
  setStatisticsRef (state, value) {
    state.statisticsRef = value
  },
  setDisplayName (state, value) {
    state.displayName = value
  },
  setAuthError (state, value) {
    state.authError = value
  }
}
