import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import Head from "next/head";
import Education from "../components/Education";

export default function () {
  const onEnter = (node) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };
  const onExit = (node) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2,
        },
      }
    );
  };

  return (
    <>
      <Head>
      <title>Nghia Nguyen</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        {/* ionicIcons */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <div className="container">
        <CSSTransition
          in={true}
          timeout={1200}
          classNames="page"
          onExit={onExit}
          onEntering={onEnter}
          unmountOnExit
        >
          <div className="content">
            <Education />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
