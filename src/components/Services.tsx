import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
      <div
        className="absolute inset-0 blur-[135px] max-w-lg h-[700px] mx-auto sm:max-w-5xl sm:h-[700px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-2 text-3xl font-semibold tracking-wide text-white sm:text-6xl md:mx-auto">
          {/* <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              className="fill-lightviolet absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-48 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our</span>
          </span>{" "} */}
          Our Services
        </h2>
        <div className="mb-3 text-start md:text-center">
          <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
          <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
          <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
        </div>
        <p className="text-base text-gray-400 md:text-lg">
          Together with you, we define objective criteria that allow us to
          rationally judge the effectiveness of our creations. Here are some of
          our references!
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="shadow-2xl  duration-300 transform bg-white border-l-8 border-darkviolet rounded-tr-3xl rounded-bl-3xl hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h3 className="mb-2 font-semibold leading-7 text-darkviolet text-3xl">
              App & Web Developement
            </h3>
            <div className="flex justify-center items-center">
              <Image alt="" src="/html.gif" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-900 text-justify">
              Transform ideas into digital brilliance with Devency. We
              specialize in creating sleek websites, powerful e-commerce
              platforms, and innovative mobile apps, crafting solutions that
              redefine your online presence.
            </p>
          </div>
        </div>
        <div className="shadow-2xl  duration-300 transform bg-white border-l-8 border-darkviolet rounded-tr-3xl rounded-bl-3xl hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-7 text-3xl text-darkviolet">
              Branding & Identity
            </h6>
            <div className="flex justify-center items-center">
              <Image alt="" src="/monitor.gif" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-900 text-justify">
              Elevate your brand with Devency&apos;s comprehensive services. We
              go beyond logos, crafting a narrative that makes your brand
              unforgettable.
            </p>
          </div>
        </div>
        <div className="shadow-2xl  duration-300 transform bg-white border-l-8 border-darkviolet rounded-tr-3xl rounded-bl-3xl hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-7 text-darkviolet text-3xl">
              Traffic Acquisition
            </h6>
            <div className="flex justify-center items-center">
              <Image alt="" src="/rocket.gif" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-900 text-justify">
              Drive targeted traffic with Devency&apos;s expertise. We optimize
              your online presence through SEO, SEA, and other strategies to
              engage the right audience.
            </p>
          </div>
        </div>
        <div className="shadow-2xl  duration-300 transform bg-white border-l-8 border-darkviolet rounded-tr-3xl rounded-bl-3xl hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-7 text-3xl text-darkviolet">
              Social media promotion
            </h6>
            <div className="flex justify-center items-center">
              <Image alt="" src="/promotion.gif" width={100} height={100} />
            </div>
            <p className="text-sm text-gray-900 text-justify">
              Maximize your online presence with Devency&pos;s social media
              expertise. From content creation to strategic campaigns, we
              connect your brand with the right audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
