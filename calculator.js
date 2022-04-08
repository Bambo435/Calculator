
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

function operate(list, operator) {
   return list.reduce(operations[operator]);
};