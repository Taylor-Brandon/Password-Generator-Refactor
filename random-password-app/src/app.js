import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Generator from './components/generator/generator';
import './styles/style.css'


export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  }

    return(
      <div className='body'>
        <h1 className='is-size-2 mt-3 mb-5'>Password Generator</h1>
        <div className='main'>
          {!isVisible && (
          <button className='button is-link' onClick={handleClick}>Generate</button>
          )}
          {isVisible && (
            <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            exit={{
              scale: 0
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}>
        <Generator />
        </motion.div>
          )}
        </div>
      </div>
    );
  }