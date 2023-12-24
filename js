function convert() {
const celsius = parseFloat(document.getElementById("userInput").value);
const fahrenheit = (celsius * 9/5) + 32;
const endResult = document.getElementById("result");
var text = "";
  
if (isNaN(celsius)) {
  text = "L bozo + Ratio + Type a number";
} else {
  text = celsius + "° celsius = " + fahrenheit.toFixed(2) + " ° fahrenheit";
}
  endResult.innerHTML = text;

                             
}
