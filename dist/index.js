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
const stepThroughArray = function stepThroughArray(current, array) {
  let reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!current || !array) {
    return false;
  }
};

var _default = stepThroughArray;
exports.default = _default;