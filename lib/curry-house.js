var curry = require('./curry');

function calculate (num1) {
  return function (str) {

   switch (str) {

    case '+':
      return function (num2) {
        return num1 + num2;
        };

    case 'add':
      return function (num2) {
        return num1 + num2;
        };

    case '-':
      return function (num2) {
        return num1 - num2;
      };

    case 'subtract':
      return function (num2) {
        return num1 - num2;
      };

    case '*':
      return function (num2) {
        return num1 * num2;
      };

    case 'multiply':
      return function (num2) {
        return num1 * num2;
      };

    case '/':
      return function (num2) {
        return num1 / num2;
      };

    case 'divide':
      return function (num2) {
        return num1 / num2;
      };

    case '%':
      return function (num2) {
        return num1 % num2;
      };

    case 'modulo':
      return function (num2) {
        return num1 % num2;
      };

    case '^':
      return function (num2) {
        return Math.pow(num1, num2);
      };

    case 'power of':
      return function (num2) {
        return Math.pow(num1, num2);
      };
    }
  };
}

function random (start) {
  return {
    to : function(end) {
      return Math.floor((Math.random() * (end - start)) + start);
    },
    toInclude : function(end) {
      return Math.floor((Math.random() * (end - start)) + start) + 1;
    },
  };
}

function concat(str1, str2){
  return str1.concat(str2);
}

var prependGreeting = curry(concat, 'Hello ');

function add (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
  return function (op2, op1) {

    switch (operation) {

      case '+':
      case 'add':
      return op2 + op1;

      case '-':
      case 'subtract':
      return op1 - op2;

      case '*':
      case 'multiply':
      return op1 * op2;

      case '/':
      case 'divide':
      return op1 / op2;

      case '%':
      case 'modulo':
      return op1 % op2;

      case '^':
      case 'power of':
      return Math.pow(op1, op2);
      }
  };
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};
