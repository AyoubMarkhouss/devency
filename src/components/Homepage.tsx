import Illustration from "./Illustration";
import {
  Link,
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const isLaptop = () => {
    return window.innerWidth > 1024; // Set your threshold for laptop devices
  };
  ////////////////////paragraphe
  const title = () => {
    gsap.fromTo(
      ".par",
      { opacity: 0, x: -40 },
      { opacity: 1, duration: 1, x: 0 }
    );
  };
  useEffect(() => {
    if (inView ) {
      title();
    }
  }, [inView]);
  ///////////////title
  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
      tl.fromTo(
        ".tit",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );
    }
  }, [inView]);
  //////////////////illustration
  useEffect(() => {
    if (inView && isLaptop()) {
      const tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
      tl.fromTo(
        ".ill",
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );
    }
  }, [inView]);

  return (
    <main
      className="flex flex-col justify-center items-center h-[calc(100vh_-_90px)]"
      id="Home"
    >
      {" "}
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="pt-36 -mt-20 md:-mt-28 ">
        <h1
          ref={ref}
          className="tit md:max-w-7xl text-5xl px-3 md:text-[82px] justify-center flex text-center "
        >
          La meilleure façon de prédire
        </h1>
        <h1
          ref={ref}
          className="tit  md:max-w-7xl text-5xl px-3 md:text-[82px] justify-center flex text-center "
        >
          l&apos;avenir est de le créer !
        </h1>
      </div>
      <div className="relative md:-mt-10 flex flex-col md:flex-row items-center mx-6">
        <div className="flex flex-col gap-4 pt-3 md:gap-9 md:pt-7 ">
          <p className="par px-3 md:leading-10 md:max-w-2xl text-lg md:text-2xl text-justify text-[#B6BBC4] ">
            {/* Crafting Digital Excellence. Where innovation meets precision, we
            turn ideas into seamless digital experiences. Welcome to a world of
            code, creativity, and unmatched expertise. */}
            Création d&apos;Excellence Numérique. Là où l&apos;innovation
            rencontre la précision, nous transformons les idées en expériences
            numériques fluides. Bienvenue dans un monde de code, de créativité
            et d&apos;expertise inégalée.
          </p>
          {/* <Button
            as={Link}
            className=" bg-[#9F73AB] text-xl w-48 ml-3 hidden md:flex"
            href="#"
            variant="flat"
          >
            About-Us
            <Aboutus />
          </Button> */}
          {/* <Link
            href="/contactpage"
            className="w-full md:w-56 hidden md:ml-3 md:flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightviolet md:py-4 md:text-lg md:px-10"
          >
            Get started
          </Link> */}
          <Link
            to="services"
            className="par cursor-pointer  w-full md:w-56 hidden md:ml-3 md:flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightviolet md:py-4 md:text-lg md:px-10"
            spy={true}
            smooth={true}
            duration={1500}
            offset={-90}
          >
            Commencer
          </Link>
        </div>

        <Illustration className="ill md:h-96 md:w-96 h-64 w-64 relative pt-5" />
      </div>
    </main>
  );
};

export default Home;
