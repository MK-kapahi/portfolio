import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="spinner-inner"></div>
      </motion.div>
      <motion.p
        className="loading-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;