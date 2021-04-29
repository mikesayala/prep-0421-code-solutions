function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertedHoursToMinutes = convertHoursToMinutes(3);
console.log('The converted hours to minutes is:', convertedHoursToMinutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var helloWorld = getGreeting('World');
console.log(helloWorld);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var num = addAndMultiplyBy5(10, 5);
console.log('the answer is:', num);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var div = multiplyAndDivideBy5(35, 10);
console.log('the answer is ', div);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var sub = subtractTwoNumbers(22, 7);
console.log('The answer is', sub);

function getCircleCircumference(radius) {
  return 2 * 3.141592653589793 * radius;
}

var circumference = getCircleCircumference(5);
console.log('The circumference is', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getName = getFullName('Juan', 'Ramirez');
console.log('My name is', getName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log('The cube of the number is', cubed);
