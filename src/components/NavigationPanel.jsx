import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons';
import NavigationMenu from './NavigationMenu';
import profileImg from '../assets/image.webp'

export default function NavigationPanel() {

  return (
    <aside className="bg-[#0a101f] fixed z-50 bottom-0 left-0 lg:top-0 flex w-full h-14 items-center justify-center text-center border-t-2 border-indigo-500/20 lg:sticky lg:h-dvh lg:flex-col lg:border-r-2 lg:px-4 lg:py-12 sm:pt-2 backdrop-blur-sm">
      <div className='flex-col items-center justify-center gap-2 lg:flex hidden'>
        <img src={profileImg} alt="Abhishek Soni" className='rounded-full h-30 w-30 border-8 border-white/20' />
        <NavLink to='/' className='poppins text-2xl font-semibold my-3'>
          Abhishek Soni
        </NavLink>
        <SocialIcons />
      </div>
      <NavigationMenu />
    </aside>
  )
}