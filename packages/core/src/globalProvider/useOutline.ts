import { useBlackmakerContext } from './BlackmakerContext';
import cxs from 'cxs';
import { lighten } from '../common';
import { useTheme } from '..';

export const useOutline = (): cxs.CSSObject | undefined => {
  const { keyboardMode } = useBlackmakerContext();
  const theme = useTheme();
  return (
    keyboardMode && {
      ':focus': {
        outline: `${lighten(theme.definition.brandColors.primary, 0.2)} solid 4px`,
      },
    }
  );
};
