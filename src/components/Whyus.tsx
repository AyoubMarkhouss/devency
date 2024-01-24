
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { gsap } from "gsap";
const Whyus = () => {
     const [ref, inView] = useInView({
       triggerOnce: true,
     });
     ////////////////title
      const title = () => {
        gsap.fromTo(
          ".tit",
          { opacity: 0, y: -100 },
          { opacity: 1, duration: 1, y: 0 }
        );
      };
      useEffect(() => {
        if (inView) {
          title();
        }
      }, [inView]);
     //////////////////////cards
       const card = () => {
         gsap.fromTo(
           ".card1",
           { opacity: 0, y: 50 , delay:0},
           { opacity: 1, duration: 0.5, y: 0,delay:0.3 }
         ); gsap.fromTo(
           ".card2",
           { opacity: 0, y: 50, delay: 0 },
           { opacity: 1, duration: 0.5, y: 0, delay: 0.6 }
         ); gsap.fromTo(
           ".card3",
           { opacity: 0, y: 50, delay: 0 },
           { opacity: 1, duration: 0.5, y: 0, delay: 0.9 }
         ); gsap.fromTo(
           ".card4",
           { opacity: 0, y: 50, delay: 0 },
           { opacity: 1, duration: 0.5, y: 0, delay: 1}
         );
       };
       useEffect(() => {
         if (inView) {
           card();
         }
       }, [inView]);
       ///////////////image
         const image = () => {
           gsap.fromTo(
             ".im",
             { opacity: 0, x:200},
             { opacity: 1, duration: 1.2,  x:0}
           );
         };
         useEffect(() => {
           if (inView) {
             image();
           }
         }, [inView]);

  return (
    <section className="">
      <div className="relative container px-6 py-10 mx-auto flex justify-start md:justify-center md:items-center flex-col">
        <div
          className="absolute inset-0 blur-[125px] max-w-lg h-[700px] mx-auto sm:max-w-5xl sm:h-[700px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <h1 className="tit text-4xl font-semibold text-start md:text-center text-white capitalize lg:text-6xl ">
          Pourquoi nous choisir ?
        </h1>

        <div className="mt-2 md:text-center">
          <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
          <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
          <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
        </div>

        <div
          ref={ref}
          className="mt-8 lg:pl-8 max-w-7xl xl:mt-12 lg:flex  lg:items-center"
        >
          <div className="relative grid  w-full grid-cols-1 gap-8 lg:max-w-2xl xl:gap-7 md:grid-cols-2">
            <div
              ref={ref}
              className="card1 relative shadow-2xl backdrop-blur-xl from-darkviolet bg-gradient-to-bl to-lightviolet p-4 rounded-2xl space-y-3 transition hover:-translate-y-3  duration-300 ease-in-out "
            >
              <span className="inline-block p-3 text-lightviolet bg-blue-100 rounded-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Catalyseur d'Innovation
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Devency se positionne en leader des tendances technologiques,
                proposant des solutions innovantes qui élèvent vos projets
                au-delà de l'ordinaire.
              </p>
            </div>

            <div
              ref={ref}
              className="card2 space-y-3 shadow-2xl backdrop-blur-xl from-darkviolet bg-gradient-to-bl to-lightviolet p-4 rounded-2xl transition hover:-translate-y-3  duration-300 ease-in-out "
            >
              <span className="inline-block p-3 text-lightviolet bg-blue-100 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Expertise Libérée
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Débloquez la maîtrise numérique avec Devency. Nos professionnels
                chevronnés apportent une expertise industrielle inégalée pour
                élaborer des solutions innovantes adaptées à vos besoins
                uniques.
              </p>
            </div>

            <div
              ref={ref}
              className="card3 space-y-3 shadow-2xl backdrop-blur-xl from-darkviolet bg-gradient-to-bl to-lightviolet p-4 rounded-2xl transition hover:-translate-y-3  duration-300 ease-in-out "
            >
              <span className="inline-block p-3 text-lightviolet bg-blue-100 rounded-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Brillance Collaborative
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Choisissez Devency pour une synergie de vision. Notre approche
                collaborative garantit que vos objectifs deviennent les nôtres,
                favorisant une communication transparente et dépassant les
                attentes.
              </p>
            </div>

            <div
              ref={ref}
              className="card4 space-y-3  backdrop-blur-xl from-darkviolet bg-gradient-to-bl to-lightviolet shadow-2xl p-4 rounded-2xl transition hover:-translate-y-3  duration-300 ease-in-out "
            >
              <span className="inline-block p-3 text-lightviolet bg-blue-100 rounded-xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Excellence en Assurance Qualité
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Devency s'engage envers la précision du code, garantissant des
                produits numériques robustes et fiables qui dépassent les
                attentes.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-full overflow-hidden" ref={ref}>
            <Image
              width={1500}
              height={1500}
              src="/people.png"
              alt=""
              className="im w-full h-[33rem] flex-shrink-0 object-cover z-40 lg:pl-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
