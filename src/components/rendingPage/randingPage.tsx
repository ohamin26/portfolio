import { motion } from 'framer-motion';
import { container, ctaButton, hero } from './randingPage.css';

const LandingPage = () => {
  const onClick = () => {
    document.getElementById('Introduce')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={container}>
      <motion.div className={hero} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          Hello, I'm ohamin
        </motion.h1>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Front-end Web Developer |
        </motion.h2>
        <motion.button onClick={onClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={ctaButton}>
          Explore My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
