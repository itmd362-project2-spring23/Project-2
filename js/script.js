function checkRequirements() {
  var nameField = document.getElementsByName("name_field")[0];
  var emailField = document.getElementsByName("email_field")[0];
  var errorDiv = document.getElementById("error");
  
  if (nameField.value === "" || emailField.value === "") {
    errorDiv.style.display = "block";
  } else {
    errorDiv.style.display = "none";
  }
}
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

setInterval(() => {
  slideIndex++;
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}, 5000);
