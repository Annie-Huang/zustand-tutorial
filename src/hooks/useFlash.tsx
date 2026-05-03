import { type RefObject, useEffect } from 'react';

// Custom hook to flash on render
/*
export const useFlash = (ref: RefObject<HTMLDivElement | null>) => {
  // const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ref?.current?.style.backgroundColor = 'yellow';
    setTimeout(() => {
      if (ref.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ref?.current?.style?.backgroundColor = 'transparent';
      }
    }, 300);
  }, [ref, ref?.current?.textContent]);

  return ref?.current?.textContent;
};
*/

export const useFlash = (ref, trigger) => {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      // Apply flash style
      element.style.border = '2px solid red';
      element.style.backgroundColor = '#ffcccc';

      // Remove style after 500ms
      const timer = setTimeout(() => {
        element.style.border = '';
        element.style.backgroundColor = '';
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [ref, trigger]); // Re-run when ref or trigger changes
};

// Component using the hook
// const MyComponent = () => {
//   const flasherRef = useFlasher();
//   return <div ref={flasherRef}>Hello World</div>;
// };
