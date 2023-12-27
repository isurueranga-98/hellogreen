// components/cart/Cart.tsx
import React from 'react';
import { articles } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

const Cart: React.FC = () => {
  return (

    <div className='pt-5 space-y-5'>

    <div className=' text-center  '>
      <p className=" text-red-800 underline font-medium">ARTICLES</p>
    </div>
    <div className=' px-10 flex-row space-y-10 items-center justify-center lg:flex lg:space-y-0 lg:space-x-3 lg:mx-36'>
      
        {articles.map((article) => (
          
            <div key={article.id} className=' w-full border rounded-xl space-y-4 shadow-lg p-4 flex-col items-center justify-center lg:w-[500px]'>
                <div className=' space-y-2'>

                  <Image src={article.img} width={300} height={300} alt={article.title} className=' w-full'/>
                
                  <h3 className=' font-medium text-lg'>{article.title}</h3>
                  <p className=' line-clamp-5 text-sm'>{article.description}</p>
                </div>

                <div className=' flex items-center justify-center w-full rounded-md h-[30px] bg-green-500'>
                  <Link href='' className=' text-white font-medium'>Read More</Link>
                </div>
              
          </div>
        ))}
      
    </div>
    </div>
  );
};

export default Cart;
