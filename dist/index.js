"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## stepThroughArray
 * @param {*} current - current array 
 * @param {*} array - array to be stepped over
 * @param {boolean} reverse - true to step backwards
 * 
 * @returns {*} array value next or before 
 * 
 */
const stepThroughArray = (current, array, reverse) => {
  if (!current || !array) {
    return false;
  }

  let selectedIndex = array.indexOf(current);

  if (selectedIndex === -1) {
    return false;
  }

  let reversValid = reverse ? typeof reverse === 'boolean' : false;
  let step = reversValid ? --selectedIndex : ++selectedIndex; // Forward loop to beginning

  if (array.length === step && !reversValid) {
    return array[0];
  } // Backwards loop to end


  if (-1 === step && reversValid) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
  }

  return array[step];
};

var _default = stepThroughArray;
exports.default = _default;