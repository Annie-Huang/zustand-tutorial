import { CounterProvider, useCounter } from '../state/CounterContext.tsx';
import { useRef } from 'react';
import { useFlash } from '../hooks/useFlash.tsx';

const CounterDisplay = () => {
  const { count } = useCounter();
  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef, count);

  return (
    <div className='card' ref={cardRef}>
      <p className='count-display'>{count}</p>
      <p className='render-count'>Renders: {renders}</p>
    </div>
  );
};

const incrementOutsideReact = (increment: () => void) => {
  console.log('Outside of React');
  increment();
};

const CountControls = () => {
  const { count, increment, decrement, reset } = useCounter();
  const cardRef = useRef<HTMLDivElement>(null);
  const renders = useFlash(cardRef, count);

  return (
    <div className='card' ref={cardRef}>
      <div className='button-group'>
        <button onClick={decrement}>- 1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ 1</button>
        <button onClick={() => incrementOutsideReact(increment)}>
          + 1 Outside
        </button>
      </div>
      <p className='render-count'>Renders: {renders}</p>
    </div>
  );
};

export const Counter = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CountControls />
    </CounterProvider>
  );
};
