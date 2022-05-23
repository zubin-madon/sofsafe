import Link from "next/link";
import { navLinks } from "../data/navlinks";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen]=useState(true);
  return (
    <div>
         <nav className="flex">
      {navLinks.map((link, index) => {
        return (
          <ul className= {`pr-5 ${open ? 'flex-row':'hidden'}`}>
            <Link href={link.path}>
              <li className="m-5 text-white" key={index}>{link.name}</li>
            </Link>
          </ul>
        )
      })}
      

      <div onClick={()=>setOpen(!open)} className="hover:animate-pulse m-2 p-2 flex flex-wrap items-center text-3xl cursor-pointer text-white">
      <Link href="/"><img className='w-12 text-white p-2 rounded-full bg-slate-600' src='/sofsafe-icon.png' alt='SofSafe logo'></img></Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;