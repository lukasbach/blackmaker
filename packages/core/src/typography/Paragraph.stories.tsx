import React from 'react';
import { Meta } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Core/Typography/Paragraph',
} as Meta;

const loremIpsum = 'Ein mandalorianischer Kopfgeldjäger (Pedro Pascal), der sich frappierend von Boba Fett unterscheidet, geht seinem zwielichtigen Job nach, wobei gerade die Moral häufig in Konflikt mit seinen manchmal eher zweifelhaften Aufträgen gerät. Die Handlung setzt fünf Jahre nach dem Fall des Imperiums ein, der sich in „Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter“ ereignete. Zu diesem Zeitpunkt sprießen die ersten Triebe der Ersten Ordnung, welche sich sukzessive zu einer dominanten Macht im Universum erheben wird. Im Hintergrund werden entsprechen fleißig Pläne auf politischer Ebene gesponnen. Die Wege des Mandalorianers und von dem ehemaligen imperiale Sektorgouverneur Moff Gideo (Giancarlo Esposito) kreuzen sich immer wieder – und es entsteht eine bitterböse Feindschaft zwischen den beiden.';

export const RegularText = () => (
  <Paragraph
    content={loremIpsum}
  />
);

export const RunningText = () => (
  <Paragraph
    content={loremIpsum}
    running={true}
  />
);

export const SmallText = () => (
  <Paragraph
    content={loremIpsum}
    small={true}
  />
);

export const LargeText = () => (
  <Paragraph
    content={loremIpsum}
    large={true}
  />
);

export const HighlightedText = () => (
  <Paragraph
    content={loremIpsum}
    highlighted={true}
  />
);

export const MutedText = () => (
  <Paragraph
    content={loremIpsum}
    muted={true}
  />
);

export const DisabledText = () => (
  <Paragraph
    content={loremIpsum}
    disabled={true}
  />
);

export const TruncatedText = () => (
  <Paragraph
    content={loremIpsum}
    truncate={true}
  />
);

export const UnselectableText = () => (
  <Paragraph
    content={loremIpsum}
    noSelect={true}
  />
);
