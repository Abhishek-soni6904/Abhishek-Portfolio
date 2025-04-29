import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationPanel from './components/NavigationPanel'
export default function RootLayout() {
    return (
        <>
            <NavigationPanel />
            <main className='min-h-dvh bg-[#111827] flex flex-col relative px-10 lg:px-20 pt-10 pb-20 md:pb-0 md:pt-0'>
                <Outlet />
            </main>
        </>
    )
}
