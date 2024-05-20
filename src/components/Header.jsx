import { HiOutlineBookmark } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex sm:px-20 sm:justify-between justify-evenly border-b shadow-full p-3">
        <h1 className="text-xl ">#Vibe Page</h1>
        <div className="flex items-center gap-2 text-2xl sm:mr-0 -mr-24">
            <HiOutlineBookmark className="cursor-pointer"/>
            <IoBagOutline className="cursor-pointer"/>
        </div>
    </header>
  )
}

export default Header