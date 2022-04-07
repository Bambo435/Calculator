function addition(num1, num2) {
if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR, please enter number'
} else {
 return num1 + num2;
}
};

function subtraction(num1, num2) {
 if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR, please enter number'
 } else {
  return num1 - num2;
} 
};

function multiply(num1, num2) {
 if (typeof num1 !== 'number' || typeof num2 !== 'number') {
     return 'ERROR, please enter number'
  } else {
   return num1 * num2;
 }    
};

function divide(num1, num2){
 if (typeof num1 !== 'number' || typeof num2 !== 'number') {
     return 'ERROR, please enter number'
  } else {
   return num1 / num2;
}       
};