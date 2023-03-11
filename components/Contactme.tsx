import React from 'react'
import {EnvelopeIcon, MapIcon, PhoneIcon} from '@heroicons/react/24/solid'
import { useForm,SubmitHandler } from 'react-hook-form'
type Props = {}
type Inputs={
    name:string,
    email:string,
    subject:string,
    message:string
}
const Contactme = (props: Props) => {
    const {register,handleSubmit,watch,formState:{errors}}=useForm<Inputs>()
    const onSubmit:SubmitHandler<Inputs>=(formdata)=>window.location.href=`wwwgrouciyacine@gmail.com?subject=${formdata.subject} and my name is${formdata.name}:${formdata.message} `
  return (
    <div className=' flex relative flex-col text-center md:text-left md:flex-row max-w-4xl justify-evenly mx-auto items-center  h-screen'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
ContactMe
</h3>
<div className='h-[300px] flex flex-col   space-y-10'>
    <h4 className='text-4xl font-semibold text-center '>I have got what you need
        <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk</span>
    </h4>
    <div className='space-y-10'>
        <div className='flex items-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+123456790</p>
        </div>
        <div className='flex items-center'>
            <MapIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Oran Algeria </p>
        </div>
        <div className='flex items-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>wwwgroucieyacine@gmail.com</p>
        </div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
            <input {...register('name')} className='contactInput' placeholder='Enter Name' type='text'/>
            <input {...register('email')}  className='contactInput' type='email' placeholder='Email'/>
        </div>
            <input {...register('subject')} className='contactInput' placeholder='Subject'/>
        <textarea {...register('message')} className='contactInput' placeholder='Message'/>
        <button type='submit' className='bg-[#f7ab0a] py-5 rounded-md text-black font-bold text-lg'>Submit</button>        
    </form>
</div>
    </div>
  )
}

export default Contactme
//2h:27M