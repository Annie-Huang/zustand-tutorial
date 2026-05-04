import { create } from 'zustand/react';

export const useCounterStore = create((set) => {
  return {
    count: 0,
  };
});
