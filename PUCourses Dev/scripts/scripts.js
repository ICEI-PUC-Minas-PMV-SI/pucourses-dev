function SubmitLogin(e) {
  event.preventDefault();

  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  var user = localStorage.getItem(email);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    alert("Usuário não cadastrado")
  } else if (email == data.email && password == data.password) {
    console.log("Login feito com sucesso")
  }
}


function SubmitLogon(e) {
  event.preventDefault();

  var fullName = document.getElementById("logonFullName").value;
  var phoneNumber = document.getElementById("logonPhone").value;
  var cpf = document.getElementById("logonCpf").value;
  var email = document.getElementById("logonEmail").value;
  var password = document.getElementById("logonPassword").value;
  var passwordConfirmation = document.getElementById("logonPasswordConfirmation").value;

  if (password !== "" && password === passwordConfirmation) {

    var user = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      cpf: cpf,
      email: email,
      password: password
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    console.log("200 OK - Usuário cadastrado com sucesso");
  } else {
    console.log("500 - Erro interno")
  }


}