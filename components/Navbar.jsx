'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="main-header" className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img 
              src="/logo.jpg" 
              alt="Uptotechsyl Logo" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-md" 
            />
          </Link>
        </div>

        {/* Desktop Links with Correct Page Routing */}
        <div className="hidden lg:flex space-x-8 font-medium">
          <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
          <Link href="/about" className="text-white hover:text-[#D4AF37] transition-colors duration-300">About</Link>
          <Link href="/services" className="text-white hover:text-[#D4AF37] transition-colors duration-300">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-[#D4AF37] transition-colors duration-300">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-[#D4AF37] transition-colors duration-300">Contact</Link>
        </div>

        {/* Right Side: Search Button & Contact Us Button */}
        <div className="hidden lg:flex items-center space-x-5">
          <button 
            aria-label="Search" 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <Link href="/contact" className="btn-golden text-black px-8 py-3 rounded-full font-bold shadow-lg uppercase text-sm tracking-wider">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white text-2xl focus:outline-none hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} transition-all duration-300`}></i>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl text-white flex flex-col p-8 space-y-6 shadow-2xl border-t border-white/10 lg:hidden transition-all duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#D4AF37] transition-all">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#D4AF37] transition-all">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#D4AF37] transition-all">Services</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#D4AF37] transition-all">Portfolio</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-semibold hover:text-[#D4AF37] transition-all border-b border-white/10 pb-4">Contact</Link>
          
          <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-golden text-black text-center py-4 rounded-xl font-bold text-lg uppercase">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}