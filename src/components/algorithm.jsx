class stack {
  constructor(size = 100) {
    this.size = size;
    this.items = [];
    this.top = -1;
  }

  // getter
  get lastIndex() {
    return this.top;
  }
  get stackLen() {
    return this.items.length;
  }
  get leftSize() {
    return this.size - this.stackLen;
  }
  get peek() {
    if (this.isEmpty() == true) return;
    return this.items[this.top];
  }

  // setter
  getItem(index) {
    if (index > this.top || index < 0) {
      return;
    }
    return this.items[index];
  }
  isFull() {
    if (this.top == this.size - 1) {
      return true;
    } else {
      return false;
    }
  }
  isEmpty() {
    if (this.top < 0) {
      return true;
    } else {
      return false;
    }
  }
  push(element) {
    if (this.isFull() == true) return;

    this.top++;
    this.items[this.top] = element;
  }

  pop() {
    let data;
    if (this.isEmpty() == true) return;

    data = this.items.splice(this.top, 1);
    this.top--;
    return data[0];
  }

  traverse() {
    return this.items;
  }
}

// hierarchy of operators
const PRECEDENCE = {
  '-': 0,
  '+': 0,
  '%': 1,
  '/': 1,
  '*': 1,
  '^': 2,
  ')': 3,
  '(': 3,
};

// return the hierarchy of operator
const precidencer = (operator) => {
  // precedence of operators:
  // * > ^ > / > % > + > - > ) > ( > any operand
  const operators = ['', '(', ')', '-', '+', '%', '/', '*', '^'];

  for (i = 0; i < operators.length; i++) {
    if (operator === operators[i]) return i;
  }
};

// check the current substring
const isAnOperator = (char) => PRECEDENCE[char] !== undefined;
const isAParenthesis = (char) => PRECEDENCE[char] === 3;

// Infix to postfix conversion
export function infixToPostfix(expression, tab = 0) {
  const infixExp = [...expression.split(''), ')'];
  const postfixExp = [];

  const stack = ['('];

  var table = {
    exp: [],
    stak: [],
    conexp: [],
  };

  table.exp.push('');
  table.stak.push(stack.join(' '));
  table.conexp.push(postfixExp.join(''));

  for (var char of infixExp) {
    if (char === '(') {
      stack.push(char);
      continue;
    } else if (!isAnOperator(char)) {
      postfixExp.push(char);
    } else if (char === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        const last = stack.pop();
        postfixExp.push(last);
      }
      stack.pop();
    } else if (isAnOperator(char)) {
      while (
        stack.length > 0 &&
        PRECEDENCE[stack[stack.length - 1]] >= PRECEDENCE[char] &&
        !isAParenthesis(stack[stack.length - 1])
      ) {
        postfixExp.push(stack.pop());
      }

      stack.push(char);
    }

    if (tab == 1) {
      table.exp.push(char);
      table.stak.push(stack.join(' '));
      table.conexp.push(postfixExp.join(''));
    }
  }

  while (stack.length > 0) {
    postfixExp.push(stack.pop());
  }

  return {
    postfixExpression: postfixExp.join(''),
    table: table,
  };
}

// reverser

function reverser(expression) {
  var _temp = expression.split('');

  for (var i = 0; i < expression.length; i++) {
    if (_temp[i] === ')') {
      _temp[i] = '(';
    } else if (_temp[i] === '(') {
      _temp[i] = ')';
    }
  }

  return _temp.reverse().join('');
}

export function infixToPrefix(expression, tab = 0) {
  expression = infixToPostfix(reverser(expression), tab);
  return {
    prefixExpression: reverser(expression['postfixExpression']),
    table: expression['table'],
  };
}

function isNumbers(expression) {
  let isNumber = true;

  const splited = expression.split(' ');

  for (const char of splited) {
    if ('+-/*()^'.includes(char)) continue;

    const num = parseInt(char);
    if (num.toString() === 'NaN') {
      isNumber = false;
      break;
    }
  }

  return isNumber;
}

export function postfixEval(expression) {
  expression = expression.trim();

  const postfixExp = [...expression.split(' '), ')'];

  const isNumber = isNumbers(expression);

  const table = {
    char: [],
    s: [],
  };

  console.log(isNumber);

  const stack = [];
  let finalResult = 0;
  for (const char of postfixExp) {
    if (char === ')') break;

    if (!isAnOperator(char)) {
      stack.push(char);
    } else {
      const a = stack.pop();
      const b = stack.pop();

      let result = `(${b}${char}${a})`;

      stack.push(result);
    }

    finalResult = stack[stack.length - 1];

    table.char.push(char);
    table.s.push(stack.join(' '));
  }

  let _tresult = `${finalResult}`;

  if (isNumber) {
    _tresult += ` = ${eval(finalResult)}`;
  }

  table.s[table.s.length - 1] = _tresult;

  return table;
}

function prefixEval(expression) {
  expression = expression.trim();

  const prefixExp = expression.split(' ');

  const stack = [];

  const table = {
    char: [],
    s: [],
  };

  for (const char of prefixExp.reverse()) {
    if (!isAnOperator(char)) {
      stack.push(char);
    } else {
      const a = stack.pop();
      const b = stack.pop();

      const result = `(${a}${char}${b})`;

      stack.push(result);
    }

    table.char.push(char);
    table.s.push(stack.join(' '));
  }

  // table.char = table.char.reverse();
  // table.s = table.s.reverse();

  const finalResult = table.s[table.s.length - 1];

  let _tresult = `${finalResult}`;

  if (isNumber) {
    _tresult += ` = ${eval(finalResult)}`;
  }

  table.s[table.s.length - 1] = _tresult;

  return table;
}

function checker(expression) {
  if (precidencer(expression[0]) > 2) {
    return 1;
  } else {
    return 0;
  }
}

///

////

///

///

///

// // INFIX TO PREFIX
// export const infixToPrefix = (expression) => {
//   console.log(expression);
//   console.log('infix-To-Prefix');
//   //   [...text].forEach((c) => console.log(c));
// };

// // INFIX TO POSTFIX
// export const infixToPostfix = (expression) => {
//   console.log(expression);
//   console.log('infix-To-Postfix');
// };

// // PREFIX TO INFIX
// export const prefixToInfix = (expression) => {
//   console.log(expression);
//   console.log('prefix-To-Infix');
// };

// // PREFIX TO POSTFIX
// export const prefixToPostfix = (expression) => {
//   console.log(expression);
//   console.log('prefix-To-Postfix');
// };

// // POSTFIX TO INFIX
// export const postfixToInfix = (expression) => {
//   console.log(expression);
//   console.log('postfix-To-Infix');
// };

// // POSTFIX TO PREFIX
// export const postfixToPrefix = (expression) => {
//   console.log(expression);
//   console.log('postfix-To-Prefix');
// };
