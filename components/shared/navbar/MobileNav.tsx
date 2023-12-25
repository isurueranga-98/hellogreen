'use client'
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathname = usePathname();

    return (
        <section className=" flex h-full flex-col gap-6 pt-16">
            {sidebarLinks.map ((item)=> {
                const isActive =(pathname.includes(item.route) && item.route.length>1) || pathname === item.route;
                return(
                    <SheetClose asChild key={item.route}>
                      <>
                        <Link href={item.route} className= {`${isActive ? ' bg-green-500  rounded-lg text-white' : 'text-black'} flex items-center justify-start gap-4  p-4`}>
                            <Image src={item.imgURL} alt={item.label} width={20} height={20} className={`${isActive ? "" : 'invert'}`}/>
                            <p className={`${isActive ? ' font-bold' : ' font-normal'} text-xl`}>{item.label}</p>
                        </Link>
                      </>
                    </SheetClose>
                )
            })}
        
        </section>
    )
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert "
        />
      </SheetTrigger>
      <SheetContent side="left" className=" bg-white border-none">
        <Link href="/" className=" flex items-center">
                <Image 
                src="/Logo.svg"
                width={80}
                height={80}
                alt='Hello Green'/>
            </Link>

        <div>
            <SheetClose asChild>
              <>
                <NavContent/>

                <div  className=' pt-20 flex flex-col items-center justify-center space-y-3'>
                    <Link href='/' className='bg-green-500 w-80 py-5 h-full flex items-center justify-center text-white rounded-lg font-semibold'>Request for Buy</Link>
                    <Link href='/' className=' bg-[#13404F] w-80 py-5 h-full flex items-center justify-center text-white rounded-lg font-semibold '>Request for PickUp</Link>
                </div>
                </>
            </SheetClose>
        </div>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
