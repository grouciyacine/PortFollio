import React ,{useEffect,useState} from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import {collection, getFirestore, onSnapshot} from 'firebase/firestore'
import {db} from '../firebase'
type Props = {

}

const Skills = ({}: Props) => {
  
const [data,setData]=useState<any | null>(null)
  const colRef=collection(db,'port','o4x9Jn9y9Kf1stbUJCzy','4')
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
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-3 mx-auto items-center'>
        <h3 className='text-gray-500 text-2xl absolute top-1 uppercase tracking-[20px] '>Skills</h3>
    <h3 className='text-gray-500 text-sm uppercase absolute top-[40px] w-96 justify-center '> Hover Over a Skill For Currency Proficiency</h3>
    <div className='h-[450px] grid grid-cols-4 gap-5 '>
        {data?.map((it:any,key:number)=>(
          <Skill key={key} id={it.id}  name={it.name} img={it.img} per={it.per}/>
        ))}
        

    </div>
    </motion.div>
    
  )
}

export default Skills