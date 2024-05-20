import { useContext } from "react"
import Header from "../components/Header"
import MenuNav from "../components/MenuNav"
import Products from "../components/Products"
import ToggleOptions from "../components/ToggleOptions"
import ProductContext from "../context/ProductContext"

const Vibe = () => {
  const {total} = useContext(ProductContext)

  return (
    <div>
        <Header/>
        <ToggleOptions/>
        <p className="sm:max-w-lg sm:mx-auto text-slate-500 italic text-sm mt-5 mx-8">{total} products</p>
        <MenuNav/>
        <Products/>
    </div>
  )
}

export default Vibe