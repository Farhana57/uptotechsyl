'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, message: '' });

  // Hero Slider State (অটো স্লাইড করার জন্য)
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // প্রতি ৪ সেকেন্ড পর পর পরিবর্তন হবে

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, message: '' });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Auto Counter Animation Effect
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const currentText = counter.innerText.replace('+', '');
        const count = +currentText || 0;
        
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc) + '+';
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCount();
    });
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div id="hero-slider" className="absolute inset-0 h-full w-full">
          <div className={`hero-slide absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" className="h-full w-full object-cover" alt="Slide 1" />
          </div>
          <div className={`hero-slide absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1920" className="h-full w-full object-cover" alt="Slide 2" />
          </div>
          <div className={`hero-slide absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" className="h-full w-full object-cover" alt="Slide 3" />
          </div>
        </div>

        <div className="absolute inset-0 z-15 pointer-events-none animate-golden-pulse"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Leading <span className="text-primary glow-text">IT & Web Solutions</span> <br /> 
            Through Smart Digital Services
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            We specialize in Web Design And Web Development, UI/UX Design, and Graphic-Design Digital Marketing to help your brand grow globally.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/services" className="btn-golden px-10 py-4 rounded-md text-center shadow-lg">Get Started</a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:border-primary hover:text-primary transition text-center">Contact Us</a>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section id="stats" className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="bg-black/40 rounded-2xl border border-white/5 p-8 flex flex-col items-center gold-border-hover">
            <span className="text-4xl font-bold text-primary counter" data-target="200">0</span>
            <p className="mt-2 text-gray-400 font-medium">Customers</p>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/5 p-8 flex flex-col items-center gold-border-hover">
            <span className="text-4xl font-bold text-primary counter" data-target="3">0</span>
            <p className="mt-2 text-gray-400 font-medium">Years</p>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/5 p-8 flex flex-col items-center gold-border-hover">
            <span className="text-4xl font-bold text-primary counter" data-target="200">0</span>
            <p className="mt-2 text-gray-400 font-medium">Projects</p>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/5 p-8 flex flex-col items-center gold-border-hover">
            <span className="text-4xl font-bold text-primary counter" data-target="16">0</span>
            <p className="mt-2 text-gray-400 font-medium">Team Members</p>
          </div>

        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-20 bg-[#050505] text-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-primary">services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide top-notch digital solutions to help your business scale in the modern era.
          </p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-code-alt text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">Web Design & Dev</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">Responsive and modern websites tailored for your business success.</p>
          </div>

          {/* Card 2 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-palette text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">UI/UX Design</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">User-friendly interfaces and engaging experiences for your brand.</p>
          </div>

          {/* Card 3 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-cog text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">Web Maintenance</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">Secure, updated, and high-performance support for your existing sites.</p>
          </div>

          {/* Card 4 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-video text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">Video Editing</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">Professional cinematic editing and motion graphics to tell your story.</p>
          </div>

          {/* Card 5 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-line-chart text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">Digital Marketing</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">SEO, Social Media, and paid campaigns to grow your brand globally.</p>
          </div>

          {/* Card 6 */}
          <div className="service-card p-8 rounded-3xl relative z-10 shadow-lg">
            <div className="service-icon-box w-16 h-16 mb-6 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center transition-all">
              <i className='bx bx-brush text-4xl text-primary transition-colors'></i>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white transition-colors">Graphic Design</h3>
            <p className="text-gray-400 leading-relaxed text-sm transition-colors">Creative visuals, logos, and branding that make your company stand out.</p>
          </div>

        </div>
        
        <div className="text-center mt-12">
          <a href="/service" className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-black font-bold hover:bg-white transition-all duration-300">
            View All Service
            <i className='bx bx-right-arrow-alt ml-2 text-xl'></i>
          </a>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-2xl">
                <img src="/about-us.jpg" alt="About Us" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary uppercase">Why Choose Uptotechsyl</h2>
              <ul className="space-y-4 text-lg text-gray-300">
                
                <li className="about-list-item flex items-center cursor-default p-4 rounded-xl shadow-md">
                  <i className='bx bx-check-circle text-primary text-2xl mr-3 transition-colors'></i>
                  <span className="font-bold text-white transition-colors">Experienced Team</span>
                </li>

                <li className="about-list-item flex items-center cursor-default p-4 rounded-xl shadow-md">
                  <i className='bx bx-check-circle text-primary text-2xl mr-3 transition-colors'></i>
                  <span className="font-bold text-white transition-colors">Quality Service</span>
                </li>

                <li className="about-list-item flex items-center cursor-default p-4 rounded-xl shadow-md">
                  <i className='bx bx-check-circle text-primary text-2xl mr-3 transition-colors'></i>
                  <span className="font-bold text-white transition-colors">Affordable Pricing</span>
                </li>

                <li className="about-list-item flex items-center cursor-default p-4 rounded-xl shadow-md">
                  <i className='bx bx-check-circle text-primary text-2xl mr-3 transition-colors'></i>
                  <span className="font-bold text-white transition-colors">24/7 Support</span>
                </li>

                <li className="about-list-item flex items-center cursor-default p-4 rounded-xl shadow-md">
                  <i className='bx bx-check-circle text-primary text-2xl mr-3 transition-colors'></i>
                  <span className="font-bold text-white transition-colors">Pay Only After You Are Satisfied</span>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </section>
     {/* Team Section */}
      <section id="team" className="py-20 bg-[#050505]">
        <div className="container mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            The People Behind the <span className="text-primary">Vision</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            The dedicated leaders who shape our mission and drive our success.
          </p>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            
            {/* 1st Card */}
            <div className="team-card group rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="team-img-border relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6 border-4 border-primary/40 transition-all duration-500 shadow-xl">
                    <img src="sirimg.jpeg" alt="MD. Ataur Rahman Khan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white transition-colors">MD. Ataur Rahman Khan</h3>
                <p className="text-primary font-bold tracking-wide uppercase text-sm transition-colors">Founder & CEO</p>
            </div>

            {/* 2nd Card */}
            <div className="team-card group rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="team-img-border relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6 border-4 border-primary/40 transition-all duration-500 shadow-xl">
                    <img src="my img.jpeg" alt="Farhana Khatun" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white transition-colors">Farhana Khatun</h3>
                <p className="text-primary font-bold tracking-wide uppercase text-sm transition-colors">Exicutive Officer(HR)& Full Stack Dev</p>
            </div>

            {/* 3rd Card: Shoumo S. Araf */}
            <div className="team-card group rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="team-img-border relative overflow-hidden rounded-full w-56 h-56 mx-auto mb-6 border-4 border-primary/40 transition-all duration-500 shadow-xl">
                    <img src="araf.jpeg" alt="Shoumo S. Araf" className="w-full h-full object-cover bg-gray-800 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white transition-colors">Shoumo S. Araf</h3>
                <p className="text-primary font-bold tracking-wide uppercase text-sm transition-colors">Project Manager</p>
            </div>

        </div>
      </section>
         {/* 4. Portfolio / Recent Case Studies Section */}
      <section id="portfolio" className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Work</h4>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase">Recent Case Studies</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="my-work-card">
              <img src="e-commerce-digital-internet-technology-web-concept.jpg" alt="E-commerce Platform" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">Web Development</span>
                <h3 className="text-white text-2xl font-bold my-2">E-commerce Platform</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Fully responsive online store with secure payment integration.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="my-work-card">
              <img src="brandingui.jpg" alt="Corporate Identity" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">Branding</span>
                <h3 className="text-white text-2xl font-bold my-2">Corporate Identity</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Modern brand identity design for leading tech firms.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="my-work-card">
              <img src="web2.jpeg" alt="Fitness Tracker" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">App Design</span>
                <h3 className="text-white text-2xl font-bold my-2">Fitness Tracker</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Mobile application focusing on health and activity tracking.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="my-work-card">
              <img src="webimg10.png" alt="Global SEO" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">SEO</span>
                <h3 className="text-white text-2xl font-bold my-2">Global SEO</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Increased organic traffic by 150% with global strategies.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="my-work-card">
              <img src="webimg12.avif" alt="SaaS Dashboard" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">Software</span>
                <h3 className="text-white text-2xl font-bold my-2">SaaS Dashboard</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">Intuitive data visualization dashboard for complex analytics.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="my-work-card">
              <img src="WEB1.jpeg" alt="Creative Design" />
              <div className="my-work-overlay">
                <span className="text-primary font-bold uppercase text-xs tracking-wider">Portfolio</span>
                <h3 className="text-white text-2xl font-bold my-2">Creative Design</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">A minimalist yet powerful site for creative professionals.</p>
                <a href="/portfolio" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300">View Details</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section id="process" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Process</h4>
                <h2 className="text-4xl md:text-5xl font-black uppercase text-white">How We Work</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We follow a proven step-by-step process to ensure your project's success from concept to launch.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 transform -translate-y-16"></div>

                {/* Step 1 */}
                <div className="group text-center p-8 rounded-3xl bg-zinc-900/30 border border-white/5 transition-all duration-500">
                    <div className="relative inline-block mb-8">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-black mx-auto border-4 border-primary/20 transition-all duration-500 relative z-10">
                            01
                        </div>
                        <div className="absolute.w-10 -bottom-2 -right-2 w-10 h-10 bg-black border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 z-20">
                            <i className="fa-solid fa-magnifying-glass text-xs text-primary"></i>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white transition-colors">Discovery</h3>
                    <p className="text-gray-400 text-sm leading-relaxed transition-colors">We start by understanding your goals, target audience, and business requirements.</p>
                </div>

                {/* Step 2 */}
                <div className="group text-center p-8 rounded-3xl bg-zinc-900/30 border border-white/5 transition-all duration-500">
                    <div className="relative inline-block mb-8">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-black mx-auto border-4 border-primary/20 transition-all duration-500 relative z-10">
                            02
                        </div>
                        <div className="absolute.w-10 -bottom-2 -right-2 w-10 h-10 bg-black border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 z-20">
                            <i className="fa-solid fa-pen-nib text-xs text-primary"></i>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white transition-colors">Planning & Design</h3>
                    <p className="text-gray-400 text-sm leading-relaxed transition-colors">Creating wireframes and visual designs that align perfectly with your brand identity.</p>
                </div>

                {/* Step 3 */}
                <div className="group text-center p-8 rounded-3xl bg-zinc-900/30 border border-white/5 transition-all duration-500">
                    <div className="relative inline-block mb-8">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-black mx-auto border-4 border-primary/20 transition-all duration-500 relative z-10">
                            03
                        </div>
                        <div className="absolute.w-10 -bottom-2 -right-2 w-10 h-10 bg-black border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 z-20">
                            <i className="fa-solid fa-code text-xs text-primary"></i>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white transition-colors">Development</h3>
                    <p className="text-gray-400 text-sm leading-relaxed transition-colors">Our experts turn designs into high-performance, clean-coded websites or apps.</p>
                </div>

                {/* Step 4 */}
                <div className="group text-center p-8 rounded-3xl bg-zinc-900/30 border border-white/5 transition-all duration-500">
                    <div className="relative inline-block mb-8">
                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-black mx-auto border-4 border-primary/20 transition-all duration-500 relative z-10">
                            04
                        </div>
                        <div className="absolute.w-10 -bottom-2 -right-2 w-10 h-10 bg-black border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 z-20">
                            <i className="fa-solid fa-rocket text-xs text-primary"></i>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white transition-colors">Launch & Support</h3>
                    <p className="text-gray-400 text-sm leading-relaxed transition-colors">Rigorous testing, final deployment, and ongoing maintenance for success.</p>
                </div>

            </div>
        </div>
      </section>
        <section id="contact-section" className="py-24 bg-[#050505] overflow-hidden">
    <div className="container mx-auto px-6 max-w-4xl">
        <div className="contact-card bg-black border border-white/10 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
            
            <div className="md:col-span-2 bg-[#D4AF37] p-12 text-black flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                    <p className="mb-8 font-medium">Ready to start your next big project with us?</p>
                    <div className="space-y-4 text-sm font-bold">
                        <p className="flex items-start">
                            <i className="fa-solid fa-phone mr-3 mt-1"></i>
                            <span>+880 1852 471 826<br />+880 1345 589 539</span>
                        </p>
                        <p className="flex items-center">
                            <i className="fa-solid fa-envelope mr-3"></i>
                            <span>contact@uptotechsyl.com</span>
                        </p>
                        <p className="flex items-center">
                            <i className="fa-solid fa-location-dot mr-3"></i>
                            <span>Sylhet, Bangladesh</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:col-span-3 p-12 bg-black/40 flex flex-col justify-center">
                
                {status.message && (
                    <div className={`mb-6 p-4 rounded-xl text-sm font-medium transition-all ${
                        status.success
                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#D4AF37] outline-none py-2 transition text-white" 
                        placeholder="Your Name" 
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#D4AF37] outline-none py-2 transition text-white" 
                        placeholder="Email Address" 
                    />
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4} 
                        className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#D4AF37] outline-none py-2 transition text-white resize-none" 
                        placeholder="Your Message"
                    ></textarea>
                    
                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#D4AF37] hover:bg-white text-black py-4 rounded-xl font-bold uppercase hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

        </div>
    </div>
</section>
    </>
  );
}