import { createContext, type ReactNode, useContext, useState } from 'react';

// type CounterState = {
type CounterContextType = {
  // I think CounterContextType for me is better, don't want to create too many variables
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// const CounterContext = createContext<CounterState | null>(null);
const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => {
  const value = useContext(CounterContext);
  if (value == null) {
    throw new Error('useCounter must be defined');
  }

  return value;
};
