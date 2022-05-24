import Link from "next/link";
import { navLinks } from "../data/navlinks";
import { useState } from "react";
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen]=useState(true);
  return (
    <div>
         <nav className="flex">
      {navLinks.map((link, index) => {
        return (
          <ul className= {`pr-5 ${open ? 'flex-row':'hidden'}`}>
            <Link href={link.path}>
              <li className="m-5 p-5 text-white" key={index}>{link.name}</li>
            </Link>
          </ul>
        )
      })}
      
      <div onClick={()=>setOpen(!open)} className="hover:animate-pulse m-2 p-2 flex flex-wrap text-3xl cursor-pointer text-white">
      <Link href="/">
      <Image width="40" height="40" layout="intrinsic" className='rounded-lg w-10 h-10 object-contain object-top sm:mb-0 mb-4 hover:animate-pulse' src='/sofsafe-icon.png' alt='SofSafe logo'/>
      </Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;