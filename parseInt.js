"use strict";

function int(value) {
  let arr = [];

  for (let i = 0; i < value.length; i++) {
    if (value[i] === "0") {
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
