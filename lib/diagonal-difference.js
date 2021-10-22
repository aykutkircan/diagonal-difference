"use strict";

function diagonalDifference(arr) {

  if (!arr) {
    return "Error: Array not defined";
  }

  if (arr && arr.length === 0) {
    return "Error: Array not be blank";
  }

  // Write your code here
  const i = arr.length;
  const j = arr[0].length;

  // check array elements: -100<=x<=100
  for (let index = 0; index<i; index++) {
    const isLegalNumbers = checkNumber(arr[index]);

    if(!isLegalNumbers) {
      return "Error: Unrestricted input value"
    }
  }

  const flatSum = flatSumFunc(arr);
  const reverseSum = reverseSumFunc(arr);

  const resultValue = diffAbsValue(flatSum, reverseSum);

  // matrix array'in duz toplamini yapar.
  function flatSumFunc (matrixArr) {
    const result = matrixArr.reduce((sum, el, index)=>{
      return sum + el[index];
    }, 0);
    return result;
  }

  // matrix array in ters toplamini yapar.
  function reverseSumFunc (matrixArr) {
    const result = matrixArr.reduce((sum, el, index)=>{
      let reverseIndex = el.length - index - 1;
      return sum + el[reverseIndex];
    }, 0);
    return result;
  }

  // Farkini alip mutlak degerini verir.
  function diffAbsValue (a, b) {
    return Math.abs(a-b);
  }

  // input array must be like this: [1,2,3]
  function checkNumber (numbers) {
    const result = numbers.every((e)=>{
      return e <= 100 && e >= -100;
    });
    return result;
  }

  return resultValue;
}

module.exports = {
  diagonalDifference
}

