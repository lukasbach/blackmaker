import * as React from 'react';
import cxs from 'cxs';

export interface MaybeTruncateProps {
  truncate?: boolean;
  content?: string;
}

export const MaybeTruncate: React.FC<MaybeTruncateProps> = props => {
  return (
    <span
      title={props.content || undefined}
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
