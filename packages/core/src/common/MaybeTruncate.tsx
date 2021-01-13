import * as React from 'react';
import cxs from 'cxs';

export interface MaybeTruncateProps {
  truncate?: boolean;
  content?: string;
}

export const MaybeTruncate: React.FC<MaybeTruncateProps> = props => {
  return (
    <div
      title={props.content}
      className={cxs({
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
    </div>
  );
};
