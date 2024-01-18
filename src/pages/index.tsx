import { Inter } from "next/font/google";

import Homepage from "@/components/Homepage";

import About from "@/components/About";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import Devider from "@/components/Devider";
import Testimonials from "@/components/Testimonials";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-[calc(100vh_-_90px)] bg-[#161A30]">
      <Homepage />
      <About />
      <Devider />
      <Whyus />
      <Devider />
      <Services />
      <Devider />
      <Testimonials/>
    </main>
  );
}
