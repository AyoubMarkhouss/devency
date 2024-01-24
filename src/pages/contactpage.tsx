import Contactus from "@/components/Contactus";
import Head from "next/head";
import React from "react";

const contactpage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contactez Devency - votre passerelle vers une collaboration sans faille. Que vous ayez des questions sur nos services informatiques ou que vous soyez prêt à lancer un projet, notre page de contact est votre lien direct vers notre équipe d&apos;experts. Contactez-nous aujourd&apos;hui et embarquons ensemble pour transformer votre vision numérique en réalité."
        />
        <link rel="icon" href="/devency.ico" />
        <title>Contactez-nous</title>
      </Head>
      <div className="md:mb-36 md:pt-5 flex items-center">
        <Contactus />
      </div>
    </>
  );
};

export default contactpage;
