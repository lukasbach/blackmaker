import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Button } from '../button/Button';
import { Overlay } from './Overlay';
import cxs from 'cxs';

export default {
  title: 'Core/Overlays/Overlay',
} as Meta;

const OverlayContent = props => (
  <div
    {...props}
    className={cxs({
      width: '400px',
      height: '400px',
      backgroundColor: 'rgba(125, 125, 125, .5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    })}
  >
    Hello!
  </div>
);

export const Overlays: React.FC = () => {
  const [overlayId, setOverlayId] = useState<number>();

  return (
    <div>
      <div>
        <Button onClick={() => setOverlayId(0)}>500ms opacity</Button>
        <Button onClick={() => setOverlayId(1)}>500ms slide and scale</Button>
        <Button onClick={() => setOverlayId(2)}>500ms slide and scale and opacity</Button>
        <Button onClick={() => setOverlayId(3)}>100ms slide in, 800ms opacity out</Button>
      </div>

      <div>
        <Overlay
          renderBackdrop={true}
          centerWithinBackdrop={true}
          closeOnClickBackdrop={true}
          renderContent={p => <OverlayContent {...p} />}
          isOpen={overlayId === 0}
          onClose={() => setOverlayId(undefined)}
          transition={{
            enter: { duration: 500, opacity: true },
            exit: { duration: 500, opacity: true },
          }}
        />

        <Overlay
          renderBackdrop={true}
          centerWithinBackdrop={true}
          closeOnClickBackdrop={true}
          renderContent={p => <OverlayContent {...p} />}
          isOpen={overlayId === 1}
          onClose={() => setOverlayId(undefined)}
          transition={{
            enter: { duration: 500, transform: `translateY(200px) scale(0)`, opacity: false },
            exit: { duration: 500, transform: `translateY(200px) scale(0)`, opacity: false },
          }}
        />

        <Overlay
          renderBackdrop={true}
          centerWithinBackdrop={true}
          closeOnClickBackdrop={true}
          renderContent={p => <OverlayContent {...p} />}
          isOpen={overlayId === 2}
          onClose={() => setOverlayId(undefined)}
          transition={{
            enter: { duration: 500, transform: `translateY(20px) scale(.9)`, opacity: true },
            exit: { duration: 500, transform: `translateY(20px) scale(.9)`, opacity: true },
          }}
        />

        <Overlay
          renderBackdrop={true}
          centerWithinBackdrop={true}
          closeOnClickBackdrop={true}
          renderContent={p => <OverlayContent {...p} />}
          isOpen={overlayId === 3}
          onClose={() => setOverlayId(undefined)}
          transition={{
            enter: { duration: 100, transform: `translateY(200px) scale(0)`, opacity: false },
            exit: { duration: 800, opacity: true },
          }}
        />
      </div>
    </div>
  );
};
