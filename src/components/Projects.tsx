"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const isLaptop = () => {
    return window.innerWidth > 1024; // Set your threshold for laptop devices
  };
  ///////////////svg
  const svg = () => {
    gsap.fromTo(
      ".svg",
      { opacity: 0, x: -150 },
      { opacity: 1, duration: 1, x: 0 }
    );
  };
  useEffect(() => {
    if (inView && isLaptop()) {
      svg();
    }
  }, [inView]);
  ///////////////carousel
  const car = () => {
    gsap.fromTo(
      ".car",
      { opacity: 0, x: 150 },
      { opacity: 1, duration: 1, x: 0 }
    );
  };
  useEffect(() => {
    if (inView && isLaptop()) {
      car();
    }
  }, [inView]);
  return (
    <div id="projets">
      <div className="relative py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 ">
        <div
          className="absolute mt-[150px] inset-0 blur-[135px] max-w-lg h-[700px] mx-auto sm:max-w-5xl sm:h-[700px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="z-50 md:absolute px-4 sm:hidden">
          <h1 className=" text-3xl md:text-6xl font-bold mb-2 text-white">
            Nos Projets
          </h1>

          <div className="mb-3 text-start ">
            <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
            <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
          </div>
          <p className="text-base text-gray-400 md:text-lg max-w-lg">
            Explorez l&apos;essence de notre expertise à travers nos projets.
            Découvrez l&apos;innovation, la créativité et l&apos;excellence qui
            définissent Devency.
          </p>
        </div>
        <div className="col-span-1 h-80 md:h-[500px] flex justify-center px-3 overflow-hidden flex-shrink-0">
          <Carousel ref={ref} className="car" pauseOnHover>
            <div className="flex justify-center items-center ">
              <Link href="https://devency.vercel.app">
                <Image
                  alt="a"
                  src="/website1.jpg"
                  height={1000}
                  width={1000}
                  className="rounded-lg w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center ">
              <Link href="https://devency.vercel.app">
                <Image
                  alt="a"
                  src="/website1.jpg"
                  height={1000}
                  width={1000}
                  className="rounded-lg w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center ">
              <Link href="https://devency.vercel.app">
                <Image
                  alt="a"
                  src="/website1.jpg"
                  height={1000}
                  width={1000}
                  className="rounded-lg w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
                />
              </Link>
            </div>
          </Carousel>
        </div>
        <div
          ref={ref}
          className="svg col-span-1 w-[500px] text-start md:mx-auto hidden sm:flex flex-col justify-center md:h-full "
        >
          <div className="z-50 md:absolute px-4 -ml-10">
            <h1 className=" text-3xl md:text-6xl font-bold mb-2 text-white">
              Nos Projets
            </h1>

            <div className="mb-3 text-start ">
              <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
              <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
              <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
            </div>
            <p className="text-base text-gray-400 md:text-lg max-w-lg">
              Explorez l&apos;essence de notre expertise à travers nos projets.
              Découvrez l&apos;innovation, la créativité et l&apos;excellence
              qui définissent Devency.
            </p>
          </div>
          <div className="hidden lg:flex w-full relative overflow-hidden justify-end">
            <Image
              width={1500}
              height={1500}
              src="/work.png"
              alt=""
              className=" w-96 h-full flex-shrink-0  z-10 opacity-30 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
