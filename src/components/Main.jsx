import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'


function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src='https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D' alt='tech'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Oluwadamilare Olayanju</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Coder',
                1000,
                'Tech-Enthusiast',
                1000,
                'Learner',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft:'5px'}}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://linkedin.com/in/oluwadamilare-olayanju-4677a3b8' target="_blank"><FaLinkedin className='cursor-pointer' size={20}/></a>
            <a href='https://x.com/dareolayanju?t=uGGE4XrxkdffkrzDLLefxw&s=09' target="_blank"><FaTwitter className='cursor-pointer' size={20} /></a>
            <a href='https://www.facebook.com/engrolayanju.oluwadamilare?mibextid=ZbWKwL' target="_blank"><FaFacebookF className='cursor-pointer' size={20}/></a>
            <a href='' target="_blank"><FaInstagram className='cursor-pointer' size={20}/></a>
            
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main 