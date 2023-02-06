import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return ( 
        <nav className="flex justify-between px-[15px] py-[15px] items-center">
            <h1 className="text-[30px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ef536d] to-[#e10fe1]">FitLife</h1>
            <div className="icons md:hidden" onClick={handleClick}>
                <img src={open ? "close.svg" : "menu.svg"} alt="" />
            </div>
            <div className="links hidden md:block" id={open ? "show" : "hidden"}>
                <ul className="flex">
                    <li><Link href='/' className="text-[15px] text-[#7f7d7d] hover:text-[#31c7ed] px-[20px]">Home</Link></li>
                    <li><Link href='/workout' className="text-[15px] text-[#7f7d7d] hover:text-[#31c7ed] px-[20px]">Workouts</Link></li>
                    <li><Link href='/sign-in' className="text-[15px] text-[#7f7d7d] hover:text-[#31c7ed] px-[20px]">Sign-in</Link></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;