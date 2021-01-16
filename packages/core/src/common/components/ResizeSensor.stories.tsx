import React, { Component } from 'react';
import { Meta } from '@storybook/react';
import { ResizeSensor } from './ResizeSensor';
import cxs from 'cxs';

export default {
  title: 'Core/Common/Resize Sensor',
  component: ResizeSensor,
} as Meta;

export const ResizeSensorExample = () => (
  <ResizeSensor
    renderContent={(ref, currentSize) => (
      <div className={cxs({ width: '100%', height: '100%' })} ref={ref}>
        Resize the window!
        <br />
        {currentSize && `Currently ${currentSize.contentRect.width}x${currentSize.contentRect.height}`}
      </div>
    )}
    onResize={console.log}
  />
);
