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
      
      
    </nav>
    </div>
  )
}

export default Navbar;