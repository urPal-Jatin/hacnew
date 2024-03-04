import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './teamprofile.css';
import ReactCardFlip from 'react-card-flip';
import Screenshot from '../assets/image.jpg';

const transition = { duration: 0.6, ease: "easeInOut" };

const cardmotion = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay:0.5, // Adjust the delay as needed
    /*   type: 'spring', // Use spring animation for smoother y-axis motion
      damping: 10, // Adjust damping for the spring animation
      stiffness: 300, // Adjust stiffness for the spring animation */
    },
  }),
};


function Hui() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);


  const handleFlipClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlipClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlipClick3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleFlipClick4 = () => {
    setIsFlipped4(!isFlipped4);
  };
  const handleFlipClick5 = () => {
    setIsFlipped5(!isFlipped5);
  };

  return (
    <>
    <div className="card-container"> 
   
      <motion.div  variants={cardmotion}
        initial="hidden"
        animate="visible"
        className="card-container"
        transition={{ staggerChildren: 20 }}
        >
         
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
          <motion.div onClick={handleFlipClick1} className="upc">
            <div className="gradiant"></div>
            <div className="profile-down">
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} src={Screenshot} alt="" />
              <div className="text-inside">
                <h5>teammate</h5>
                <h5>teammate</h5>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={transition} className="button">
                  Click to flip
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div onClick={handleFlipClick1} className="back-text"></div>
        </ReactCardFlip>

        {/* Repeat the same structure for other cards */}
        {/* You can use the same motion.div for all cards */}
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
          <motion.div onClick={handleFlipClick2} className="upc">
            <div className="gradiant"></div>
            <div className="profile-down">
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} src={Screenshot} alt="" />
              <div className="text-inside">
                <h5>teammate</h5>
                <h5>teammate</h5>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={transition} className="button">
                  Click to flip
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div onClick={handleFlipClick2} className="back-text"></div>
        </ReactCardFlip>

        {/* Repeat the same structure for other cards */}
        {/* You can use the same motion.div for all cards */}
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
          <motion.div onClick={handleFlipClick3} className="upc">
            <div className="gradiant"></div>
            <div className="profile-down">
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} src={Screenshot} alt="" />
              <div className="text-inside">
                <h5>teammate</h5>
                <h5>teammate</h5>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={transition} className="button">
                  Click to flip
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div onClick={handleFlipClick3} className="back-text"></div>
        </ReactCardFlip>

        {/* Repeat the same structure for other cards */}
        {/* You can use the same motion.div for all cards */}
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
          <motion.div onClick={handleFlipClick4} className="upc">
            <div className="gradiant"></div>
            <div className="profile-down">
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} src={Screenshot} alt="" />
              <div className="text-inside">
                <h5>teammate</h5>
                <h5>teammate</h5>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={transition} className="button">
                  Click to flip
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div onClick={handleFlipClick4} className="back-text"></div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
          <motion.div onClick={handleFlipClick5} className="upc">
            <div className="gradiant"></div>
            <div className="profile-down">
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} src={Screenshot} alt="" />
              <div className="text-inside">
                <h5>teammate</h5>
                <h5>teammate</h5>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={transition} className="button">
                  Click to flip
                </motion.button>
              </div>
            </div>
          </motion.div>
          <div onClick={handleFlipClick5} className="back-text"></div>
        </ReactCardFlip>
        </motion.div>
        
      
    </div> 
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    <div>
      <h1>hello</h1>
    </div>
    </>




  );
}

export default Hui;
