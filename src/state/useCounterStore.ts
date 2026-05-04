import { create } from 'zustand/react';

// type CounterContextType = {
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState>((set) => {
  return {
    count: 0,
  };
});
