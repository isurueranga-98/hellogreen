'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'

const NavContent = () => {
    const pathname = usePathname();

    return (
        <section className=" flex h-full flex-row gap-6">
            {sidebarLinks.map ((item)=> {
                const isActive =(pathname.includes(item.route) && item.route.length>1) || pathname === item.route;
                return(
                    
                        <Link href={item.route} className= {`${isActive ? ' bg-green-500  rounded-lg text-white' : 'text-black'} flex items-center justify-start gap-4  p-2`}>
                            <Image src={item.imgURL} alt={item.label} width={20} height={20} className={`${isActive ? "" : 'invert'}`}/>
                            <p className={`${isActive ? ' font-semibold' : ' font-normal'} text-sm`}>{item.label}</p>
                        </Link>
                    
                )
            })}
        
        </section>
    )
}


const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center fixed z-50 w-full gap-5 pl-8 shadow-lg bg-white '>
        <Link href="/" className=' flex items-center'>
            <Image 
            src="/Logo.svg"
            width={80}
            height={80}
            alt='Hello Green'/>
        </Link>

            <div className=' space-x-8 font-medium py-2  max-lg:hidden max'>
                    <NavContent/>
            </div>

            

        
            <div className=' font-medium text-white flex space-x-4 items-center max-lg:hidden'>
                <div className=' flex justify-between items-center gap-5 '>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"
                            appearance={{
                                elements : {
                                    avatarBox : 'h-8 w-8'
                                },
                                variables : {
                                    colorPrimary : '#2EBE7E'
                                }
                            }}
                        />
                    </SignedIn>
                </div>
                
                <div  className=' flex'>
                    <Link href='/ask' className='bg-green-500 w-40 py-5 h-full flex items-center justify-center'>Request for Buy</Link>
                    <Link href='/' className=' bg-[#13404F] w-40 py-5 h-full flex items-center justify-center'>Request for PickUp</Link>
                </div>
                
            </div>
            <div className=' mr-8 hidden max-lg:block'>
                <MobileNav/>
            </div>
    </nav>
  )
}

export default Navbar

