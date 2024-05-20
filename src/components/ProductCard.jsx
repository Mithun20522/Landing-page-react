import { IoShareOutline } from "react-icons/io5";

const ProductCard = () => {
  return (
    <div className='relative max-w-[255px] p-2 '>
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1" alt="product__img" className='max-w-[200px] max-h-[200px]' />
      <div className='w-full  p-1 text-sm'>
        <span>category</span>
        <p className='font-semibold'>Lorem ipsum dolor sit</p>
        <span>Rs. 2900</span>
      </div>
      <IoShareOutline className="absolute bottom-32 bg-slate-500 shadow text-white rounded-full w-8 h-8 p-1 right-5"/>
    </div>
  )
}

export default ProductCard