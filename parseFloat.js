"use strict";

function float(value) {
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

  if (valueArr * 1) {
    return valueArr;
  }
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] === "0") {
      arr.push(valueArr[i]);
      continue;
    }
    if (valueArr[i] === ".") {
      arr.push(valueArr[i]);
      continue;
    }
    if (valueArr[i] * 1) {
      arr.push(valueArr[i]);
    } else {
      break;
    }
  }
  console.log(valueArr);
  arr = arr.join("");
  return arr;
}

console.log(float("12.21312 12312.21"));
console.log(parseFloat("123.123 211 21"));
