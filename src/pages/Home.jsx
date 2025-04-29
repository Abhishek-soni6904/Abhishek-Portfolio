import React from 'react';
import TypingRoles from '../components/TypingRoles';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/image.webp'

export default function Home() {
  return (
    <section className='max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:justify-between md:min-h-dvh '>
      <div className=' md:flex-1 space-y-6'>
        <h1 className='text-4xl md:text-6xl poppins font-bold'>
          <span className='text-indigo-500'>Hello,</span> I'm Abhishek Soni
        </h1>
        <TypingRoles />
        <p className='text-lg text-gray-300 my-6'> I build responsive web applications with modern technologies,focusing on creating memorable user experiences.</p>
        <div className='flex flex-wrap gap-4'>
          <Link to={"/projects"} className='rounded-full bg-indigo-600 flex gap-2 items-center justify-center px-6 py-3 hover:bg-indigo-700 font-medium transition'>View My Work <FaArrowRight className='ml-1' /></Link>
          <Link to={"/contact"} className='rounded-full px-6 py-3 border-1 border-white/20 hover:bg-white/10 transition font-medium'>Let's Connect</Link>
        </div>
      </div>
      <div className="md:flex-1 flex justify-center mt-10 md:mt-0">

        <div className="relative">
          <div
            className="w-64 h-64 md:w-80 md:h-80 bg-indigo-500/20 rounded-full absolute -top-4 -left-4 animate-pulse">
          </div>
          <div className='w-64 h-64 md:w-80 md:h-80 rounded-full relative z-10 overflow-hidden border-4 border-white/20'>
            <img
              src={profileImg}
              alt="Abhishek Soni"
              className="w-full h-full flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}