import { IoShareOutline } from "react-icons/io5";

const ProductCard = ({product}) => {
  return (
    <div className='relative max-w-[255px] p-1'>
      <img src={product.images[0].src} alt={product.title} className='w-[200px] h-[200px]' />
      <div className='w-full  p-1 text-sm'>
        <span className="text-sm text-slate-700">{product.vendor}</span>
        <p className='font-semibold'>{`${product.title.slice(0,22)}..`}</p>
        <span>Rs. 2900</span>
      </div>
      <IoShareOutline className="absolute bottom-32 cursor-pointer bg-slate-700 shadow text-white rounded-full w-8 h-8 p-1 right-5"/>
    </div>
  )
}

export default ProductCard