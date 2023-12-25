import Navbar from '@/components/shared/navbar/Navbar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className=' relative'>
        <Navbar/>
        <section>
            {children}
        </section>
    </main>
  )
}

export default Layout