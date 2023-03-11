import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion} from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return ( 
  <header className='sticky top-0 p-5 flex items-start flex-row  justify-between max-w-4xl mx-auto z-20 xl:items-center'>
        <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}}
        className='flex flex-row  items-center '>
        <SocialIcon url='https://www.instagram.com/grouciyacin/' fgColor='gray' bgColor='transparent'/>
        <SocialIcon url='https://www.linkedin.com/in/grouci-yacine-13507123a/' fgColor='gray' bgColor='transparent'/>
        <SocialIcon url='https://github.com/grouciyacine' fgColor='gray' bgColor='transparent'/>
        <SocialIcon url='https://twitter.com/YacineGrouci' fgColor='gray' bgColor='transparent'/>
    </motion.div>
    <motion.div initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} 
    className='flex flex-row items-center text-gray-300 cursor-pointer'>
    <SocialIcon className='cursor-pointer' url='https://mail.google.com/' fgColor='gray' bgColor='transparent'/>
    <p className='uppercase hidden md:inline-flex text-sm p-2  text-gray-300'>Get In Touch</p>
    </motion.div>
  </header>

  )
}

export default Header
//41m