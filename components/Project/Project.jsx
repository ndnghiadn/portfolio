import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projects from "../../data-json/projects.json";

import Loader from "./Loader";
import Header from "./Header";
import Banner from "./Banner";
import { useRouter } from "next/router";

const Project = ({ selectedProject }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} project={selectedProject} />
          </motion.div>
        ) : (
          <>
            <Header link={selectedProject.live} />
            <Banner project={selectedProject} />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.9],
                    duration: 1.6,
                  }}
                  src={`/images/${selectedProject.slug}/image-2.webp`}
                  fallback={`/images/${selectedProject.slug}/image-2.jpg`}
                  layoutId={selectedProject.slug}
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Project;
