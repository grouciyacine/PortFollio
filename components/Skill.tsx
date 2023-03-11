import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?:boolean;
    img:string;
    id:any;
    name:string
    per:number
   
    
}

const Skill = ({directionLeft,id,per,img}: Props) => {
  return (
    <div key={id} className=' group relative flex cursor-pointer'>
            <motion.img 
            initial={{x:directionLeft? -200:200,
                opacity:0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            className=' rounded-full border border-gray-500  object-cover w-24 h-24 md:h-24 xl:h-24  filter group-hover:grayscale transition duration-300 ease-in-out'
            src={img}/>

<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-24 xl:h-24 rounded-full z-0 '>
    <div className='flex item-center justify-center h-full'>
        <p className='text-3xl font-bold text-black mt-6 opacity-90'>{per}%</p>
    </div>
</div>

    </div>

  )
}

export default Skill