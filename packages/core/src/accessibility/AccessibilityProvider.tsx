import * as React from 'react';
import cxs from 'cxs';
import { FocusRingScope } from 'react-focus-rings';
import { useBlackmakerContext } from '../globalProvider/BlackmakerContext';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';
import { useTheme } from '../theming';

export const AccessibilityProvider: React.FC<{}> = props => {
  const containerRef = useRef<HTMLDivElement>(null);
  const app = useBlackmakerContext();
  const theme = useTheme();

  return (
    <div ref={containerRef} className={cxs({ height: '100%' })}>
      <Helmet>
        <style type="text/css">{`
          .focus-rings-ring {
            /* Ensure the ring doesn't affect the page */
            position: absolute;
            display: ${app.keyboardMode ? 'block' : 'none'};
            pointer-events: none;
            /* Default styling */
            background: none;
            margin: 0;
            padding: 0;
            border-radius: ${theme.definition.borderRadiusSmall};
            box-shadow: 0 0 0 4px ${theme.definition.focusRingColor};
            z-index: 9999;
          }
        `}</style>
      </Helmet>
      <FocusRingScope containerRef={containerRef}>{props.children}</FocusRingScope>
    </div>
  );
};
