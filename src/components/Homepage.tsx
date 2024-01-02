import React from "react";
import { Avatar } from "@nextui-org/react";
import Illustration from "./Illustration";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh_-_90px)]">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <div className="pt-36">
        <h1 className=" md:max-w-5xl text-6xl md:text-8xl justify-center flex text-center ">
          The best way to predict the future is to create it!
        </h1>
        <br />
        {/* <p className="px-3 md:max-w-5xl text-lg md:text-3xl text-justify text-[#B6BBC4] ">
          Crafting Digital Excellence. Where innovation meets precision, we turn
          ideas into seamless digital experiences. Welcome to a world of code,
          creativity, and unmatched expertise.
        </p> */}
      </div>

      <div className="relative md:-mt-10 flex flex-col md:flex-row items-center mx-6">
        <div className="flex ">
          <p className="px-3 md:max-w-2xl text-lg md:text-3xl text-justify text-[#B6BBC4] ">
            Crafting Digital Excellence. Where innovation meets precision, we
            turn ideas into seamless digital experiences. Welcome to a world of
            code, creativity, and unmatched expertise.
          </p>
        </div>

        <Illustration className="md:h-96 md:w-96 h-64 w-64 relative " />
      </div>
    </main>
  );
};

export default Home;
