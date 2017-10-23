export default {
    /**
   * Sets the working pomodoro timer
   * @param {object} store
   * @param {number} workingPomodoro
   */
  setWorkingPomodoro ({commit, state}, workingPomodoro) {
    if (!workingPomodoro) {
      return
    }
    workingPomodoro = parseFloat(workingPomodoro)
    commit('setWorkingPomodoro', workingPomodoro)
  },
  /**
   * Sets the short break pomodoro configuration
   * @param {object} store
   * @param {number} shortBreak
   */
  setShortBreak ({commit, state}, shortBreak) {
    if (!shortBreak) {
      return
    }
    shortBreak = parseFloat(shortBreak)
    commit('setShortBreak', shortBreak)
  },
  /**
   * Sets the long break pomodoro configuration
   * @param {object} store
   * @param {number} longBreak
   */
  setLongBreak ({commit, state}, longBreak) {
    if (!longBreak) {
      return
    }
    longBreak = parseFloat(longBreak)
    commit('setLongBreak', longBreak)
  }
}
