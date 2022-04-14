// object for operate functions to use
let operations = {
   '+' : function (num1, num2) {
      return num1 + num2;
   },
   '-' : function(num1, num2){
      return num1 - num2;
   },
   '*' : function(num1, num2) {
      return num1 * num2;
   },
   '/' : function(num1, num2){
      return num1 / num2;
   }
};
// Takes in an array and reduces them with one of the operator functions from the object

function operate(list, operator) {
   return list.reduce(operations[operator]);
};
// CalculatorInput is the initial number that will be stored.
// CalculatorArray holds the inputs passed from calculatorInput to be called on by the operate().

let calculatorInput = '';
let calculatorArray = [];
let operator = '';
let newOperandCheck = false;

// DOM selection referencing the number buttons, and the number display.

const buttons = document.getElementsByClassName('number-button');
const buttons2 = Array.from(buttons);
const display = document.querySelector('.display');

// Input the button number into the calculatorInput variable with a click event listener on each button, as well as adding the number into the display. 

buttons2.forEach(function(button) {
   button.addEventListener('click', () => {
     if (display.textContent.length > 12 && newOperandCheck === false){
        return;
     }  else if (newOperandCheck === false){
      calculatorInput += button.id;
      display.textContent += button.id;
      } else {
         display.textContent = '';
         calculatorInput = 0;
         calculatorInput += button.id;
         display.textContent += button.id;
         newOperandCheck = false;
         
      }
   })
});

// Referencing the clear button DOM, then adding a click event listener with a function to clear the input and array variable along with the display.

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
   calculatorInput = '';
   calculatorArray = [];
   display.textContent = '';
   operator = '';
})


// Referencing the operator buttons' DOM.
const operators = document.getElementsByClassName('operator-button');
const operatorsArray = Array.from(operators);



// Operator button click event listeners. If a number is already present in the array, the operator will just be stored in the operator variable. Otherwise, the input will be passed into the array.

 operatorsArray.forEach(function(button) {
   button.addEventListener('click', () => {
   calculatorArray.push(parseFloat(calculatorInput));
   if (calculatorArray.length === 2) {
      display.textContent = operate(calculatorArray, operator);
      calculatorArray.push(operate(calculatorArray, operator));
      calculatorArray.splice(0, 2);
      calculatorInput = '';  
      operator = button.id;
      newOperandCheck = true;
      decimalCheck = false
   } else {   
      operator = button.id;
      calculatorInput = '';
      newOperandCheck = true;
      decimalCheck = false
   }
   })
});    

// referencing the equal button DOM.

const equalButton = document.getElementById('equal-button'); 

// equal button click event listener, which pushes the inputs to the array, then calls the operate() onto the array to deliver the result to the display. This result is also saved into 
// the array if another calculation is needed. removed parseInt from calculatorInput and tried converting inputs to float


equalButton.addEventListener('click', () => {
   if (calculatorInput && calculatorArray.length === 0) {
      display.textContent = parseFloat(calculatorInput);
      newOperandCheck = true;
      decimalCheck = false
   } else if 
      (calculatorInput && calculatorArray.length === 1) { 
      calculatorArray.push(parseFloat(calculatorInput));
      display.textContent = operate(calculatorArray, operator);
      calculatorInput = operate(calculatorArray, operator);
      calculatorArray = [];  
      newOperandCheck = true;
      decimalCheck = false
   } else if 
      (calculatorInput === '' && calculatorArray.length === 1) {
         display.textContent = calculatorArray[0];
         newOperandCheck = true;
         decimalCheck = false
   } else {
      display.textContent = '0';
      calculatorInput = 0;
      newOperandCheck = true;
      decimalCheck = false
   }
   
});

const decimal = document.getElementById('decimal');
let decimalCheck = false;

decimal.addEventListener('click', () => {
 if (decimalCheck === false) {
    display.textContent += '.';
    calculatorInput += '.';
    decimalCheck = true;
 } else {
    return;
 }
});