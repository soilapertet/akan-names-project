var year = document.getElementById("Years").value;
// Isolate century digits
var CC = parseInt(year.toString().slice(0,2));
// Isolate year digits
var YY = parseInt(year.toString().slice(2));