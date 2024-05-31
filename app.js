var unameInput = document.getElementById('unameId');
var passwordInput = document.getElementById('pwdId');
var signUpBtn = document.getElementById('SignupBTN');
var cPassword = document.getElementById('cpassword');

function SignUp(){
    var username = unameInput.value;
    var password = passwordInput.value;
    var cPass = cPassword.value;

    if( username == "" || password == ""){
        alert("Try again");
    }
    else if(password == cPass){
        var newObj = {
            name: username,
            password: password,
        }
        var newJSON = JSON.stringify(newObj);
        localStorage.setItem("tk_"+username, newJSON);
        alert("dang ky thanh cong");
    window.location.href = "login.html";

    }
    else{
        alert("dang ky that bai");

    }

}

function SignIn() {
    var ndTKLogin = document.getElementById("unameId").value;
    var ndMkLogin = document.getElementById("pwdId").value;
    var checkJSON = localStorage.getItem("tk_"+ndTKLogin);

    console.log(ndTKLogin)
    if(checkJSON != null){
        var checkObj = JSON.parse(checkJSON);
        if(ndMkLogin == checkObj.password){
            alert("Congratulation!");
        window.location = "./Begin.html";
        }
        else{
            alert("Sign in fail!")
        }
    }else{
        alert("Account not found!!!")
    }
}

function SignOut(){
    window.location.href = "login.html"
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

const API_KEY ="e5f09c8f6b6b9f0bb90fd299f434ecef";
const DEFAULT_VALUE = "--";

searchInput.addEventListener("change", (event) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&APPID=${API_KEY}&units=metric&lang=Vi`)
    .then(response => response.json())
    .then((data)=>{
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
        console.log(data);
    })
});