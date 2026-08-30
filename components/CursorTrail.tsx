'use client';
import React, { useEffect } from 'react';

export default function CursorTrail() {
  useEffect(() => {
    const numDots = 7;
    const dots: any[] = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      
      dot.style.position = 'fixed';
      dot.style.pointerEvents = 'none';
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = '#FFD700'; 
      dot.style.zIndex = '2147483647'; 
      dot.style.top = '0px';
      dot.style.left = '0px';
      
      const size = Math.max(5, (i + 1) * 3.5); 
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      
      dot.style.boxShadow = '0 0 15px #FFD700, 0 0 5px #FFA500';
      dot.style.opacity = (1 - (i / numDots) * 0.6).toFixed(2);
      
      (dot as any).x = window.innerWidth / 2;
      (dot as any).y = window.innerHeight / 2;
      
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
        dot.x += (currentX - dot.x) * (0.4 - index * 0.03);
        dot.y += (currentY - dot.y) * (0.4 - index * 0.03);

        dot.style.transform = `translate3d(${dot.x - (dot.offsetWidth / 2)}px, ${dot.y - (dot.offsetHeight / 2)}px, 0)`;

        currentX = dot.x;
        currentY = dot.y;
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

  return null;
}