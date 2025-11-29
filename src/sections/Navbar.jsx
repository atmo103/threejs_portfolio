import { useState } from 'react';
import { navLinks } from '/src/constants/index.js';
import React from 'react';


const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);



const Navbar = () => {

const [isOpen, setIsOpen] = React.useState(false);
const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);



  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 text-white'>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold  text-xl hover:text-white transition-colors ">Atmo103</a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white  focus:outline-none sm:hidden flex"
                aria-label="Toggle Menu">
                    <img src={isOpen ? '/assets/close.svg' : "/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>

        {/* MOBILE HEADER */}
        </header>
  )
}

export default Navbar