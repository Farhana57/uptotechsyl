'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility handle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#050505] text-white py-12 border-t border-white/5">
        <div className="container mx-auto px-6 space-y-10">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Image 
                src="/logo.jpg" 
                alt="Uptotechsyl Logo" 
                width={120} 
                height={48} 
                className="h-12 w-auto hover:scale-110 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Footer Grid Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            
            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#eab308] uppercase tracking-wider">Address</h4>
              <div className="text-gray-400 text-sm space-y-2 leading-relaxed">
                <p><strong className="text-gray-200">Headquarter:</strong> Rezia Vhobon 60, Sagordighirpar Road No 11, Sylhet, Bangladesh</p>
                <p><strong className="text-gray-200">Contacts:</strong> +880 1852 471 826 | +880 1345589539</p>
                <p><strong className="text-gray-200">Email:</strong> contact@uptotechsyl.com</p>
                <p><strong className="text-gray-200">Hours:</strong> Sat–Thu 10am–6pm (Fri Closed)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#eab308] uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm font-medium">
                <li><Link href="/" className="hover:text-[#eab308] transition-colors duration-300">Home</Link></li>
                <li><Link href="/service" className="hover:text-[#eab308] transition-colors duration-300">Service</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#eab308] transition-colors duration-300">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-[#eab308] transition-colors duration-300">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#eab308] transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#eab308] uppercase tracking-wider">Newsletter</h4>
              <p className="mb-4 text-sm text-gray-400">Subscribe for latest tech updates.</p>
              <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden p-1 focus-within:border-[#eab308] transition-all">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-2 outline-none bg-transparent text-white text-sm" />
                <button className="bg-[#eab308] text-black px-5 py-2 rounded-md transition-all hover:bg-[#ca8a04]">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <p className="mt-4 text-sm font-semibold tracking-wide">
                <span className="text-[#eab308]">Hotline:</span> +880 181 908 8605
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-2xl pt-8 border-t border-white/5">
            <a href="#" className="text-gray-500 hover:text-[#eab308] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#eab308] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-twitter'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#eab308] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-instagram'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#eab308] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-linkedin'></i></a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-xs tracking-widest pt-4">
            <p>&copy; 2026 <span className="text-[#eab308] font-bold">uptotechsyl.com</span> All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (WhatsApp & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/8801759945057" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
        </a>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className={`bg-[#eab308] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
            showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
      </div>
    </>
  );
}