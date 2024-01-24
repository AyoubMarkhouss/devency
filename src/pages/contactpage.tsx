import Contactus from "@/components/Contactus";
import  Head  from "next/head";
import React from "react";


const contactpage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="contact page" />
        <link rel="icon" href="/devency.ico" />
        <title>Contact Us</title>
      </Head>
      <div className="md:mb-36 md:pt-5 flex items-center">
        <Contactus />
      </div>
    </>
  );
};

export default contactpage;
