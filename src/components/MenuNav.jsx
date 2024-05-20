import React from 'react'

const MenuNav = () => {
  return (
    <nav className='sm:max-w-lg sm:mx-auto flex text-xs justify-around mt-5'>
        <div className='bg-purple-600 cursor-pointer text-white px-3 py-1 border rounded-full'>All</div>
        <div className='px-3 py-1 border cursor-pointer rounded-full'>Home</div>
        <div className='px-3 py-1 border cursor-pointer rounded-full'>Apparel</div>
        <div className='px-3 py-1 border cursor-pointer rounded-full'>Accessories</div>
    </nav>
  )
}

export default MenuNav