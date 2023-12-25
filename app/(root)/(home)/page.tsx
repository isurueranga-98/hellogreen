import Cart from "@/components/cart/cart";
import Image from "next/image";
import Link from "next/link";

 
export default function Home() {
  return (
    <div className=" flex-col">

        {/* Hero section */}
        <div className="w-full">

          <div className=" flex-row pt-20 items-center justify-center  md:pt-20 md:items-center md:justify-center lg:w-full lg:flex lg:justify-between lg:items-center lg:pt-24">
            <div className="flex flex-col space-y-8 mx-5 md:items-center md:justify-center md:text-center lg:text-left lg:justify-start lg:items-start lg:space-y-5 lg:mx-7 xl:mx-20 xl:space-y-12 2xl:space-y-14">

              <p className=" font-extrabold text-5xl  lg:text-7xl xl:text-7xl 2xl:text-8xl">Who We Are?</p>
              <p className=" font-bold text-xl lg:text-xl lg:w-[650px] xl:text-2xl xl:w-[700px] 2xl:text-3xl 2xl:w-[1000px]">Hello Green" is an innovative web platform dedicated to addressing the pressing issue of non-biodegradable waste management.</p>
              <p className=" font-semibold text-md  lg:text-md lg:w-[650px] xl:text-lg xl:w-[700px] 2xl:text-xl 2xl:w-[1000px]">Our platform serves as a digital marketplace that enables individuals and businesses to buy and sell various types of non-biodegradable waste materials, with a strong focus on sustainability and responsible waste disposal.</p>
              
                <Link href='' className=" font-medium text-xl underline lg:text-sm xl:text-lg text-green-500">How it work?</Link>
              
            </div>
          
            <div className=" hidden lg:block">
              <Image src='/assets/images/Rey.png'   width={400} height={400} alt="hero img" className=" xl:w-[600px] 2xl:w-[700px]"/>
            </div>

            <div className=" lg:hidden flex items-center justify-center">
              <Image src='/assets/images/Rey2.png'   width={400} height={400} alt="hero img" className=" xl:w-[600px] 2xl:w-[700px]"/>
            </div>

        </div>

        {/* section 2 */}
        <div className=" w-full bg-green-500 h-[400px] flex-row py-10 space-y-10
                        sm:flex-row sm:py-10 sm:space-y-10
                         xl:space-y-0 xl:h-[200px] xl:flex xl:items-center xl:justify-center xl:gap-32 
                         md:space-y-0 md:h-[180px] md:flex md:items-center md:justify-center">

            <div className="flex  px-5 gap-5 xl:flex-row  xl:space-x-3 md:space-x-0 md:flex-col md:items-start md:justify-center ">
                <div className=" ">
                    <Image src='/assets/icons/div.icon-holder.svg' width={50}  height={50} className="md:w-[40px] w-[70px]" alt="cal"/>
                </div>
                    
                <div className="xl:space-y-2 md:space-y-1">
                    <p className=" font-semibold text-white md:text-lg">Dumpster Sizes</p>
                    <p className=" font-normal  text-white xl:text-lg xl:w-[250px] md:w-[220px] md:text-sm">There are many of passages of lorem Ipsum, but the majori have suffered in some form.</p>
                </div>
            </div>
            <div className="flex  px-5 gap-5 xl:flex-row  xl:space-x-3 md:space-x-0 md:flex-col md:items-start md:justify-center ">
                <div className=" ">
                    <Image src='/assets/icons/biN.svg' width={50}  height={50} className="md:w-[40px] w-[70px]" alt="cal"/>
                </div>
                    
                <div className="xl:space-y-2 md:space-y-1">
                    <p className=" font-semibold text-white md:text-lg">Waste Collection</p>
                    <p className=" font-normal  text-white xl:text-lg xl:w-[250px] md:w-[220px] md:text-sm">There are many of passages of lorem Ipsum, but the majori have suffered in some form.</p>
                </div>
            </div>
            <div className="flex  px-5 gap-5 xl:flex-row  xl:space-x-3 md:space-x-0 md:flex-col md:items-start md:justify-center ">
                <div className=" ">
                    <Image src='/assets/icons/cal.svg' width={50}  height={50} className="md:w-[40px] w-[70px]" alt="cal"/>
                </div>
                    
                <div className="xl:space-y-2 md:space-y-1">
                    <p className=" font-semibold text-white md:text-lg">Pickup Schedule</p>
                    <p className=" font-normal  text-white xl:text-lg xl:w-[250px] md:w-[220px] md:text-sm">There are many of passages of lorem Ipsum, but the majori have suffered in some form.</p>
                </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
 
        <div className=" w-full flex-row items-center justify-center pt-5 space-y-10 gap">
            <div className=" text-center space-y-5">
              <p className=" text-red-800 underline font-medium">TYPE OF WASTE</p>
              <p className=" text-4xl font-semibold">Materials We Collected</p>
            </div>

            <div  className="flex flex-col items-center sm:flex-row justify-center gap-5">
                 
                <div className=" w-[400px] h-[170px] xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
                      <Image src='/assets/icons/plastic.svg' width={50} height={50} alt="plastic"/>
                      <div className=" w-20 bg-black border"/>
                      <p className=" font-medium text-xl">Plastic</p>
                </div>
                <div className=" w-[400px] h-[170px] xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
                      <Image src='/assets/icons/bag 1.svg' width={50} height={50} alt="Polythene"/>
                      <div className=" w-20 bg-black border "/>
                      <p className=" font-medium text-xl">Polythene</p>
                </div>
                <div className=" w-[400px] h-[170px] xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
                      <Image src='/assets/icons/food-container.svg' width={50} height={50} alt="Styrofoam"/>
                      <div className=" w-20 bg-black border"/>
                      <p className=" font-medium text-xl">Styrofoam</p>
                </div>
                <div className=" w-[400px] h-[170px] xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
                      <Image src='/assets/icons/glass.svg' width={50} height={50} alt="Glass"/>
                      <div className=" w-20 bg-black border"/>
                      <p className=" font-medium text-xl">Glass</p>
                </div>
                <div className=" w-[400px] h-[170px] xl:w-[170px] xl:h-[170px] md:w-[120px] md:h-[140px] shadow-xl bg-white border-md flex flex-col items-center gap-3 justify-center border rounded-xl">
                      <Image src='/assets/icons/iron.svg' width={50} height={50} alt="Iron"/>
                      <div className=" w-20 bg-black border"/>
                      <p className=" font-medium text-xl">Iron</p>
                </div>
  
            </div>

            {/* section 4 */}
            <div className=" lg:flex-row items-center justify-center gap-10 flex flex-col-reverse ">
                <div className=" flex items-center justify-center">
                  <Image src='/assets/images/HeroIMG.png' className=" rounded-tl-[100px] rounded-br-[100px] md:w-[500px] md:h-[300px]" alt="imge" width={370} height={350}/>
                </div>

              <div className=" flex-col space-y-5 ">
                <div className=" text-center space-y-3">
                  <p className=" text-red-800 underline font-medium">OUR SERVICES</p>
                  <p className=" text-xl w-[400px] md:w-[800px]">Hello Green is now collected in any type of waste materials in your area. Feel free to contact us.</p>
                </div>

                <div className=" flex-col md:flex-row flex justify-center items-center space-y-5 md:space-y-0 md:space-x-4">
                  <div className=" flex-col gap-5 space-y-5 ">
                    <div className="w-[300px] h-[70px] border border-gray-200 rounded-lg flex items-center justify-center">
                        <p className=" font-semibold text-xl">Waste Pickups</p>
                    </div>

                    <div className="w-[300px] h-[70px] border border-gray-200 rounded-lg flex items-center justify-center">
                        <p className=" font-semibold text-xl">Waste Solutions</p>
                    </div>
                    
                  </div>

                  <div className=" flex-row gap-5 space-y-5">
                    <div className="w-[300px] h-[70px] border border-gray-200 rounded-lg flex items-center justify-center">
                        <p className=" font-semibold text-xl">Roll-off Services</p>
                    </div>

                    <div className="w-[300px] h-[70px] border border-gray-200 rounded-lg flex items-center justify-center">
                        <p className=" font-semibold text-xl">24/7 Support</p>
                    </div>
                    
                  </div>
                  
                </div>


                <Link href=''><p className=" underline font-medium text-lg text-center pt-5">Let’s Talk With Team</p></Link>
              </div>
            </div>

            {/* section 5 */}

            <Cart/>
        </div>
    </div>
  )
}

