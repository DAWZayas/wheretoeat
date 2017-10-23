const config = {
  workingPomodoro: 0.2,
  shortBreak: 0.1,
  longBreak: 0.3,
  pomodorosTillLongBreak: 3
}

const user = null
const configRef = null
const statisticsRef = null
const displayName = ''

const statistics = {
  pomodorosToday: 0,
  pomodorosLastWeek: 0,
  pomodorosLastMonth: 0,
  totalPomodoros: 0,
  workoutsToday: 0,
  workoutLastWeek: 0,
  workoutsLastMonth: 0,
  workoutsTotal: 0
}

export default {
  config,
  user,
  configRef,
  statisticsRef,
  statistics,
  displayName,
  authError: ''
}
