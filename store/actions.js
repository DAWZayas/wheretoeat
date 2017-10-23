import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

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
    if (state.configRef) {
      state.configRef.update({workingPomodoro})
    } else {
      commit('setWorkingPomodoro', workingPomodoro)
    }
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
    if (state.configRef) {
      state.configRef.update({shortBreak})
    } else {
      commit('setShortBreak', shortBreak)
    }
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
    if (state.configRef) {
      state.configRef.update({longBreak})
    } else {
      commit('setLongBreak', longBreak)
    }
  },
  /**
   * Binds firebase configuration database reference to the store's corresponding object
   * @param {object} store
   */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let configRef = db.ref('/configuration/test')

    dispatch('bindFirebaseReference', {reference: configRef, toBind: 'config'}).then(() => {
      commit('setConfigRef', configRef)
    })
  }),
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
    /**
   * Undbinds firebase references
   */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setConfigRef', null)
    try {
      unbindFirebaseRef('config')
    } catch (error) {
      return
    }
  })
}
