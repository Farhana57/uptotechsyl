'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="main-header" className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image 
              src="/logo.jpg" 
              alt="Uptotechsyl Logo" 
              width={120} 
              height={48} 
              className="h-12 w-auto hover:scale-105 transition-transform duration-300" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-medium items-center">
          <Link href="/" className="text-white hover:text-[#eab308] transition-colors duration-300">Home</Link>
          <Link href="/service" className="text-white hover:text-[#eab308] transition-colors duration-300">Service</Link>
          <Link href="/about" className="text-white hover:text-[#eab308] transition-colors duration-300">About</Link>
          <Link href="/portfolio" className="text-white hover:text-[#eab308] transition-colors duration-300">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-[#eab308] transition-colors duration-300">Contact</Link>
        </div>

        {/* Search & Contact Us Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-white text-xl hover:text-[#eab308] transition-all duration-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link 
            href="/contact" 
            className="btn-golden text-black px-8 py-3 rounded-full font-bold shadow-lg uppercase text-sm tracking-wider hover:opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          id="menu-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} transition-all duration-300`}></i>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div 
          id="mobile-menu" 
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl text-white flex flex-col p-8 space-y-6 shadow-2xl border-t border-white/10 lg:hidden transition-all duration-300"
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#eab308] transition-all">Home</Link>
          <Link href="/service" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#eab308] transition-all">Service</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#eab308] transition-all">About</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#eab308] transition-all">Portfolio</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#eab308] transition-all border-b border-white/10 pb-4">Contact</Link>
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="btn-golden text-black text-center py-4 rounded-xl font-bold text-lg uppercase shadow-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}