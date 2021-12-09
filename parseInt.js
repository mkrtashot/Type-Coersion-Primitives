"use strict";

function int(value) {
  let arr = [];
  value += "";

  let valueArr = value.split(" ");

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] === "") {
      valueArr.shift();
      i--;
    } else {
      break;
    }
  }

  valueArr = valueArr[0];

  valueArr += "";

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] === "0") {
      arr.push(valueArr[i]);
      continue;
    }

    if (valueArr[i] * 1) {
      arr.push(valueArr[i]);
    } else {
      break;
    }
  }

  arr = arr.join("");
  if (arr === "") {
    return NaN;
  }
  return arr;
}

console.log(int(" 21312 32423 233"));
console.log(parseInt(" 21312 32423 233"));
