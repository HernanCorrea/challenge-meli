import React, { useEffect, useRef } from 'react';
import { MagnifierEventI } from '../ImageMagnifier/ImageMagnifier.interface';

export default function PreviewMagnifier({
  src,
  x,
  y,
  lensWidth,
  lensHeight,
  height,
  width,
}: MagnifierEventI) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const result = ref.current.getBoundingClientRect();
      // /*calculate the ratio between result DIV and lens:*/
      const cx = result.width / lensWidth;
      const cy = result.height / lensHeight;

      // /*set background properties for the result DIV:*/
      ref.current.style.backgroundImage = `url(${src})`;
      ref.current.style.backgroundSize = (width * cx) + "px " + (height * cy) + "px";;
      ref.current.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }
  }, [x, y, height, width, lensHeight, lensWidth, src]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        height: `100%`,
        width: `100%`,
        opacity: '1',
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        // backgroundImage: `url(${src})`,
        // backgroundPosition: `-${xPosition * cx}px -${yPosition * cy}px`,
        // backgroundSize: (width * cx) + "px " + (height * cy) + "px"
      }}
    ></div>
  );
}
