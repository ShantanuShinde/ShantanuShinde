'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TextIteratorProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export const TextIterator = ({ texts, interval = 3000, className = "" }: TextIteratorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`relative h-6 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.p
          key={texts[currentIndex]} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute"
        >
          {texts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
