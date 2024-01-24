import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Element } from "react-scroll";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
////////////// the devency prepective
  const title = () => {
    gsap.fromTo(
      ".about",
      { opacity: 0, x: 200 },
      { opacity: 1, duration: 1, x: 0, rotationX: 360}
    );
  };
  useEffect(() => {
    if (inView) {
      title();
    }
  }, [inView]);
  /////////////////////// span violet
  const violet = () => {
    gsap.fromTo(
      ".vio1",
      { opacity: 0, x: 300 },
      { opacity: 1, duration: 1, x: 0 , }
    );
    gsap.fromTo(
      ".vio2",
      { opacity: 0, x: 300 },
      { opacity: 1, duration: 1.3, x: 0 }
    );
    gsap.fromTo(
      ".vio3",
      { opacity: 0, x: 300 },
      { opacity: 1, duration: 1.6, x: 0 }
    );
  };
  useEffect(() => {
    if (inView) {
      violet();
    }
  }, [inView]);
  /////////////////////////// discreption
  const parag = () => {
    gsap.fromTo(
      ".par2",
      { opacity: 0, x: 500 },
      { opacity: 1, duration: 1.3, x: 0 }
    );
  };
  useEffect(() => {
    if (inView) {
      parag();
    }
  }, [inView]);

  return (
    <div className="relative overflow-hidden my-20 px-4 md:px-0" id="about">
      <div className="max-w-6xl mx-auto ">
        <div className=" rounded-t-3xl md:rounded-bl-3xl md:rounded-tr-none relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-0 lg:flex lg:items-center lg:h-[75vh]">
          <svg
            className="hidden fill-white lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-6xl px-4 sm: sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left ">
              <h1
                ref={ref}
                className="about tracking-wider pt-6 md:pt-0 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl "
              >
                La Perspective Devency
              </h1>

              <div className="violet mt-2">
                <span className="vio1 inline-block w-36 md:w-64 h-1 bg-[#9F73AB] rounded-full"></span>
                <span className="vio2 inline-block w-14 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
                <span className="vio3 inline-block w-5 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
              </div>
              <p
                ref={ref}
                className="par2 mt-3 md:leading-9 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0"
              >
                {/* At Devency, our journey began with a shared passion for
                innovation and a commitment to redefining the digital landscape.
                Founded in 2022, we set out to create a development agency that
                seamlessly blends creativity with precision, where ideas
                flourish into transformative digital solutions. */}
                Chez Devency, notre parcours a commencé avec une passion commune
                pour l'innovation et un engagement à redéfinir le paysage
                numérique. Fondée en 2022, notre entreprise s'est fixé pour
                objectif de créer une agence de développement qui associe
                harmonieusement créativité et précision, où les idées
                s'épanouissent pour devenir des solutions numériques
                transformantes.
              </p>
              
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:pr-28 ">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative ">
          <Image
            fill={true}
            className="object-cover rounded-b-3xl md:rounded-tr-3xl"
            src="/devs.jpg"
            alt="devs"
          />
        </div>
      </div>
    </div>
  );
}
