import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { gsap } from "gsap";
const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  ////////////////title
  const title = () => {
    gsap.fromTo(
      ".tit2",
      { opacity: 0, x: -150 },
      { opacity: 1, duration: 1, x: 0 }
    );
  };
  useEffect(() => {
    if (inView) {
      title();
    }
  }, [inView]);
  ///////////////comments
  const card = () => {
    gsap.fromTo(
      ".card1",
      { opacity: 0, y: -50, delay: 0 },
      { opacity: 1, duration: 0.8, y: 0, delay: 0.2 }
    );
    gsap.fromTo(
      ".card2",
      { opacity: 0, y: -50, delay: 0 },
      { opacity: 1, duration: 0.8, y: 0, delay: 0.4 }
    );
    gsap.fromTo(
      ".card3",
      { opacity: 0, y: -50, delay: 0 },
      { opacity: 1, duration: 0.8, y: 0, delay: 0.6 }
    );
    gsap.fromTo(
      ".card4",
      { opacity: 0, y: -50, delay: 0 },
      { opacity: 1, duration: 0.8, y: 0, delay: 0.8 }
    );
  };
  useEffect(() => {
    if (inView) {
      card();
    }
  }, [inView]);
  return (
    <div className="relative">
      <div className="min-w-screen py-10 flex items-center justify-center ">
        <div
          className="absolute inset-0 blur-[135px] max-w-lg h-[700px] mx-auto sm:max-w-5xl sm:h-[700px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="w-full px-5 text-white">
          <div className="w-full max-w-6xl mx-auto flex">
            <div className="md:flex items-start justify-end">
              <div
                ref={ref}
                className="tit2 text-start md:w-1/3 mx-auto flex flex-col justify-center md:h-full mr-10"
              >
                <div className="z-50 absolute">
                  <h1 className=" text-3xl md:text-7xl font-bold mb-2 text-white">
                    What our clients say
                  </h1>

                  <div className="mb-10 text-start ">
                    <span className="inline-block w-60 h-1 bg-lightviolet rounded-full"></span>
                    <span className="inline-block w-10 h-1 ml-1 bg-lightviolet rounded-full"></span>
                    <span className="inline-block w-4 h-1 ml-1 bg-lightviolet rounded-full"></span>
                  </div>
                </div>
                <div className="hidden lg:flex w-full relative overflow-hidden">
                  <Image
                    width={1500}
                    height={1500}
                    src="/client.png"
                    alt=""
                    className=" w-full h-full flex-shrink-0  z-10 opacity-30 "
                  />
                </div>
              </div>

              <div className="px-3 md:w-1/3 md:pt-10 pt-10">
                <div className="card1 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Devency exceeded our expectations! Their attention to
                      detail, innovative solutions, and collaborative approach
                      made our project a true success. We&apos;re thrilled with
                      the results!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card2 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Working with Devency was a game-changer for our business.
                      Their expertise, professionalism, and commitment to our
                      vision were unparalleled. A top-notch team delivering
                      top-notch results!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" px-3 hidden md:block md:w-1/3 md:pt-10">
                <div className="card3 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Devency&apos;s quality of work and dedication to client
                      satisfaction set them apart. The team&apos;s
                      responsiveness and ability to adapt to our evolving needs
                      made the entire process seamless and enjoyable
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card4 w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Devency doesn&apos;t just develop, they create
                      experiences. The level of creativity and precision in
                      their work is unmatched. We&apos;re incredibly satisfied
                      with the impact they&apos;ve had on our brand.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Choosing Devency was the best decision for our project.
                      Their proactive communication, on-time delivery, and
                      consistent quality demonstrated a level of professionalism
                      that we greatly appreciated.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        src="/batman.png"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        &quot;
                      </span>
                      Devency&apos;s client-centric approach made the collaboration a
                      breeze. They not only delivered a product that aligned
                      with our vision but also provided valuable insights and
                      suggestions. Highly recommend!!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
