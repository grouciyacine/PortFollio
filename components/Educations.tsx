import React, { useEffect, useState } from 'react'
import  {motion} from 'framer-motion'
import ExperinceCard from './ExperinceCard'
import EducationCards from './EducationCards'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
type Props = {}

const Educations = (props: Props) => {
    const [data,setData]=useState<any | null>(null)
    const colRef=collection(db,'port','3PVKYmsD2h1nTMuICP22','1')
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
    Education</h3>
<div className='flex w-full flex-row  overflow-x-scroll scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]/80  space-x-5 snap-x p-10 snap-mandatory '>
{data?.map((da:any,key:number)=>(
    <EducationCards key={key} name={da.name} img={da.img} form={da.from}/>
))}
</div>
    </motion.div>
  )
}

export default Educations