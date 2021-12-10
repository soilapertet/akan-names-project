var year = document.getElementById("Years").value;
// Isolate century digits
var CC = parseInt(year.toString().slice(0,2));
// Isolate year digits
var YY = parseInt(year.toString().slice(2));
var MM = document.getElementById("Months").value;
var DD = document.getElementById("Days").value;

// Create a function to check validity of the entries of the form
function checkValidity() {
  if(document.getElementById("Days").value === "days" && document.getElementById("Months").value === "months" &&
  document.getElementById("Years").value === "years"); {
    alert("Please choose a valid date, month and year.");
  } 
  elseif (document.getElementById("Days").value === "days"); {
    alert("Please choose a valid date.");
  } 
  elseif (document.getElementById("Months").value === "months"); {
    alert("Please choose a valid month.");
  } 
  elseif (document.getElementById("Years").value === "years"); {
    alert("Please choose a valid year.");
  }
  else {
    return false;
  }
}














// Create a function to calculate the day of the week
function  dayOfTheWeek() {
return Math.round((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+ DD) % 7);
}

