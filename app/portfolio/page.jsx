'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// ২৪টি কার্ডের ডাটা অ্যারে (ক্যাটাগরি, ছবি এবং টাইটেলসহ)
const portfolioData = [
  { id: 1, category: 'web-design', title: 'Web Design', image: '/wev1.jpeg' },
  { id: 2, category: 'web-design', title: 'Web Design', image: '/webimg4.avif' },
  { id: 3, category: 'web-design', title: 'Web Design', image: '/webimg5.avif' },
  { id: 4, category: 'web-design', title: 'Web Design', image: '/webimg6.jpg' },
  { id: 5, category: 'web-design', title: 'UI/UX Design', image: '/ui.jpg' },
  { id: 6, category: 'web-design', title: 'UI/UX Design', image: '/ui.2jpeg.webp' },
  { id: 7, category: 'web-design', title: 'UI/UX Design', image: '/ui3.jpg' },
  { id: 8, category: 'web-dev', title: 'Web Development', image: '/web3.jpeg' },
  { id: 9, category: 'web-dev', title: 'Web Development', image: '/web2.jpeg' },
  { id: 10, category: 'web-dev', title: 'Web Development', image: '/webimg7.avif' },
  { id: 11, category: 'web-dev', title: 'Web Development', image: '/webimg8.avif' },
  { id: 12, category: 'web-dev', title: 'Web Development', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/50f091251708989.6a3d0a75b7c1c.png' },
  { id: 13, category: 'web-dev', title: 'Web Development', image: '/webimg10.png' },
  { id: 14, category: 'web-dev', title: 'Web Development', image: '/webimg11.jpg' },
  { id: 15, category: 'web-dev', title: 'Web Development', image: '/webimg12.avif' },
  { id: 16, category: 'marketing', title: 'SEO Audit', image: '/SEO 3.jpg' },
  { id: 17, category: 'marketing', title: 'SEO Ranking', image: '/Screenshot_7.png' },
  { id: 18, category: 'marketing', title: 'SEO Audit', image: '/Screenshot_6.png' },
  { id: 19, category: 'marketing', title: 'SEO Ranking', image: '/Screenshot (205).png' },
  { id: 20, category: 'marketing', title: 'SEO Audit', image: '/Screenshot (207).png' },
  { id: 21, category: 'marketing', title: 'SEO Ranking', image: '/Screenshot_5.png' },
  { id: 22, category: 'marketing', title: 'SEO Ranking', image: '/mark.avif' },
  { id: 23, category: 'marketing', title: 'SEO Ranking', image: '/SEO-audit-dashboard.png' },
  { id: 24, category: 'graphic', title: 'Logo Design', image: '/booklogo (1).jpeg' },
  { id: 25, category: 'graphic', title: 'Logo Design', image: '/logo.jpg' },
  { id: 26, category: 'graphic', title: 'T-shirt Style', image: '/9.jpg' },
  { id: 27, category: 'graphic', title: 'T-shirt Style', image: '/7.jpg' },
  { id: 28, category: 'graphic', title: 'T-shirt Style', image: '/8.jpg' },
  { id: 29, category: 'graphic', title: 'Liplet-Design', image: '/11.jpg' },
  { id: 30, category: 'graphic', title: 'Liplet-Design', image: '/14.jpg' },
  { id: 31, category: 'graphic', title: 'Book Cover Design', image: '/99.jpg' },
  { id: 32, category: 'graphic', title: 'Book Cover Design', image: '/102.jpg' },
  { id: 33, category: 'graphic', title: 'Book Cover Design', image: '/101.jpg' },
  { id: 34, category: 'graphic', title: 'Calender Design', image: '/104.jpg' },
  { id: 35, category: 'graphic', title: 'Calender Design', image: '/103.jpg' },
  { id: 36, category: 'web-design', title: 'Web Design', image: '/boisell.png' },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight text-white">
            Our <span className="text-amber-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-medium">Explore our work by category</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'web-design', label: 'Web Design' },
            { id: 'web-dev', label: 'Web Development' },
            { id: 'marketing', label: 'Digital Marketing' },
            { id: 'graphic', label: 'Graphic Design' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-bold ${
                filter === btn.id
                  ? 'border-amber-400 bg-amber-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'border-white/10 text-gray-400 hover:bg-amber-400 hover:text-black hover:border-amber-400'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Framer Motion Slide Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // ডান বা বাম থেকে স্লাইড হয়ে আসার লজিক
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="portfolio-item group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-square border border-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer"
              >
                {/* Image handling with Next.js Image or standard img if external links cause issues */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                />
                
                {/* Overlay & Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end z-20">
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                    {item.category === 'web-design' && 'Web Design'}
                    {item.category === 'web-dev' && 'Development'}
                    {item.category === 'marketing' && 'Marketing'}
                    {item.category === 'graphic' && 'Graphics'}
                  </span>
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}