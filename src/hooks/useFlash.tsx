import { type RefObject, useEffect } from 'react';

// Custom hook to flash on render
export const useFlash = (ref: RefObject<HTMLDivElement | null>) => {
  // const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ref.current.style.backgroundColor = 'yellow';
    setTimeout(() => {
      if (ref.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref.current.style?.backgroundColor = 'transparent';
      }
    }, 300);
  });

  return ref?.current?.textContent;
};

// Component using the hook
// const MyComponent = () => {
//   const flasherRef = useFlasher();
//   return <div ref={flasherRef}>Hello World</div>;
// };
