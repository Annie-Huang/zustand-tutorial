import { type RefObject, useEffect, useState } from 'react';

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
  const [renderTimes, setRenderTimes] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      setRenderTimes(renderTimes + 1);

      // Apply flash style
      element.style.outline = '2px solid #50C878';
      element.style.backgroundColor = '#AFE1AF';

      // Remove style after 500ms
      const timer = setTimeout(() => {
        element.style.outline = '';
        element.style.backgroundColor = '';
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [ref, trigger]); // Re-run when ref or trigger changes

  return renderTimes;
};

// Component using the hook
// const MyComponent = () => {
//   const flasherRef = useFlasher();
//   return <div ref={flasherRef}>Hello World</div>;
// };
