import { Faq } from "@/components/Faq";
import Head from "next/head";
import React from "react";

const faqpage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Découvrez les réponses aux questions fréquemment posées sur les services informatiques de Devency, nos processus de développement, et bien plus encore sur notre page FAQ. Obtenez des éclaircissements sur notre expertise, notre approche collaborative et notre engagement envers l&apos;excellence. Devency est là pour démystifier et fournir les informations dont vous avez besoin. Découvrez des insights et prenez des décisions éclairées grâce à notre section FAQ complète."
        />
        <link rel="icon" href="/devency.ico" />
        <title>FAQ</title>
      </Head>
      <Faq />;
    </>
  );
};

export default faqpage;
