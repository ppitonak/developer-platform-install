'use strict';

import Hello from 'hellocalculator';

describe('hellocalculator', function() {
  it('constructor: default parameters are Hello, 0 and 0', function() {
    let hello = new Hello();
    expect(hello.greeting).toBe('Hello');
    expect(hello.calculator.x).toBe(0);
    expect(hello.calculator.y).toBe(0);
  });

  it('constructor: stores parameters correctly', function() {
    let hello = new Hello('Bye', 5, 7);
    expect(hello.greeting).toBe('Bye');
    expect(hello.calculator.x).toBe(5);
    expect(hello.calculator.y).toBe(7);
  });

  it('greets correctly', function() {
    let hello = new Hello('Bye', 3, 9);
    expect(hello.greet()).toBe('Bye! Your lucky number is 12');
  });
})
