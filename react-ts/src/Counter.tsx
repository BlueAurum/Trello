import React from "react";

const Counter: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [click, setClick] = React.useState<number>(initial);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const increment = (): void => {
    setClick((prev) => prev + 1);
  };

  const decrement = (): void => {
    setClick((prev) => prev - 1);
  };

  const [name, setName] = React.useState<string>("Stefan");

  React.useEffect(() => {
    document.title = `hello ${name}`;
  }, [name]);

  const newValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const hendlerFocus = (): void => {
    inputRef.current?.focus()
  }

  return (
    <div>
      <p>Click: {click}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <input ref={inputRef} value={name} onChange={(e) => newValue(e)} type="text" />
      <button onClick={()=> hendlerFocus()}>onFocus</button>
    </div>
  );
};

export default Counter;
