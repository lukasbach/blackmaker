import { Falsy } from '../../common';

export type OverlayTransition =
  | Falsy
  | {
      enter: {
        duration: number;
        opacity?: boolean;
        transform?: string;
      };
      exit: {
        duration: number;
        opacity?: boolean;
        transform?: string;
      };
    };
