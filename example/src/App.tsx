import React from 'react';
import { useMuiKeyboard } from '../../src/context';

const App = () => {
  const { inputValue, keyBoard, keyboardFeature } = useMuiKeyboard();
  return (
    <div>
      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs"
        value={inputValue}
      />
      {keyBoard}
      <button className="btn" onClick={() => keyboardFeature({ openKeyboard: true })}>
        {'open'}
      </button>
    </div>
  );
};

export default App;
