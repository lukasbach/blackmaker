import * as React from 'react';
import cxs from 'cxs';
import { useEffect, useRef, useState } from 'react';

export interface MaybeTruncateProps {
  truncate?: boolean;
  content?: string;
}

export const MaybeTruncate: React.FC<MaybeTruncateProps> = props => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (props.truncate && spanRef.current) {
      const clone = spanRef.current.cloneNode(true) as HTMLSpanElement;
      clone.style.display = 'inline';
      clone.style.width = 'auto';
      clone.style.visibility = 'hidden';
      document.body.appendChild(clone);
      if (clone.getBoundingClientRect().width > spanRef.current.getBoundingClientRect().width) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
      clone.remove();
    }
  }, [props.children, props.content, spanRef.current]);

  return (
    <span
      ref={spanRef}
      title={props.truncate && isOverflowing ? props.content : undefined}
      className={cxs({
        display: 'block',
        ...(props.truncate
          ? {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
            }
          : {}),
      })}
    >
      {props.children}
      {props.content}
    </span>
  );
};
