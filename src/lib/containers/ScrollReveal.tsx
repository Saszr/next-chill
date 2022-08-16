import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollRevealCase = {
  children: React.ReactNode;
  variants?: { visible: Variant; hidden: Variant };
  isLoop?: boolean;
};

// https://blog.logrocket.com/react-scroll-animations-framer-motion/#what-is-framer-motion
// or https://blog.sethcorker.com/react-framer-motion-animate-when-scrolled-into-view/
const ScrollReveal: React.FC<ScrollRevealCase> = ({ children, variants = {}, isLoop = false }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const curRef = useRef(false);

  useEffect(() => {
    if (curRef.current === false || isLoop) {
      if (inView) {
        control.start('visible');
        curRef.current = true;
      } else {
        control.start('hidden');
      }
    }
  }, [control, inView, isLoop]);

  return (
    <motion.div className="box" ref={ref} variants={variants} initial="hidden" animate={control}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
