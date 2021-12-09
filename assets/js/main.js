{
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (((hour / 12)-360) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
}
AOS.init();

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function stickyscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } 
}
window.addEventListener('scroll', stickyscroll);

const hrefLink = ["#hero", "#portfolio", "#news", "#contact"];
const imeLink = ["Home", "Photos", "Places", "Contact Us"];
let navBar = document.getElementById("navbarNav");
let navList = `<ul class="navbar-nav mx-auto">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li class="nav-item"><a class="nav-link" href="${hrefLink[i]}">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList;



var nameRegex = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;
var emailRegex = /^[\w-_\.]+@([\w-_]{2,}\.)+[a-z]{2,}$/;
var formName = document.getElementById("name");
var formEmail = document.getElementById("email");
var noErrors;
formName.addEventListener("blur", checkName);
function checkName() {
  var check = nameRegex.test(formName.value);
  if(check) {
    formName.classList.add("br-green");
    formName.classList.remove("br-red");
 
 } 
 else {
  noErrors = false;
  formName.classList.add("br-red");
  formName.classList.remove("br-green");
  
 }
}


formEmail.addEventListener("blur", checkEmail);
function checkEmail() {
 var check = emailRegex.test(formEmail.value);
 if(check) {
  formEmail.classList.add("br-green");
  formEmail.classList.remove("br-red");
  
 } 
 else {
 noErrors = false;
  formEmail.classList.add("br-red");
  formEmail.classList.remove("br-green");
  
 }
}

var tbMessage = document.getElementById("#message");
tbMessage.addEventListener("blur", checkMessage);
function checkMessage() {
 var numberOfSpaces = tbMessage.value.replace(/[^\s]/, "").length;

 if(tbMessage.value.length - numberOfSpaces < 20) {
  noErrors = false;
  tbMessage.classList.add("br-red");
  tbMessage.classList.remove("br-green");
 } else {
  tbMessage.classList.add("br-green");
  tbMessage.classList.remove("br-red");
 }
}


var btnSubmitMessage = document.getElementById("#btnSubmitForm");
btnSubmitMessage.addEventListener("click", function() {
 noErrors = true;
 checkName();
 checkEmail();
 checkMessage();

 if(noErrors) {
 formName.value = "";
 formName.classList.remove("br-green");
 formEmail.value = "";
 formEmail.classList.remove("br-green");
 tbMessage.value = "";
 tbMessage.classList.remove("br-green");
}
});

