//Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//Example 1:
//Input: x = 123
//Output: 321
//Example 2:
//Input: x = -123
//Output: -321
//Example 3:
//Input: x = 120
//Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   var digits;
   var isNegative = false;
   var result;
   var min = -1* Math.pow(2,31);
    var max =  Math.pow(2,31)-1;
   if(x<0) {
    x=x*-1;
    isNegative = true;
    digits = Array.from(String(x), Number);
   } else {
       digits = Array.from(String(x), Number);
   }
    

   var reversedArr = digits.reduce((acc, digit)=>[
       digit, ...acc
   ], [])
  if(isNegative) {
       result = reversedArr.join('')*-1;
  } else {
      result = reversedArr.join('');
  }
    if (result < max && result > min) {
        return result
    } else {
        return 0
    }
};
