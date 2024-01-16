import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Text.css';


const Text = ({ text, image, alt, buttonContent, answer, icon, onButtonClick }) => {
  const [show, setShow] = useState(true);

  const handleButtonClick = () => {
    setShow(!show);
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section id="story">
      <div className="story-container">
        <h1 className="story-container__title">{text}</h1>
        <button onClick={handleButtonClick} className="story-container__btn">
          {buttonContent}
        </button>
        <AnimatePresence>
          {!show && (
            <motion.div
              className="story-container__elements"
              exit={{
                opacity: 0,
                filter: 'blur(5px)',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                transition: { ease: 'easeIn', duration: 0.7 },
              }}
            >
              <motion.img src={image} alt={alt} className="story-container__image" />
              <motion.p
                className="story-container__text"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5 },
                }}
              >
                {[answer, icon]}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Text;
