import { useRef, useState } from 'react';
import { MagnifierEventI } from './ImageMagnifier.interface';
import './ImageMagnifier.scss';
type EventCallBack = (item: MagnifierEventI) => void;

interface Props {
  eventCallBack: EventCallBack;
  show: (status: boolean) => void;
  src: string;
  width?: string;
  height?: string;
  lensWidth?: number;
  lensHeight?: number;
}

export default function ImageMagnifier({
  src,
  width = 'auto',
  height = 'auto',
  lensWidth = 100,
  lensHeight = 100,
  eventCallBack,
  show,
}: Props) {
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const lensRef = useRef(null);

  function setShowStatus(status: boolean): void {
    setShowMagnifier(status);
    show(status);
  }

  return (
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
      }}
      onMouseEnter={(e) => {
        setShowStatus(true);
      }}
      onMouseLeave={() => {
        setShowStatus(false);
      }}
    >
      <img
        src={src}
        style={{ height: height, width: width, cursor: 'zoom-in' }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left, width, height } = elem.getBoundingClientRect();
          // calculate cursor position on the image
          const xPosition = (e.pageX - left) - window.pageXOffset;
          const yPosition = (e.pageY - top) - window.pageYOffset;

          const lensElem = lensRef.current as any;
          let x = xPosition - (lensElem.offsetWidth / 2);
          let y = yPosition - (lensElem.offsetHeight / 2);
          if (x > elem.width - lensElem.offsetWidth) {x = elem.width - lensElem.offsetWidth;}
          if (x < 0) {x = 0;}
          if (y > elem.height - lensElem.offsetHeight) {y = elem.height - lensElem.offsetHeight;}
          if (y < 0) {y = 0;}

          setXY([x, y]);
          eventCallBack({
            width,
            height,
            x,
            y,
            lensWidth: lensElem.offsetWidth,
            lensHeight: lensElem.offsetHeight,
            src: src,
          });
        }}
        alt={'img'}
      />
      <div
        className="lens"
        ref={lensRef}
        style={{
          display: `${showMagnifier ? 'block' : 'none'}`,
          position: 'absolute',
          top: `${y}px`,
          left: `${x}px`,
          width: `${lensWidth}px`,
          height: `${lensHeight}px`,
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
}
