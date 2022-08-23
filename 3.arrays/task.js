function compareArrays(arr1, arr2) {
  let result;

  (arr1.length === arr2.length) ? result = arr1.every((elem, index) => arr1[index] === arr2[index]) : result = false;

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((elemPos) => elemPos >= 0).filter((elemThree) => elemThree % 3 === 0).map((elemMult) => elemMult * 10);

  return resultArr; // array
}