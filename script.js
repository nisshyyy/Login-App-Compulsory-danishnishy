function login() {
  const inputUsername = document.getElementById("username")
  const inputPassword = document.getElementById("password")
  const result = document.getElementById("result")


  const isCorrectUsername = inputUsername.value === 'nishydanish@gmail.com'
  const isCorrectPassword = inputPassword.value === 'sigma1'

  if (isCorrectUsername && isCorrectPassword) {
    result.innerHTML = 'Welcome Nishy!';
  } else if (isCorrectUsername) {
    result.innerHTML = 'Wrong password!';
  } else {
    result.innerHTML = 'Wrong username/password';
  }

}