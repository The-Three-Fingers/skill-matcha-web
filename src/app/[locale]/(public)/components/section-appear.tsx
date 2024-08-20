import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

function useIsVisible(
  ref:
    | React.RefObject<HTMLElement | undefined>
    | React.MutableRefObject<HTMLElement | undefined>,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(Boolean(entry?.isIntersecting));
    });

    if (!ref.current) {
      return () => {};
    }

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function SectionAppear(props: React.PropsWithChildren<{}>) {
  const ref = useRef() as RefObject<HTMLDivElement>;
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {props.children}
    </div>
  );
}
