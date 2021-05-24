import * as React from 'react';
import { fabric } from 'fabric';

const Rect = () => {
  const canvas = new fabric.Canvas('c');

  // 矩形
  const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 400,
    height: 400,
  });

  canvas.add(rect);

  return (
    <div>
      <canvas id='c' width='400' height='400'></canvas>
    </div>
  );
};

export default Rect;
