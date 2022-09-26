import Head from "next/head";
import { useRouter } from "next/router";
import Project from "../../components/Project/Project";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Nghia Nguyen</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Project--container">
        <Project slug={slug} />
      </div>
    </>
  );
}
