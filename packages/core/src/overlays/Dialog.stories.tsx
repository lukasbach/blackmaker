import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Dialog } from './Dialog';
import { IconName } from '..';
import { Button } from '../button/Button';
import { Intent } from '../common';
import { CardArea } from '../card/CardArea';
import { Paragraph } from '../typography/Paragraph';

export default {
  title: 'Core/Overlays/Dialog',
} as Meta;

const loremIpsum = 'Ein mandalorianischer Kopfgeldjäger (Pedro Pascal), der sich frappierend von Boba Fett unterscheidet, geht seinem zwielichtigen Job nach, wobei gerade die Moral häufig in Konflikt mit seinen manchmal eher zweifelhaften Aufträgen gerät. Die Handlung setzt fünf Jahre nach dem Fall des Imperiums ein, der sich in „Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter“ ereignete. Zu diesem Zeitpunkt sprießen die ersten Triebe der Ersten Ordnung, welche sich sukzessive zu einer dominanten Macht im Universum erheben wird. Im Hintergrund werden entsprechen fleißig Pläne auf politischer Ebene gesponnen. Die Wege des Mandalorianers und von dem ehemaligen imperiale Sektorgouverneur Moff Gideo (Giancarlo Esposito) kreuzen sich immer wieder – und es entsteht eine bitterböse Feindschaft zwischen den beiden.';

export const DialogControlledInterface: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={open}
        title="Dialog Title"
        subtitle="Dialog Subtitle"
        closeButton={true}
        onClose={() => setOpen(false)}
      >
        <CardArea>
          <Paragraph>{loremIpsum}</Paragraph>
        </CardArea>
      </Dialog>
    </>
  );
};

export const SimpleDialog: React.FC = () => (
  <Dialog isOpen={true}>
    Content
  </Dialog>
);

export const ComplexDialog: React.FC = () => (
  <Dialog
    isOpen={true}
    title="Dialog Title"
    highlightedTitle={true}
    icon={IconName.Accessibility}
    closeButton={true}
    footerAlignRight={true}
    footer={(
      <>
        <Button>Yay</Button>
        <Button intent={Intent.Primary}>Let's roll!</Button>
      </>
    )}
  >
    <CardArea>
      <Paragraph>{loremIpsum}</Paragraph>
    </CardArea>
  </Dialog>
);

export const DialogWithRegularTitle: React.FC = () => (
  <Dialog
    isOpen={true}
    title="Dialog Title"
    subtitle="Dialog Subtitle"
    closeButton={true}
  >
    <CardArea>
      <Paragraph>{loremIpsum}</Paragraph>
    </CardArea>
  </Dialog>
);

export const DialogWithHighlightedTitle: React.FC = () => (
  <Dialog
    isOpen={true}
    title="Dialog Title"
    highlightedTitle={true}
    closeButton={true}
  >
    <CardArea>
      <Paragraph>{loremIpsum}</Paragraph>
    </CardArea>
  </Dialog>
);

export const DialogWithRegularTitleAndIcon: React.FC = () => (
  <Dialog
    isOpen={true}
    title="Dialog Title"
    subtitle="Dialog Subtitle"
    icon={IconName.Accessibility}
    closeButton={true}
  >
    <CardArea>
      <Paragraph>{loremIpsum}</Paragraph>
    </CardArea>
  </Dialog>
);

export const DialogWithHighlightedTitleAndIcon: React.FC = () => (
  <Dialog
    isOpen={true}
    title="Dialog Title"
    highlightedTitle={true}
    icon={IconName.Accessibility}
    closeButton={true}
  >
    <CardArea>
      <Paragraph>{loremIpsum}</Paragraph>
    </CardArea>
  </Dialog>
);
