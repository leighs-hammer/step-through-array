"use strict";

var _chai = require("chai");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mockValue = 'tigers';
const mockValueEnd = 'sharks';
const mockArray = ['tigers', 'bears', 'lions', 'sharks'];
describe('STEP THROUGH ARRAY: Success Tests', () => {
  it('it should step to the next value', () => {
    const returnedValue = (0, _index.default)(mockValue, mockArray);
    (0, _chai.expect)(returnedValue).to.be.eql('bears');
    const returnedValueImplicit = (0, _index.default)(mockValue, mockArray, false);
    (0, _chai.expect)(returnedValue).to.be.eql('bears');
  });
  it('it should step to the previous value', () => {
    const returnedValue = (0, _index.default)(mockValueEnd, mockArray, true);
    (0, _chai.expect)(returnedValue).to.be.eql('lions');
  });
  it('it should loop to the beginning', () => {
    const returnedValue = (0, _index.default)(mockValueEnd, mockArray);
    (0, _chai.expect)(returnedValue).to.be.eql('tigers');
  });
  it('it should loop to the end in reverse mode', () => {
    const returnedValue = (0, _index.default)(mockValue, mockArray, true);
    (0, _chai.expect)(returnedValue).to.be.eql('sharks');
  });
});
describe('STEP THROUGH ARRAY: Failure Tests', () => {
  it('should fail gracefully', () => {
    const returnedValue = (0, _index.default)();
    (0, _chai.expect)(returnedValue).to.be.false;
  });
  it('should fail gracefully when a non valid array value is passed', () => {
    const returnedValue = (0, _index.default)('panthers', mockArray);
    (0, _chai.expect)(returnedValue).to.be.false;
  });
  it('should fail gracefully when wrong values are passed', () => {
    const returnedValue = (0, _index.default)(mockArray, mockValue, 'string');
    (0, _chai.expect)(returnedValue).to.be.false;
  });
  it('should fail gracefully when a non boolean is passed', () => {
    const returnedValue = (0, _index.default)(mockValue, mockArray, 'true');
    (0, _chai.expect)(returnedValue).to.be.eql('bears');
  });
});