export const fieldFilter = ref => {
  var char = /[^a-zA-Z 0-9]+/g
  return ref.replace(char, ' ')
}

export const emailTest = email => {
  var emailChars = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  return emailChars.test(email)
}

export const isEmpty = obj => {
  return obj['fullName'] === '' || obj['userName'] === '' || obj['password'] === '' || obj['repeatPassword'] === '' || obj['email'] === '' || obj['age'] === '' || obj['city'] === ''
}
