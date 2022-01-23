function cancelBtn(){
    document.getElementById("login").reset();
}

function login_msg(){
  login = document.getElementsByName("uname")[0].value;
  pass = document.getElementsByName("psw")[0].value;

  if(login.length > 0 && pass.length > 0)
    alert("Success Authentification!");
}

var mybutton;
window.onload = function(){
    mybutton = document.getElementById("myBtn");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}