"use strict";

function float(value) {
  let arr = [];
  if (value * 1) {
    return value - (value % 1);
  }
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "0") {
      arr.push(value[i]);
      continue;
    }
    if (value[i] === ".") {
      arr.push(value[i]);
      continue;
    }
    if (value[i] * 1) {
      arr.push(value[i]);
    } else {
      break;
    }
  }
  arr = arr.join("");
  return arr;
}
