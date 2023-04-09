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