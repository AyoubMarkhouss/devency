import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import Homepage from '@/components/Homepage'
import Test from '@/components/Test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-[calc(100vh_-_90px)] bg-[#161A30]">
      <Homepage />
      <Test />
    </main>
  );
}
