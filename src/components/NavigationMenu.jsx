import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import AbhishekSoni_Resume from '../assets/AbhishekSoni_Resume.pdf'

const navLinks = [
    { to: '/', label: 'Home', Icon: FaHome },
    { to: '/about', label: 'About', Icon: FaUser },
    { to: '/projects', label: 'Projects', Icon: FaFolder },
    { to: '/contact', label: 'Contact', Icon: FaEnvelope },
];

export default function NavigationMenu() {

    return (
        <nav className='lg:mt-8 flex-1 w-full text-center'>
            <ul className='flex justify-evenly lg:justify-center lg:gap-6 lg:flex-col'>
                {navLinks.map(({ to, label, Icon }) => (
                    <li key={label}>
                        <NavLink to={to} title={label} aria-label={label} className={({ isActive }) => ` group ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'} transition`}>
                            {({ isActive }) => (
                                <span className='sm:w-24 mx-auto flex-col  lg:flex-row flex items-center lg:gap-2'>
                                    <Icon className={isActive ? 'nav-icon text-indigo-500' : 'nav-icon '} />
                                    <span className='max-sm:sr-only'>{label}</span>
                                </span>
                            )}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <a href={AbhishekSoni_Resume} download aria-label="Download Resume" title='Download Resume' className="group text-gray-500 hover:text-white">
                        <div className='flex-col sm:w-25 mx-auto lg:flex-row flex items-center lg:gap-2'>
                            <FaFileAlt className="nav-icon group-hover:text-indigo-500" />
                            <div className="relative h-6 overflow-hidden w-20 lg:text-left max-sm:sr-only">
                                <div className='group-hover:translate-y-full group-hover:opacity-0 transition-transform duration-300 '>Resume</div>
                                <div className='absolute top-0 transition-transform translate-y-full  opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Download</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}