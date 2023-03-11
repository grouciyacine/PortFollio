import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { collection, onSnapshot } from 'firebase/firestore'
import {db} from '../firebase'
type Props = {}

const Prjects = (props: Props) => {
  const projects=[1,2,3,4,5]
  const [data,setData]=useState<any | null>(null)
  const colRef=collection(db,'port','ZU62dEeqH6g7EDBy3u8F','3')
  useEffect(()=>{
onSnapshot(colRef,(da)=>{
setData(
    da.docs.map((it) => {
      return {...it.data(),id:it.id}
    })
  )
})
  },[])
    return (
    <div className='w-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl '>
                Projects</h3>
        <div className='w-full relative flex overflow-x-scroll scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]/80 overflow-y-hidden snap-x snap-mandatory z-20 mt-11'>
            {data?.map((p:any,i:number)=>(
                <div className='w-fit h-fit flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 '>
                    <motion.img 
                    initial={{opacity:1,y:-300}}
                    transition={{ duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    src={p.img} 
                    className='w-204 h-204'
                    />
                <div className='space-y-10 px-0   max-w-6xl'>
                
                <h4 className='text-lg font-semibold text-center '>
                    <span className='underline decoration-[#f7ab0a]/50'>
                        project {i+1} of {data.length}:
                    </span>
                        {p.name} 

                        </h4>
                        
                        <div className='flex flex-row'>
                            <img className='w-10 h-10 rounded-full' src={p?.img1}/>
                            <img className='w-10 h-10 rounded-full' src={p.img2}/>
                            <img className='w-10 h-10 rounded-full' src={p.img3}/>
                            <img className='w-10 h-10 rounded-full' src={p.img4}/>
                            <img className='w-10 h-10 rounded-full' src={p.img5}/>
                            </div>
                        <p >
                            {p.description}
                        </p>
                </div>
                </div>

            ))}
        </div>
    <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Prjects
//2h:03