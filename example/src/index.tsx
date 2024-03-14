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
        textStyle: 'bg-slate-100 hover:bg-indigo-300 uppercase text-indigo-900',
        borderStyle: 'btn-outline border-indigo-800/70 shadow-md',
        layout: 'justify-end w-[150px] mr-2',
      },
      spaceButtonStyle: {
        bgColor: 'bg-slate-100 hover:bg-indigo-300',
        borderStyle: 'btn-outline border-indigo-800/70',
        textStyle: 'text-indigo-900 text-xl',
        layout: 'm-2 w-full',
      },
      letterButtonStyle: {
        textStyle: 'text-indigo-900 text-xl',
        borderStyle: 'btn-ghost',
      },
      reverseButtonStyle: {
        textStyle: 'text-indigo-900 text-xl',
        borderStyle: 'btn-ghost',
      },
      enterButtonStyle: {
        textStyle: 'text-indigo-900 text-xl',
        borderStyle: 'btn-ghost',
      },
      capsButtonStyle: {},
    }}
    numberButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-20',
    }}
    textButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70 shadow-md',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-16',
    }}
  >
    <App />
  </MuiKeyboardProvider>,
  document.getElementById('root'),
);
