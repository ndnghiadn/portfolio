import { useRouter } from "next/router";
import React from "react";

const Card = ({ project }) => {
  const router = useRouter();

  return (
    <div className="Card--container">
      <div className="imgBx">
        <img
          src={project.logo}
          alt=""
        />
      </div>
      <div className="Card--content">
        <div className="details">
          <h2>
            {project.title} <span>{project.subTitle}</span>
          </h2>
          <div className="actionBtn">
            <button onClick={() => router.push(`/projects/${project.slug}`)}>
              Visit Page
            </button>
            <button onClick={() => router.push(project.live)}>Live Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
