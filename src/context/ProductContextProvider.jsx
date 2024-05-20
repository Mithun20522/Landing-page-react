import { useState } from "react"
import ProductContext from "./ProductContext"
const ProductContextProvider = ({children}) => {
    const [total, setTotal] = useState(0)
  return (
    <ProductContext.Provider value={{total, setTotal}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider