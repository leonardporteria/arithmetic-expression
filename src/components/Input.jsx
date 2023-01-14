import { useState } from 'react';
import * as ExpressionAlgorithm from './algorithm';

const Input = () => {
  const [expression, setExpression] = useState('');
  const [notation, setNotation] = useState('infix');

  const handleSetExpression = (value) => {
    setExpression(value.replaceAll(' ', ''));
  };

  const handleSetNotation = (value) => {
    setNotation(value);
  };

  const handleSolve = () => {
    if (notation === 'infix') {
      ExpressionAlgorithm.infixToPrefix(expression);
      ExpressionAlgorithm.infixToPostfix(expression);
      console.log(ExpressionAlgorithm.postfixEval(expression));
    } else if (notation === 'prefix') {
      ExpressionAlgorithm.prefixToInfix(expression);
      ExpressionAlgorithm.prefixToPostfix(expression);
    } else {
      ExpressionAlgorithm.postfixToInfix(expression);
      ExpressionAlgorithm.postfixToPrefix(expression);
    }
  };

  return (
    <div className='flex flex-col gap-6 p-4 w-1/5 bg-neutral-800 rounded-lg shadow-inner'>
      <h1 className='text-2xl font-semibold'>Input</h1>

      <div>
        <label className='text-neutral-500'>Enter Expression:</label>
        <input
          type='text'
          id=''
          placeholder='Expression'
          onChange={(e) => {
            handleSetExpression(e.target.value);
          }}
          className='text-neutral-900 p-2 w-full rounded'
        />
      </div>

      <div>
        <label className='text-neutral-500'>Input Expression Type:</label>
        <div className='flex justify-between'>
          <input
            type='radio'
            name='expreesion-type'
            value='infix'
            onChange={(e) => {
              handleSetNotation(e.target.value);
            }}
            defaultChecked
          />
          Infix
          <input
            type='radio'
            name='expreesion-type'
            value='prefix'
            onChange={(e) => {
              handleSetNotation(e.target.value);
            }}
          />
          Prefix
          <input
            type='radio'
            name='expreesion-type'
            value='postfix'
            onChange={(e) => {
              handleSetNotation(e.target.value);
            }}
          />
          Postfix
        </div>
      </div>

      <button
        className='bg-indigo-700 rounded-md w-2/5 h-10'
        onClick={handleSolve}
      >
        Solve
      </button>
    </div>
  );
};

export default Input;
