import { TooltipPlacement } from '../common';

export const getPopoverInitialTransform = (placement: TooltipPlacement, translation = 5, scale = 0.95) => {
  switch (placement) {
    case TooltipPlacement.AutoStart:
      return `scale(${scale})`;
    case TooltipPlacement.Auto:
      return `scale(${scale})`;
    case TooltipPlacement.AutoEnd:
      return `scale(${scale})`;
    case TooltipPlacement.TopStart:
      return `translateY(${translation}px) translateX(-${translation}px) scale(${scale})`;
    case TooltipPlacement.Top:
      return `translateY(${translation}px) scale(${scale})`;
    case TooltipPlacement.TopEnd:
      return `translateY(${translation}px) translateX(${translation}px) scale(${scale})`;
    case TooltipPlacement.RightStart:
      return `translateY(-${translation}px) translateX(-${translation}px) scale(${scale})`;
    case TooltipPlacement.Right:
      return `translateX(-${translation}px) scale(${scale})`;
    case TooltipPlacement.RightEnd:
      return `translateY(${translation}px) translateX(-${translation}px) scale(${scale})`;
    case TooltipPlacement.BottomEnd:
      return `translateY(-${translation}px) translateX(${translation}px) scale(${scale})`;
    case TooltipPlacement.Bottom:
      return `translateY(-${translation}px) scale(${scale})`;
    case TooltipPlacement.BottomStart:
      return `translateY(-${translation}px) translateX(-${translation}px) scale(${scale})`;
    case TooltipPlacement.LeftEnd:
      return `translateY(${translation}px) translateX(${translation}px) scale(${scale})`;
    case TooltipPlacement.Left:
      return `translateX(${translation}px) scale(${scale})`;
    case TooltipPlacement.LeftStart:
      return `translateY(-${translation}px) translateX(${translation}px) scale(${scale})`;
  }
};
