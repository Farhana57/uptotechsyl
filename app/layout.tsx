'use client';
import { useEffect } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CustomDot extends HTMLDivElement {
  x?: number;
  y?: number;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const numDots = 7;
    const dots: CustomDot[] = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div') as CustomDot;
      
      dot.style.position = 'fixed';
      dot.style.pointerEvents = 'none';
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = '#FFD700'; // উজ্জ্বল গোল্ডেন কালার
      dot.style.zIndex = '2147483647'; 
      dot.style.top = '0px';
      dot.style.left = '0px';
      
      const size = Math.max(5, (i + 1) * 3.5); 
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      
      dot.style.boxShadow = '0 0 15px #FFD700, 0 0 5px #FFA500';
      dot.style.opacity = (1 - (i / numDots) * 0.6).toFixed(2);
      
      dot.x = window.innerWidth / 2;
      dot.y = window.innerHeight / 2;
      
      document.body.appendChild(dot);
      dots.push(dot);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    function animateCursor() {
      let currentX = mouse.x;
      let currentY = mouse.y;

      dots.forEach((dot, index) => {
        if (dot.x !== undefined && dot.y !== undefined) {
          dot.x += (currentX - dot.x) * (0.4 - index * 0.03);
          dot.y += (currentY - dot.y) * (0.4 - index * 0.03);

          dot.style.transform = `translate3d(${dot.x - (dot.offsetWidth / 2)}px, ${dot.y - (dot.offsetHeight / 2)}px, 0)`;

          currentX = dot.x;
          currentY = dot.y;
        }
      });

      animationFrameId = requestAnimationFrame(animateCursor);
    }

    animationFrameId = requestAnimationFrame(animateCursor);

    const handleMouseLeave = () => {
      dots.forEach(dot => dot.style.opacity = '0');
    };

    const handleMouseEnter = () => {
      dots.forEach((dot, index) => {
        dot.style.opacity = (1 - (index / numDots) * 0.6).toFixed(2);
      });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>UpToTechSyl - IT & Web Solutions</title>
        <meta name="description" content="Leading IT & Web Solutions Through Smart Digital Services" />
        {/* FontAwesome CDN for WhatsApp & Scroll Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        {/* Boxicons CDN for Service & Feature Icons */}
        <link 
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
          rel='stylesheet' 
        />
      </head>
      <body className="bg-[#050505] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}