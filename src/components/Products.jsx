import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='justify-center mt-5 flex gap-2 flex-wrap'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default Products