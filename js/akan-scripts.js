function getAkanName() {
  validity();
  day = dayOfTheWeek();
  assignName();
}

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
// Create a function to calculate the day of the week using getDay() method
function  dayOfTheWeek() {
  var DD = document.getElementById("Days").value;
  var MM = document.getElementById("Months").value;
  var YY = document.getElementById("Years").value;
  var d = (new Date(YY, (MM-1), DD)).getDay();
  return d;
}
// Create a function to assign Akan names based on gender and day of the week
function assignName() {
  if (document.getElementById("male").checked) {
    var gender = "male";
  }
  else if (document.getElementById("female").checked) {
    var gender = "female";
  }
  switch(gender) {
    case "male":
      if (day === 0) {
        alert("Congratulations! You were born on a "+days[0]+" and your Akan name is "+maleAkanNames[0]+"!");
      }
      else if (day === 1) {
        alert("Congratulations! You were born on a "+days[1]+" and your Akan name is "+maleAkanNames[1]+"!");
      }
      else if (day === 2) {
        alert("Congratulations! You were born on a "+days[2]+" and your Akan name is "+maleAkanNames[2]+"!");
      }
      else if (day === 3) {
        alert("Congratulations! You were born on a "+days[3]+" and your Akan name is "+maleAkanNames[3]+"!");
      }
      else if (day === 4) {
        alert("Congratulations! You were born on a "+days[4]+" and your Akan name is "+maleAkanNames[4]+"!");
      }
      else if (day === 5) {
        alert("Congratulations! You were born on a "+days[5]+" and your Akan name is "+maleAkanNames[5]+"!");
      }
      else if (day === 6) {
        alert("Congratulations! You were born on a "+days[6]+" and your Akan name is "+maleAkanNames[6]+"!");
      }
    break;
    case "female":
      if (day === 0) {
        alert("Congratulations! You were born on a "+days[0]+" and your Akan name is "+femaleAkanNames[0]+"!");
      }
      else if (day === 1) {
        alert("Congratulations! You were born on a "+days[1]+" and your Akan name is "+femaleAkanNames[1]+"!");
      }
      else if (day === 2) {
        alert("Congratulations! You were born on a "+days[2]+" and your Akan name is "+femaleAkanNames[2]+"!");
      }
      else if (day === 3) {
        alert("Congratulations! You were born on a "+days[3]+" and your Akan name is "+femaleAkanNames[3]+"!");
      }
      else if (day === 4) {
        alert("Congratulations! You were born on a "+days[4]+" and your Akan name is "+femaleAkanNames[4]+"!");
      }
      else if (day === 5) {
        alert("Congratulations! You were born on a "+days[5]+" and your Akan name is "+femaleAkanNames[5]+"!");
      }
      else if (day === 6) {
        alert("Congratulations! You were born on a "+days[6]+" and your Akan name is "+femaleAkanNames[6]+"!");
      }
    break;
  }
}