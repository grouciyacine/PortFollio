import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Prjects from '@/components/Prjects'
import Contactme from '@/components/Contactme'
import Link from 'next/link'
import Educations from '@/components/Educations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen w-screen snap-mandatory snap-y overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-amber-500/50'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header/>
      <section id='hero' >
        <Hero/>
      </section>
      <section id='about' >
        <About/>
      </section>
      <section id='experience' >
        <Experience/>
      </section>
      <section id='Skills' >
        <Skills/>
      </section>
      <section id="Education">
          <Educations/>
      </section>
      <section id='Projects' >
        <Prjects/>
      </section>
      <section id='Contact' >
        <Contactme/>
      </section>

      <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'> 
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
            src='https://wallpapercave.com/wp/wp8358478.png'/>
          </div>
      </footer>
      </Link>
    </div>
  )
}
