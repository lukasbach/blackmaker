import { OverlayTransition } from './OverlayTransition';

export const dialogTransition: OverlayTransition = {
  enter: {
  duration: 300,
    opacity: true,
    transform: 'translateY(20px) scale(.9)'
  },
  exit: {
    duration: 300,
    opacity: true,
    transform: 'translateY(20px) scale(.9)'
  }
};
