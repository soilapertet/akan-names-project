var year = document.getElementById("Years").value;
// Isolate century digits
var CC = parseInt(year.toString().slice(0,2));
// Isolate year digits
var YY = parseInt(year.toString().slice(2));
var MM = document.getElementById("Months").value;
var DD = document.getElementById("Days").value;
// Create a function to calculate the day of the week
var dayOfTheWeek = function(CC ,YY ,MM ,DD) {
return Math.round((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+ DD) % 7);
}
alert(dayOfTheWeek(20,00,07,20));