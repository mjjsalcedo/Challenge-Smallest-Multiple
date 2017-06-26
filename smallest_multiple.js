/*jshint esversion: 6 */

/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here

    var factor_0 = [];
    var smallestPositive = 0;

      for (var i = 1; i <= ceiling; i++) {
        for (var j = 1; j <= ceiling; j++){
        let combo = i * j;
          if(combo % 2 === 0){
              factor_0.push(combo);
              smallestPositive = factor_0.pop();
          }
        }
     }

     return smallestPositive;

};