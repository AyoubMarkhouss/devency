import { Inter } from "next/font/google";

import Homepage from "@/components/Homepage";

import About from "@/components/About";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import Devider from "@/components/Devider";
import Testimonials from "@/components/Testimonials";

import Scrolltop from "@/components/Scrolltop";
import Bgicons from "@/components/Bgicons";
import Head from "next/head";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Découvrez des possibilités illimitées avec l'agence de marketing Devency, votre partenaire de confiance pour des solutions informatiques innovantes. De la développement d'applications et de sites web à la stratégie de marque et d'identité, nous fusionnons créativité et précision. Choisissez Devency pour une collaboration brillante, une excellence en assurance qualité, et un engagement à façonner la technologie de demain dès aujourd'hui. Élevez votre expérience numérique avec une équipe dévouée à votre succès."
        />
        <link rel="icon" href="/devency.ico" />
        <title>Devency - Home</title>
        <meta property="og:image" content="/dev3white.png" />
      </Head>
      <main className="min-h-[calc(100vh_-_90px)] bg-[#161A30]">
        <Homepage />
        <Scrolltop />
        <About />
        <Bgicons />
        <Whyus />
        <Bgicons />
        <Services />
        <Bgicons />
        <Projects />
        <Bgicons />
        <Testimonials />
      </main>
    </>
  );
}
