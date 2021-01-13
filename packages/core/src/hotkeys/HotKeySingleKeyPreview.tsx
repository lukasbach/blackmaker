import * as React from 'react';
import cxs from 'cxs';
import { useTheme } from '../theming';
import { Intent } from '../common';

export const HotKeySingleKeyPreview: React.FC<{}> = props => {
  const theme = useTheme();

  return (
    <kbd
      className={cxs({
        fontFamily: 'monospace',
        display: 'inline-block',
        textTransform: 'uppercase',
        fontSize: '1em',
        color: theme.definition.textHightlightColor,
        backgroundColor: theme.getColor(Intent.Default),
        boxShadow: `0 2px 0 0 ${theme.getColorLighten(Intent.Default, 0.3)}`,
        padding: '.1em .4em',
        margin: '.2em .1em',
        borderRadius: theme.definition.borderRadiusSmall,
      })}
    >
      {props.children}
    </kbd>
  );
};
