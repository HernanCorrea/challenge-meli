import { useEffect, useRef, useState } from 'react';
import './ImageMagnifier.scss';
type eventCallBack = (item: {
  src: string;
  backgroundSize: string;
  backgroundPositionX: string;
  backgroundPositionY: string;
  top: string;
  left: string;
}) => void;

export default function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 2.5,
  eventCallBack,
  show,
}: {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
  eventCallBack: eventCallBack;
  show: (status: boolean) => void;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

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
        // close magnifier
        setShowStatus(false);
      }}
    >
      <img
        src={src}
        style={{ height: height, width: width, cursor: 'zoom-in' }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
          eventCallBack({
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
            src: src,
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`
          });
        }}
     
        alt={'img'}
      />
      <div className="lens"
        style={{
            display: `${showMagnifier ? 'block' : 'none'}`,
            position: 'absolute',
            top: `${y - (400 / 2.5) / 2}px`,
            left: `${x - (465 / 2.5) / 2}px`,
            height: `${(400 / 2.5)}px`,
            width: `${(465 / 2.5)}px`,
            pointerEvents: "none",
        }}
      ></div>

      
    </div>
  );
}
