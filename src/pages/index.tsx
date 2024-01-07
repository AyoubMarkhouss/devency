
import { Inter } from 'next/font/google'

import Homepage from '@/components/Homepage'

import Aboutuspage from '@/components/Aboutuspage'
import Contactus from '@/components/Contactus';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-[calc(100vh_-_90px)] bg-[#161A30]">
      <Homepage />
      <Aboutuspage/>
      <Contactus/>
      
    </main>
  );
}
