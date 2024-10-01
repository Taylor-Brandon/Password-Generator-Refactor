import React from 'react';
import { motion } from 'framer-motion';


export default function Password(props) {
    return(
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
                  }}
                  >
            <h4 id='password' className='is-size-6 has-text-white mt-5'>{props.password}</h4>
            </motion.div>
    )
}