function compareArrays(arr1, arr2) {

  return arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((elemPos) => elemPos >= 0).filter((elemThree) => elemThree % 3 === 0).map((elemMult) => elemMult * 10);

  return resultArr; // array
}