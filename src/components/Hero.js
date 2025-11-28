import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

function Hero() {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://zpep.com.ua/images/header-bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
      </section>
    );
  }
  
  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="h-64 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://zpep.com.ua/images/header-bg.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
    </motion.section>
  );
}

export default Hero;