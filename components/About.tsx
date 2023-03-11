import React from 'react'
import {motion} from 'framer-motion'
import Img from '../public/i.png'
type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex relative flex-col text-center md:text-left md:flex-row max-w-4xl justify-evenly mx-auto items-center  h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        className='mt-[270px] md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] ' 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        viewport={{once:true}}
        src='https://cjoint.com/doc/23_02/MBsl61IHwJC_IMG-20220420-092828-309.jpg'
        />
        <div className='space-x-5 md:mt-[220px]'>
            <h4 className='space-y-10 p-2  font-semibold text-4xl px-0 md:px-10'>Here is a <span className='underline decoration-[#f7ab0a]'>little</span> Background</h4>
            <p className='text-sm'> From the momentI produced "Hello World 👋" in the console of my first application, I knew I was hooked into the world of software development.
But software 🖥️ development has never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in
creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the
years go by. Below you'll find projects I've completed that showcase my skills and general background in developing software.
Experience From the momentI produced "Hello World" in the console of my first application, I knew I was hooked into the world of software
development. But software  development has never been "just a job" for me, it's offered an engaging challenge to continually learn and
improve my skills in creating high-quality software. What started with a simple "Hello World" has become a full-fledged passion that only gets
more exciting as the years go by. Below you'll find projects I've completed thats how case my skills and general background in developing
software</p>
        </div>
        </div>
  )
}
//1h:24
export default About