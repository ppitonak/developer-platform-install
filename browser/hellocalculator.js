'use strict';

import Calculator from './services/calculator';

class Hello {
  constructor(greeting = 'Hello', x, y) {
    this.calculator = new Calculator(x,y);
    this.greeting = greeting;
  }

  greet() {
    return this.greeting + '! Your lucky number is ' + this.calculator.add();
  }
}

export default Hello;
