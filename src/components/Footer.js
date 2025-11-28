import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

function Footer() {
  const shouldReduce = useReducedMotion();
  
  const footerContent = (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-300">
            ©2025 ТОВ "Запоріжжяелектропостачання"
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex space-x-2">
              <img 
                src="https://zpep.com.ua/images/app-store.png" 
                alt="Download on App Store"
                className="h-10"
              />
              <img 
                src="https://zpep.com.ua/images/google-play.png" 
                alt="Get it on Google Play"
                className="h-10"
              />
            </div>
            
            <div className="flex space-x-2">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-white font-bold">@</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
  if (shouldReduce) {
    return footerContent;
  }
  
  return (
    <motion.div {...fadeUpPreset(0.1, 0.8)}>
      {footerContent}
    </motion.div>
  );
}

export default Footer;