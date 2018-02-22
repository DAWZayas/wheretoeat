export const locationFilter = (userposts, cords, mainP) => {
  for (var i in userposts) {
    if (userposts[i].lat) {
      let latup = userposts[i].lat + 0.050000
      let latdown = userposts[i].lat - 0.050000
      let lngup = userposts[i].lng + 0.050000
      let lngdown = userposts[i].lng - 0.050000
      if (cords.lat < latup && cords.lat > latdown && cords.lng < lngup && cords.lng > lngdown) {
        mainP.push(userposts[i])
      }
    }
  }
  return mainP
}
export const mainFilter = (snapshot, mainP) => {
  for (var i in snapshot) {
    if (snapshot[i].date) {
      mainP.push(snapshot[i])
    }
  }
  mainP.sort(function (a, b) { return b.points - a.points })
  return mainP
}
export const wordFilter = (snapshot, words, mainP, bill, points) => {
  for (var i in snapshot) {
    var patt = new RegExp(words)
    if (snapshot[i].date) {
      if (patt.test(snapshot[i].title.toLowerCase()) || patt.test(snapshot[i].comTitle.toLowerCase()) || patt.test(snapshot[i].comment.toLowerCase())) {
        if (bill === -1 && points === -1) {
          mainP.push(snapshot[i])
        } else if (bill !== -1 && points === -1) {
          if (snapshot[i].bill === bill) {
            mainP.push(snapshot[i])
          }
        } else if (bill === -1 && points !== -1) {
          if (snapshot[i].points === points) {
            mainP.push(snapshot[i])
          }
        } else {
          if (snapshot[i].bill === points && snapshot[i].points) {
            mainP.push(snapshot[i])
          }
        }
      }
    }
  }
  return mainP
}

export const setUserIds = (snapshot, users) => {
  for (var i in snapshot) {
    users.push(i)
  }
  return users
}
