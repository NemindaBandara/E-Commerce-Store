import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [bestSeller,setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProducts = products.filter((item)=>(item.bestseller));
    setBestSeller(bestProducts.slice(0,5))
  },[])
  return (
    <div className='my-5'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our most loved products in the Best Seller section. These items have captured the hearts of our customers for their unmatched quality, style, and value. Whether you're shopping for essentials or looking for something special, our bestsellers are guaranteed to impress.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
