import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative  overflow-hidden my-24 px-4 md:px-0">
      <div className="max-w-6xl mx-auto ">
        <div className="rounded-t-3xl md:rounded-bl-3xl md:rounded-tr-none relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-0 lg:flex lg:items-center lg:h-[75vh]">
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
              <h1 className="tracking-wider pt-6 md:pt-0 text-2xl font-semibold text-gray-800 capitalize lg:text-5xl ">
                The Devency Perspective
              </h1>

              <div className="mt-2">
                <span className="inline-block w-36 md:w-64 h-1 bg-[#9F73AB] rounded-full"></span>
                <span className="inline-block w-14 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
                <span className="inline-block w-5 h-1 ml-1 bg-[#9F73AB] rounded-full"></span>
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                At Devency, our journey began with a shared passion for
                innovation and a commitment to redefining the digital landscape.
                Founded in 2022, we set out to create a development agency that
                seamlessly blends creativity with precision, where ideas
                flourish into transformative digital solutions.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/contactpage"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightviolet md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
              </div>
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
