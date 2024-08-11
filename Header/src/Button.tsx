import { createSignal } from 'solid-js';

const Button = (props:any) => {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      {props.text} - {count()}
    </button>
  );
};

export default Button;