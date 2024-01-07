import React from "react";
import Image from "next/image";
import Logo from "./Logo";
const Aboutuspage = () => {
  return (
    <section className="mt-12" id="About-us" >
      
      <div className="container  md:px-12 py-10 mx-auto">
        
        <h1 className="tracking-wider text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
          The Devency Perspective
        </h1>

        <div className="mt-2">
          <span className="inline-block w-36 md:w-64 h-1 bg-[#9F73AB] rounded-full"></span>
          <span className="inline-block w-14 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
          <span className="inline-block w-5 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-7 lg:flex lg:items-center w-full">
          <div className="flex flex-col lg:flex-row ">
            <div className="grid max-w-2xl grid-cols-1 gap-4 xl:gap-9 md:grid-cols-2">
              <div className="space-y-3 col-span-2">
                {/* <span className="inline-block p-3  rounded-xl text-white bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#9F73AB"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span> */}

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Our Story
                </h1>

                <p className="text-gray-500 dark:text-gray-300 text-justify">
                  At Devency, our journey began with a shared passion for
                  innovation and a commitment to redefining the digital
                  landscape. Founded in 2023, we set out to create a development
                  agency that seamlessly blends creativity with precision, where
                  ideas flourish into transformative digital solutions.
                </p>
              </div>

              <div className="space-y-3 md:col-span-1 col-span-2">
                <span className="inline-block p-3  text-white bg-white rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#9F73AB"
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
                  Our Mission
                </h1>
                <p className="text-gray-500 dark:text-gray-300 text-justify">
                  Our mission is to empower businesses and individuals through
                  cutting-edge technology solutions. We strive to be at the
                  forefront of innovation, delivering excellence in every
                  project and fostering lasting partnerships.
                </p>
              </div>

              <div className="space-y-3 md:col-span-1 ">
                <span className="inline-block p-3 text-white bg-white rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#9F73AB"
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
                  Our Vision
                </h1>
                <p className="text-gray-500 dark:text-gray-300 text-justify">
                  Devency envisions a future where technology transcends
                  boundaries, and digital experiences become synonymous with
                  brilliance. We aspire to be a catalyst for positive change in
                  the tech industry, driving progress through creativity and
                  expertise.
                </p>
              </div>
            </div>

            <div className=" lg:flex pl-2 md:pl-16">
              {/* <Image width={448} height={448} className="flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" alt='logo' src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
               */}
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutuspage;
