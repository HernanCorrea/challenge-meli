import React from 'react';
import { MagnifierEventI } from '../ImageMagnifier/ImageMagnifier.interface';

export default function PreviewMagnifier({
  backgroundSize,
  backgroundPositionX,
  backgroundPositionY,
  src,
  top,
  left,
}: MagnifierEventI) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        height: `400px`,
        width: `465px`,
        top: 0,
        left: 0,
        opacity: '1',
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize,
        backgroundPositionX,
        backgroundPositionY,
      }}
    ></div>
  );
}
