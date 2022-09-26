import Head from "next/head";
import Project from "../../components/Project/Project";

export default function () {
  return (
    <>
      <Head>
        <title>Nghia Nguyen</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="Project--container">
        <Project />
      </div>
    </>
  );
}
