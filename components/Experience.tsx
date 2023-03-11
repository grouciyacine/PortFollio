import React, { useEffect, useState } from 'react'
import  {motion} from 'framer-motion'
import ExperinceCard from './ExperinceCard'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
type Props = {}

const Experience = (props: Props) => {
  const [data,setData]=useState<any | null>(null)
  const colRef=collection(db,'port','GB1HMLDckeVveLjMTJjV','2')
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
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className=' flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center '>
    Experience</h3>
<div className='flex w-full flex-row  overflow-x-scroll scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]/80  space-x-5 snap-x p-10 snap-mandatory '>
{data?.map((da:any,key:number)=>(
  <ExperinceCard key={key} img={da.img} img1={da.img1} img2={da.img2} img3={da.img3} name={da.name}/>
))}
</div>
    </motion.div>
  )
}

export default Experience