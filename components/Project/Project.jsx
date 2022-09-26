import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projects from "../../data-json/projects.json";

import Loader from "./Loader";
import Header from "./Header";
import Banner from "./Banner";

const Project = ({ slug }) => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug === slug);
    console.log("foundProject", foundProject);
    if (!foundProject) {
      setProject(foundProject);
    } else {
      setProject({});
    }
  }, []);

  return (
    <>
      {project && (
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <Header link={project.live} />
                <Banner project={project} />
                {!loading && (
                  <div className="transition-image final">
                    <motion.img
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 1.6,
                      }}
                      src={`/images/image-2.jpg`}
                      layoutId="main-image-1"
                    />
                  </div>
                )}
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      )}
    </>
  );
};

export default Project;
