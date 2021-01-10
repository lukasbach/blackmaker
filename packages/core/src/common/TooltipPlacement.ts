export enum TooltipPlacement {
  AutoStart = 'auto-start',
  Auto = 'auto',
  AutoEnd = 'auto-end',
  TopStart = 'top-start',
  Top = 'top',
  TopEnd = 'top-end',
  RightStart = 'right-start',
  Right = 'right',
  RightEnd = 'right-end',
  BottomEnd = 'bottom-end',
  Bottom = 'bottom',
  BottomStart = 'bottom-start',
  LeftEnd = 'left-end',
  Left = 'left',
  LeftStart = 'left-start',
}

// https://github.com/palantir/blueprint/blob/develop/packages/core/src/components/popover/popperUtils.ts
/** Converts a full placement to one of the four positions by stripping text after the `-`. */
export function getTooltipPlacementPosition(placement: TooltipPlacement) {
  return placement.split("-")[0] as TooltipPlacement;
}
