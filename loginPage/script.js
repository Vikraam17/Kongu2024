function handleLogin() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const error = document.getElementById("error");

  const LoginData = [
    { username: "viky", password: "123" },
    { username: "dheepu", password: "123" },
  ];

  const isValid = LoginData.some(
    (user) => user.username === username && user.password === password
  );
  if (isValid) {
    window.location.href = "../index.html";
    errorMsg.innerText = "Login Successfull";
  } else {
    errorMsg.innerText = "Invalid Login";
  }
}
