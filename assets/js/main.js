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
  var errorName =  document.querySelector(".errorName");
  if(check) {
    formName.classList.add("br-green");
    formName.classList.remove("br-red");
    errorName.innerHTML="Name is valid!";
    errorName.style.color="green";
 
 } 
 else {
  noErrors = false;
  formName.classList.add("br-red");
  formName.classList.remove("br-green");
  errorName.innerHTML="Name is not valid!";
  errorName.style.color="red";
 }
}


formEmail.addEventListener("blur", checkEmail);
function checkEmail() {
 var check = emailRegex.test(formEmail.value);
 var errorEmail =  document.querySelector(".errorEmail");
 if(check) {
  formEmail.classList.add("br-green");
  formEmail.classList.remove("br-red");
  errorEmail.innerHTML="Email is valid!";
  errorEmail.style.color="green";
  
 } 
 else {
 noErrors = false;
  formEmail.classList.add("br-red");
  formEmail.classList.remove("br-green");
  errorEmail.innerHTML="Email is not valid!";
  errorEmail.style.color="Red";
 }
}


