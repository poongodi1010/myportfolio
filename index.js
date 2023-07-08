var scroll = document.getElementById("myBtn");

window.onscroll = function() {
  if(document.documentElement.scrollTop > 200) {
    scroll.classList.remove("hidden");
  }
  else {
        scroll.classList.add("hidden");
  }
}
function topFunction() {
document.documentElement.scrollTop = 0;
}

document.getElementById("submit").addEventListener("click", function (event) {
event.preventDefault();
  var message;
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var phoneNoValue = document.getElementById("phone").value;
  console.log(nameValue);

  var userName = localStorage.getItem("name");
  console.log(userName);

  if (nameValue.length === 0)  {
    console.log("inside name");
    message = "Please enter your name";
    document.getElementById("name-error").innerHTML = message;
  }
  else {
    document.getElementById("name-error").innerHTML = "";
  }

  if (phoneNoValue.length === 0) {
    message = "Please enter Phone number";
    document.getElementById("phone-error").innerHTML = message;
  }

  else if (isNaN(phoneNoValue) || phoneNoValue < 1 ) {
    message = "Please enter valid Phone number";
    document.getElementById("phone-error").innerHTML = message;
  } else {
        document.getElementById("phone-error").innerHTML = "";
  }


   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (emailValue.length === 0) {
      message = "Please enter email address";
        document.getElementById("email-error").innerHTML = message;
    }
    else
  if(!emailValue.match(validRegex)) {
    console.log("inside email ");
    message = "Please enter correct email address";
      document.getElementById("email-error").innerHTML = message;
  } else {
        document.getElementById("email-error").innerHTML = "";
  }




});
