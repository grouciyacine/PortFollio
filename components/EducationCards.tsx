import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    name:string;
    img:string;
    form:any
}

function EducationCards({name,img,form}: Props) {
let time=new Date(form?.seconds*1000) 
    
return (
<article className='flex flex-col  rounded-lg space-y-7 items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 mt-[120px] cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{opacity:0,y:-100}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
        className='w-[100px] h-[100px] rounded-full xl:-[200px]xl:w-[200px]  object-top object-cover ' 
        src={img} alt=''/>
        
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{name}</h4>
            <p className='font-bold text-2xl mt-1'>Education Start From</p>
            <ul className='list-disc space-y-4 text-lg'>
                <li>{time.toDateString()}  -Present</li>
            </ul>
        </div>

    </article>
  )
}

export default EducationCards