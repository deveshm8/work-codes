import {useRef} from 'react';

const App = () => {
  const inputRef = useRef(null);

  function handleClick() {
    // 👇️ access input value
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        autoComplete="off"
      />

      <button onClick={handleClick}>Log message</button>
    </div>
  );
};

export default App;
