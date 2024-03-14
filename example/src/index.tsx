import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { MuiKeyboardProvider } from '../../src/context';
import { numbers, russianLetters } from '../../src/data/Keyboards';

ReactDOM.render(
  <MuiKeyboardProvider
    letters={russianLetters}
    numbers={numbers}
    reverseButton
    betweenButtons={'10px'}
    functionalButtonStyle={{
      backButtonStyle: {
        className:
          'bg-slate-100 hover:bg-indigo-300 uppercase text-indigo-900 btn-outline border-indigo-800/70 shadow-md justify-end w-[150px] mr-2',
      },
      spaceButtonStyle: {
        className:
          'bg-slate-100 hover:bg-indigo-300 btn-outline border-indigo-800/70 text-indigo-900 text-xl m-2 w-full',
      },
      letterButtonStyle: {
        className: 'text-indigo-900 text-xl btn-ghost',
      },
      reverseButtonStyle: {
        className: 'text-indigo-900 text-xl btn-ghost',
      },
      enterButtonStyle: {
        className: 'text-indigo-900 text-xl btn-ghost',
      },
      capsButtonStyle: { className: 'btn-ghost' },
    }}
    numberButtonStyle={{
      className:
        'bg-slate-100 hover:bg-indigo-300 btn-outline border-indigo-800/70 text-indigo-900 text-xl m-1 w-20',
    }}
    textButtonStyle={{
      className:
        'bg-slate-100 hover:bg-indigo-300 btn-outline border-indigo-800/70 shadow-md text-indigo-900 text-xl m-1 w-16',
    }}
  >
    <App />
  </MuiKeyboardProvider>,
  document.getElementById('root'),
);
