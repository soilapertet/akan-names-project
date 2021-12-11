var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Create a function to check validity of the entries of the form
function validity() {
  var checkDay = document.getElementById("Days").value;
  var checkMonth = document.getElementById("Months").value;
  var checkYear = document.getElementById("Years").value;
  var checkGender= document.getElementsByName("gender").checked
  // Careful: it's "else if" not "elseif"
  if (checkDay === "") {
   alert("Date not selected!");
   return false;
  }
  else if(checkMonth ==="") {
    alert("Month not selected!");
    return false;
  }
  else if (checkYear === "") {
    alert("Year not selected!");
    return false;
  }
  else if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
    alert("Gender not selected!");
    return false;
  }
}