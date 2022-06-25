var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const operator = prompt("Enter operator (+, -, *, /)");

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
}

document.write(num1 + operator + num2 + "=" + result);
