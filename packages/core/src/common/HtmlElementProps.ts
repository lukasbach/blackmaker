import { Falsy } from './Falsy';
import cxs from 'cxs';
import React from 'react';

export interface HtmlElementProps<HTMLAttributes = HTMLDivElement> {
  elementProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLAttributes>, HTMLAttributes> | Falsy;
  css?: cxs.CSSObject | Falsy;
}
