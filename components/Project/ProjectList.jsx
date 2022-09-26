import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Projects = () => {
  const router = useRouter();

  return (
    <div className="Projects--container">
      <Link href="/projects/youtube-clone">
        <h1>
          COMING <span>SOON</span>
        </h1>
      </Link>
    </div>
  );
};

export default Projects;
