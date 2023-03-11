import Image from 'next/image'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles'
import Img from '../public/i.jpg'
import Link from 'next/link'
type Props = {}

const Hero = (props: Props) => {
  const [text,Count]=useTypewriter({
    words:[
        "Ha, The Name's Grouci Yacine",
        "Guy How Loves Coffee.tsx",
        "<ButtonToCodeWithMe/>"
],
loop:true,
delaySpeed:2000,
  })
    return (
    <div className='flex justify-center items-center space-y-8 flex-col h-screen text-center overflow-hidden translate-y-20  '>
        <BackGroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto ' src={Img} alt='Profile'/>
        <div className='z-20'>
                <h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#f7ab0a'/>
        </h1>
        <div >
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
            
            
            
            
            
        </div>
        </div>


    </div>
  )
}

export default Hero