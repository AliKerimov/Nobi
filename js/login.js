
document.getElementById("show-pass").onclick = function() {
    var passwordInput = document.getElementById('password');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';  
  }
  else{
    passwordInput.type='password';
  }
  }