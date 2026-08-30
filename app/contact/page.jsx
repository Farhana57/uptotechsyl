'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS সার্ভিস আইডি, টেমপ্লেট আইডি এবং পাবলিক কি এখানে বসাতে হবে
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      e.target, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        setLoading(false);
        setSuccessMessage('Message sent successfully! We will contact you soon.');
        e.target.reset();
        setTimeout(() => setSuccessMessage(''), 5000);
    }, (error) => {
        setLoading(false);
        setSuccessMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact-section" className="py-24 bg-[#050505] relative overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">

            {/* Section Heading */}
            <div className="text-center mb-20">
                <h4 className="text-[#D4AF37] uppercase tracking-[6px] font-bold mb-3">
                    CONTACT US
                </h4>
                <h2 className="text-4xl md:text-5xl font-black uppercase text-white">
                    Let's Work <span className="text-[#D4AF37]">Together</span>
                </h2>
                <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                    Have a project in mind? We'd love to hear from you.
                    Contact us today and let's build something amazing together.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* ================= LEFT SIDE (Info & Map) ================= */}
                <div className="space-y-8 lg:-translate-x-4 hover:translate-x-0 transition-transform duration-700">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Address Card */}
                        <div className="contact-card bg-zinc-900/80 border border-white/5 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-2 transition-all duration-500">
                            <div className="icon-box w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 transition-all duration-500">
                                <i className="fa-solid fa-location-dot text-2xl text-[#D4AF37]"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Office Address</h3>
                            <p className="text-gray-400 leading-7 text-sm">
                                Rezia Vhobon 60,<br />
                                Sagordighirpar Road No-11,<br />
                                Sylhet, Bangladesh.
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="contact-card bg-zinc-900/80 border border-white/5 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-2 transition-all duration-500">
                            <div className="icon-box w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 transition-all duration-500">
                                <i className="fa-solid fa-phone-volume text-2xl text-[#D4AF37]"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                            <p className="text-gray-400 leading-7 text-sm">
                                +880 1759945057<br />
                                +880 1852 471826
                            </p>
                        </div>

                    </div>

                    {/* Email Card */}
                    <div className="contact-card bg-zinc-900/80 border border-white/5 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:translate-x-2 transition-all duration-500">
                        <div className="icon-box w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 transition-all duration-500">
                            <i className="fa-solid fa-envelope text-2xl text-[#D4AF37]"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Email Address</h3>
                        <p className="text-gray-400 text-sm">contact@uptotechsyl.com</p>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-3xl overflow-hidden border border-white/10 h-80 shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
                        <iframe
                            src="https://maps.google.com/maps?q=Sagordighirpar,%20Sylhet,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            loading="lazy"
                            allowFullScreen>
                        </iframe>
                    </div>

                </div>

                {/* ================= RIGHT SIDE (Contact Form) ================= */}
                <div className="bg-zinc-900/80 border border-white/5 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] relative overflow-hidden lg:translate-x-4 hover:translate-x-0 transition-transform duration-700">

                    <div className="absolute top-0 right-0 w-52 h-52 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

                    <h3 className="text-3xl font-bold text-white mb-8 relative z-10">
                        Send a <span className="text-[#D4AF37]">Message</span>
                    </h3>

                    {successMessage && (
                        <div className="mb-6 p-4 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-sm text-center relative z-10">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                        />

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#D4AF37] text-black py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 shadow-lg cursor-pointer">
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                    </form>

                </div>

            </div>

        </div>

    </section>
  );
}