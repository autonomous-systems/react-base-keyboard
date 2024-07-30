import { useMuiKeyboard } from '@autosys/react-base-keyboard';

const App = () => {
  const { inputValue, keyBoard, keyboardFeature } = useMuiKeyboard();
  return (
    <div className="flex flex-col justify-center items-start ml-10 mt-10">
      <div className="flex flex-row">
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          value={inputValue}
          onClick={() => keyboardFeature({ openKeyboard: true })}
        />

        <button className="btn ml-3" onClick={() => keyboardFeature({ openKeyboard: false })}>
          {'Close'}
        </button>
      </div>
      <div>{keyBoard}</div>
    </div>
  );
};

export default App;
