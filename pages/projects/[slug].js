import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import projects from "../../data-json/projects.json";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug === slug);
    if (foundProject) {
      setSelectedProject(foundProject);
    } else {
      setSelectedProject(null);
    }
  });

  return (
    <>
      <Head>
        <title>Nghia Nguyen</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="Project--container">
        {selectedProject && <Project selectedProject={selectedProject} />}
      </div>
    </>
  );
}
