import { createContext, type ReactNode, useContext, useState } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

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

export const useCounter = () => {
  const value = useContext(CounterContext);
  if (value == null) {
    throw new Error('useCounter must be defined');
  }

  return value;
};
