import React from 'react'
import { CloudIcon, 
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon
} from '@heroicons/react/solid'
 
import bgImg from '../assets/cloud.jpg'


const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, sunt?</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud management</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
          </div>
          <div>
            <img className='w-full' src={bgImg} alt="/" />
          </div>
          <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2
           transform md:-translate-x-1/2
           bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='text-2xl' >Data services</p>
          
          <div className='flex justify-between flex-wrapp px-4'>
            <p className='px-4 py- 2 text-slate-500'><CloudIcon  className='h-6 text-indigo-900' /> App Security</p>
            <p className='px-4 py- 2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-900' /> Dashboard Designs</p>
            <p className='px-4 py- 2 text-slate-500'><ServerIcon className='h-6 text-indigo-900' /> Cloud Data</p>
            <p className='px-4 py- 2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-900' /> API </p>
          </div>
           </div>

        </div>

    </div>
  )
}

export default Hero