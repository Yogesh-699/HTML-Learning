//Program to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    var fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
}

var celsiusValue = 25;
var fahrenheitValue = celsiusToFahrenheit(celsiusValue);

console.log(celsiusValue + "c is equal to" + fahrenheitValue + "F")