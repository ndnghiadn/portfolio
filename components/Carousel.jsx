import React, { useRef, useState } from "react";
// import images from "../public/images";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Card from "./Card";

const Carousel = ({ projects }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="Carousel--container"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
        className="Carousel--inner"
      >
        {projects.map((project, idx) => (
          <motion.div className="item" key={idx}>
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
