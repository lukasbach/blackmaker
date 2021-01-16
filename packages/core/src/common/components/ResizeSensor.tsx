import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

export interface ResizeSensorProps {
  renderContent: (ref: React.MutableRefObject<any>, currentSize?: ResizeObserverEntry) => JSX.Element;
  onResize?: (entries: ResizeObserverEntry[], observer: ResizeObserver) => any;
}

export const ResizeSensor: React.FC<ResizeSensorProps> = props => {
  const [currentSize, setCurrentSize] = useState<ResizeObserverEntry>();
  const ref = useRef<HTMLElement>();
  const observer = useRef(
    new ResizeObserver((entries, observer) => {
      props.onResize?.(entries, observer);
      setCurrentSize(entries[0]);
    })
  );
  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => observer.current.disconnect();
  }, [props.renderContent]);

  return props.renderContent(ref, currentSize);
};
