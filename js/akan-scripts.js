var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Create a function to check validity of the entries of the form
function checkValidity() {
  if(document.getElementById("Days").value === "days" && document.getElementById("Months").value === "months" &&
  document.getElementById("Years").value === "years"); {
    alert("Please choose a valid date, month and year!");
  } 
  elseif (document.getElementById("Days").value === "days"); {
    alert("Please choose a valid date!");
  } 
  elseif (document.getElementById("Months").value === "months"); {
    alert("Please choose a valid month!");
  } 
  elseif (document.getElementById("Years").value === "years"); {
    alert("Please choose a valid year!");
  }
  else {
    return false;
  }
}
// Create a function to calculate the day of the week
function  dayOfTheWeek() {
  var year = document.getElementById("Years").value;
// Isolate century digits
  var CC = parseInt(year.toString().slice(0,2));
// Isolate year digits
  var YY = parseInt(year.toString().slice(2));
  var MM = document.getElementById("Months").value;
  var DD = document.getElementById("Days").value;
  // Calculate the value for the day of the week
  return Math.round((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+ DD) % 7);
}
// Create a function to assign Akan names based on gender and day of the week
function assignName() {
  if (document.getElementById("male").checked === true); {
    var gender = "male";
  }
  elseif (document.getElementById("female").checked === true); {
    var gender = "female";
  }
  else; {
    alert("Please choose a gender!");
    return false;
  }
  switch(gender) {
    case "male":
      if (dayOfTheWeek === 0); {
        alert("Congratulations! You were born on a "+days[0]+" and your Akan name is "+maleAkanNames[0]+"!");
      }
      elseif (dayOfTheWeek === 1); {
        alert("Congratulations! You were born on a "+days[1]+" and your Akan name is "+maleAkanNames[1]+"!");
      }
      elseif (dayOfTheWeek === 2); {
        alert("Congratulations! You were born on a "+days[2]+" and your Akan name is "+maleAkanNames[2]+"!");
      }
      elseif (dayOfTheWeek === 3); {
        alert("Congratulations! You were born on a "+days[3]+" and your Akan name is "+maleAkanNames[3]+"!");
      }
      elseif (dayOfTheWeek === 4); {
        alert("Congratulations! You were born on a "+days[4]+" and your Akan name is "+maleAkanNames[4]+"!");
      }
      elseif (dayOfTheWeek === 5); {
        alert("Congratulations! You were born on a "+days[5]+" and your Akan name is "+maleAkanNames[5]+"!");
      }
      else {
        alert("Congratulations! You were born on a "+days[6]+" and your Akan name is "+maleAkanNames[6]+"!");
      }
    break;
    case "female":
      if (dayOfTheWeek === 0); {
        alert("Congratulations! You were born on a "+days[0]+" and your Akan name is "+femaleAkanNames[0]+"!");
      }
      elseif (dayOfTheWeek === 1); {
        alert("Congratulations! You were born on a "+days[1]+" and your Akan name is "+femaleAkanNames[1]+"!");
      }
      elseif (dayOfTheWeek === 2); {
        alert("Congratulations! You were born on a "+days[2]+" and your Akan name is "+femaleAkanNames[2]+"!");
      }
      elseif (dayOfTheWeek === 3); {
        alert("Congratulations! You were born on a "+days[3]+" and your Akan name is "+femaleAkanNames[3]+"!");
      }
      elseif (dayOfTheWeek === 4); {
        alert("Congratulations! You were born on a "+days[4]+" and your Akan name is "+femaleAkanNames[4]+"!");
      }
      elseif (dayOfTheWeek === 5); {
        alert("Congratulations! You were born on a "+days[5]+" and your Akan name is "+femaleAkanNames[5]+"!");
      }
      else {
        alert("Congratulations! You were born on a "+days[6]+" and your Akan name is "+femaleAkanNames[6]+"!");
      }
    break;
  }
}
