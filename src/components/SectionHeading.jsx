import React from 'react'

export default function SectionHeading({ number, children }) {
    return (
        <h2 className='poppins text-2xl text-indigo-500 font-semibold flex items-center'>
            <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">{number}</span>
            {children}
        </h2>
    )
}
