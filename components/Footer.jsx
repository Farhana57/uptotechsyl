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
      <footer className="bg-[#050505] text-white py-12 border-t border-white/5 relative overflow-hidden">
        
        {/* Background Glow Effects */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 space-y-10 relative z-10">
          
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
              <h4 className="text-lg font-bold text-[#D4AF37] uppercase tracking-wider">Address</h4>
              <div className="text-gray-400 text-sm space-y-2 leading-relaxed">
                <p><strong className="text-gray-200">Headquarter:</strong> Rezia Vhobon 60, Sagordighirpar Road No 11, Sylhet, Bangladesh</p>
                <p><strong className="text-gray-200">Contacts:</strong> +880 1759945057 | +880 1852 471826</p>
                <p><strong className="text-gray-200">Email:</strong> contact@uptotechsyl.com</p>
                <p><strong className="text-gray-200">Hours:</strong> Sat–Thu 10am–6pm (Fri Closed)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#D4AF37] uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm font-medium">
                <li><Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors duration-300">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#D4AF37] transition-colors duration-300">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#D4AF37] uppercase tracking-wider">Newsletter</h4>
              <p className="mb-4 text-sm text-gray-400">Subscribe for latest tech updates.</p>
              <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden p-1 focus-within:border-[#D4AF37] transition-all">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-2 outline-none bg-transparent text-white text-sm" />
                <button className="bg-[#D4AF37] text-black px-5 py-2 rounded-md transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <p className="mt-4 text-sm font-semibold tracking-wide">
                <span className="text-[#D4AF37]">Hotline:</span> +880 1759945057
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-2xl pt-8 border-t border-white/5">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-twitter'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-instagram'></i></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1"><i className='bx bxl-linkedin'></i></a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-xs tracking-widest pt-4">
            <p>&copy; 2026 <span className="text-[#D4AF37] font-bold">uptotechsyl.com</span> All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (WhatsApp & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/8801759945057" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className={`bg-[#D4AF37] hover:bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 ${
            showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <svg className="w-6 h-6 stroke-current text-black font-extrabold" fill="none" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}