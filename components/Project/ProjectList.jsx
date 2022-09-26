import React from "react";
import { useRouter } from "next/router";
import Carousel from "../Carousel";

import projects from "../../data-json/projects.json";

const Projects = () => {
  const router = useRouter();

  return (
    <div className="Projects--container">
      <Carousel projects={projects} />
    </div>
  );
};

export default Projects;
