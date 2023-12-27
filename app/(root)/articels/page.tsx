import Cart from '@/components/cart/Cart'
import Footer from '@/components/footer/Footer'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className=' mt-20'>

      <Cart />
      </div>
      <div className='flex-grow'>
        {/* Content of your page */}
      </div>
      <Footer />
    </div>
  )
}

export default Page
