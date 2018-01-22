import firebaseApp from '~/firebaseapp'

let db = firebaseApp.database()

export const ratingUserRef = (postid, userid) => {
  return db.ref('/ratings/' + postid + '/' + userid)
}
export const globalRef = (postid) => {
  return db.ref('/ratings/' + postid + '/global')
}
export const userPostRef = (userpost, postid) => {
  return db.ref('/posts/' + userpost + '/' + postid)
}
export const newRating = ({oldNum, oldSum, beforeScore, score}) => {
  let newNum = oldNum + 1
  let newSum = oldSum + score
  let newGlobal = newSum / newNum
  return {newNum: newNum, newSum: newSum, newGlobal: newGlobal}
}
export const uploadRating = ({oldNum, oldSum, beforeScore, score}) => {
  let newNum = oldNum
  let newSum = (oldSum - beforeScore) + score
  let newGlobal = newSum / newNum
  return {newNum: newNum, newSum: newSum, newGlobal: newGlobal}
}
export const deleteRating = ({oldNum, oldSum, beforeScore}) => {
  let newGlobal
  let newNum = oldNum - 1
  let newSum = oldSum - beforeScore
  if (newNum === 0) { newGlobal = 0 } else { newGlobal = newSum / newNum }
  return {newNum: newNum, newSum: newSum, newGlobal: newGlobal}
}
export const setRating = ({postid, userid, userpost, score, newNum, newSum, newGlobal}) => {
  ratingUserRef(postid, userid).set({user_id: userid, score: score})
  globalRef(postid).set({num: newNum, sum: newSum})
  userPostRef(userpost, postid).update({points: newGlobal})
}
