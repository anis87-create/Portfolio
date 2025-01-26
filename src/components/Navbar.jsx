import React from 'react'
import  '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="p-2 border-b-2 fixed w-full bg-background/95 backdrop-blur">
  <div className="container mx-auto flex justify-between items-center">
    <h2 className="text-xl font-bold"><span>&lt;</span><span className="text-red-500">Anis</span> Zarrouk<span>/&gt;</span></h2>

    <ul className="hidden md:flex text-lg font-medium space-x-6">
      <li className="p-2"><a className="no-underline relative text-lg hover:text-red-500 scroll-smooth" href="#about">About</a></li>
      <li className="p-2"><a className="no-underline relative text-lg hover:text-red-500 scroll-smooth" href="#projects">Projects</a></li>
      <li className="p-2"><a className="no-underline relative text-lg hover:text-red-500 scroll-smooth" href="#services">Services</a></li>
      <li className="p-2"><a className="no-underline relative text-lg hover:text-red-500 scroll-smooth" href="#experience">Experience</a></li>
      <li className="p-2"><a className="no-underline relative text-lg hover:text-red-500 scroll-smooth" href="#contact">Contact</a></li>
    </ul>

    <button
      id="menu-button"
      className="md:hidden text-red-500 focus:outline-none"
      onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  <ul id="mobile-menu" className="md:hidden hidden bg-background/90 backdrop-blur-lg p-4">
    <li className="block px-4 py-2 text-sm hover:bg-red-400"><a href="#about" className="text-lg text-black hover:text-white">About</a></li>
    <li className="block px-4 py-2 text-sm hover:bg-red-400"><a href="#projects" className="text-lg text-black hover:text-white">Projects</a></li>
    <li className="block px-4 py-2 text-sm hover:bg-red-400"><a href="#testimonials" className="text-lg text-black hover:text-white">Testimonials</a></li>
    <li className="block px-4 py-2 text-sm hover:bg-red-400"><a href="#contact" className="text-lg text-black hover:text-white">Contact</a></li>
  </ul>
</nav>

  )
}

export default Navbar
