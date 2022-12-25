import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trustd by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, 
                    unde optio saepe fuga adipisci provident.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl bg-indigo-900' >
                    <p className='text-4xl font-bold text-gray-300 mt-2'>100%</p>
                    <p className='text-4xl font-bold text-gray-300 mt-2'>Completion</p>
                </div >
                <div className='border py-8 rounded-xl shadow-xl bg-indigo-900' >
                    <p className='text-4xl font-bold text-gray-300 mt-2'>27/4</p>
                    <p className='text-4xl font-bold text-gray-300 mt-2'>Devlivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-indigo-900' >
                    <p className='text-4xl font-bold text-gray-300 mt-2'>100K</p>
                    <p className='text-4xl font-bold text-gray-300 mt-2'>Tractions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About