/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export const CartNotification = ({ isVisible, message }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="position-fixed bottom-0 end-0 m-3 bg-success text-white p-3 rounded shadow-lg d-flex align-items-center"
        >
          <Check size={20} className="me-2" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};