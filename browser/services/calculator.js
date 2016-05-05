'use strict';

class Calculator {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  static add(x,y) {
    return x+y;
  }
}

export default Calculator;
