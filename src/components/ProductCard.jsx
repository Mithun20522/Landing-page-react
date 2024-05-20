import { useEffect, useState } from "react";
import { IoShareOutline } from "react-icons/io5";

const ProductCard = ({product}) => {
  const [isDiscount, setIsDiscount] = useState(false);
  useEffect(() => {
    if(product.discountPercent > 0) {
      setIsDiscount(true)
    }
  },[isDiscount])
  return (
    <div className='relative max-w-[255px] p-1'>
      <img src={product.images[0].src} alt={product.title} className='w-[200px] h-[200px]' />
      <div className='w-full  p-1 text-sm'>
        <span className="text-sm text-slate-700">{product.vendor}</span>
        <p className='font-semibold'>{`${product.title.slice(0,22)}..`}</p>
        <div className="flex gap-2 items-center">
          <span>Rs. {product.price.value}</span>
          <div className="flex gap-2">
            {
              isDiscount && (
                <span className="text-sm line-through text-slate-500">Rs. {product.MRP.value}</span>
              )
            }
            <span className="text-purple-600">{product.discountPercent}%</span>
          </div>
        </div>
      </div>
      <IoShareOutline className="absolute bottom-32 cursor-pointer bg-slate-700 shadow text-white rounded-full w-8 h-8 p-1 right-5"/>
    </div>
  )
}

export default ProductCard