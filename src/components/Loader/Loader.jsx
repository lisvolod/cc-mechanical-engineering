import React from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.scss"

const loaderVariants = {
  animate: {
    x: ["0%", "100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <motion.div className={styles.loaderBar} variants={loaderVariants} animate="animate" />
    </div>
  );
};

export default Loader;