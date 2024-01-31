"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
const Projects = () => {
  return (
    <div>
      <div className="relative py-6 md:py-10">
        <div
          className="absolute mt-[150px] inset-0 blur-[135px] max-w-lg h-[700px] mx-auto sm:max-w-5xl sm:h-[700px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="px-4 max-w-xl mb-5 md:mb-1 md:mx-auto sm:text-center lg:max-w-2xl ">
          <h2 className="max-w-lg mb-2 text-4xl font-semibold tracking-wide text-white sm:text-6xl md:mx-auto">
            Nos Projets
          </h2>
          <div className="mb-3 text-start md:text-center">
            <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
            <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
            <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
          </div>
          <p className="text-base text-gray-400 md:text-lg">
            Explorez l&apos;essence de notre expertise à travers nos projets.
            Découvrez l&apos;innovation, la créativité et l&apos;excellence qui
            définissent Devency.
          </p>
        </div>
        <div className="h-80 md:h-[500px] flex justify-center px-3">
          <Carousel pauseOnHover>
            <div className="flex justify-center items-center ">
              <Link href="https://devency.vercel.app">
                <Image
                  alt="a"
                  src="/website1.jpg"
                  height={1000}
                  width={1000}
                  className="rounded-3xl w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
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
                  className="rounded-3xl w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
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
                  className="rounded-3xl w-[500px] transition transform hover:-translate-y-3 motion-reduce:hover:transform-none"
                />
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
