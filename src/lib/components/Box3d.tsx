import { ReactNode, useRef, useState } from 'react';
import { Box, chakra } from '@chakra-ui/react';

const Box3d = ({ children, ...props }: { children?: ReactNode }) => {
  const Box3dRef = useRef<HTMLDivElement | null>(null);
  const initTransformRotate = `unset`;

  const [transformRotate, setTransformRotate] = useState(initTransformRotate);

  const transformElement = (x: number, y: number) => {
    if (Box3dRef.current) {
      const box = Box3dRef.current.getBoundingClientRect();
      const { top, left, right, bottom, width, height } = box;

      const midpointTop = bottom - (bottom - top) / 2;
      const midpointLeft = right - (right - left) / 2;

      const calcX = x - midpointLeft;
      const calcY = y - midpointTop;

      const rotate3dY = calcY / (height / 2);
      const rotate3dX = -(calcX / (width / 2));

      const transformStyle = `scale3d(1.01,1.01,1.01) rotate3d(${rotate3dY},${rotate3dX},0,10deg)`;

      return transformStyle;
    } else {
      return initTransformRotate;
    }
  };

  return (
    <Box
      {...props}
      ref={Box3dRef}
      onMouseMove={(e) => {
        const transformStyle = transformElement(e.clientX, e.clientY);
        setTransformRotate(transformStyle);
      }}
      onMouseLeave={() => {
        setTransformRotate(initTransformRotate);
      }}
    >
      <Box transition={'transform .3s ease-out'} transform={transformRotate} w="full">
        {children}
      </Box>
    </Box>
  );
};

export default chakra(Box3d);
