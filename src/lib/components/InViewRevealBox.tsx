import { ReactNode, useRef } from 'react';
import { chakra } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

const InViewRevealBox = ({
  children,
  isLoop = false,
  ...props
}: {
  children?: ReactNode;
  isLoop?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !isLoop });

  return (
    <motion.div
      {...props}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </motion.div>
  );
};

export default chakra(InViewRevealBox);
