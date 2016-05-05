'use strict';

import Calculator from 'services/calculator';

let mkdir = require('mkdirp');

describe('calculator', function() {
  it('constructor: default parameters are 0 and 0', function() {
    let calculator = new Calculator();
    expect(calculator.x).toBe(0);
    expect(calculator.y).toBe(0);
  });

  it('constructor: stores parameters correctly', function() {
    let calculator = new Calculator(5,7);
    expect(calculator.x).toBe(5);
    expect(calculator.y).toBe(7);
  });
})
