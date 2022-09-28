import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading, project }) => {
  return (
    <motion.div className="loader">
      {project && (
        <motion.div
          variants={container}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loader-inner"
        >
          <ImageBlock
            variants={item}
            id="image-1"
            src={`/images/${project.slug}/image-1`}
          />
          <motion.div variants={itemMain} className="transition-image">
            <motion.img
              layoutId={`main-image`}
              src={`/images/${project.slug}/image-2.webp`}
              fallback={`/images/${project.slug}/image-2.jpg`}
            />
          </motion.div>
          <ImageBlock
            variants={item}
            id="image-3"
            src={`/images/${project.slug}/image-3`}
          />
          <ImageBlock
            variants={item}
            id="image-4"
            src={`/images/${project.slug}/image-4`}
          />
          <ImageBlock
            variants={item}
            id="image-5"
            src={`/images/${project.slug}/image-5`}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id, src }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image src={`${src}.webp`} fallback={`${src}.jpg`} alt={id} />
    </motion.div>
  );
};
export default Loader;
