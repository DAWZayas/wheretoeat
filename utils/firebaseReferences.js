import firebaseApp from '~/firebaseapp'

let db = firebaseApp.database()
export const userRef = (uid) => { return db.ref('/users/' + uid) }
export const usrPosts = (uid) => { return db.ref('/posts/' + uid) }
export const postComments = (postid) => { return db.ref('/comments/' + postid) }
