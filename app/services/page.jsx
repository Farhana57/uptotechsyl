import Link from 'next/link';

export default function ServicesPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-28">
            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/25">
                        Expert Digital Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-white">
                        Elevate Your Business with Our Expertise
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        We help ambitious businesses scale through modern design, robust development, and strategic marketing with a touch of excellence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* 1. Web Design & Dev */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">💻</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">Web Design & Dev</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Responsive and modern websites for your business using the latest tech stack.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ Custom Web Apps</li>
                            <li className="flex items-center gap-2">✓ E-commerce Solutions</li>
                            <li className="flex items-center gap-2">✓ API Integration</li>
                        </ul>
                    </div>

                    {/* 2. Video Editing */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">🎬</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">Video Editing</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Professional post-production, storytelling, and high-quality cinematic edits.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ YouTube & Social Media</li>
                            <li className="flex items-center gap-2">✓ Cinematic Color Grading</li>
                            <li className="flex items-center gap-2">✓ Motion Graphics</li>
                        </ul>
                    </div>

                    {/* 3. Digital Marketing */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">📈</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">Digital Marketing</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">SEO, Social Media, and paid campaigns to grow your business presence.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ Search Engine SEO</li>
                            <li className="flex items-center gap-2">✓ Social Media Strategy</li>
                            <li className="flex items-center gap-2">✓ Content Marketing</li>
                        </ul>
                    </div>

                    {/* 4. Graphic Design */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">🎨</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">Graphic Design</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Creative visuals, logos, and branding that define your identity.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ Logo & Branding</li>
                            <li className="flex items-center gap-2">✓ Social Media Posts</li>
                            <li className="flex items-center gap-2">✓ Print Design</li>
                        </ul>
                    </div>

                    {/* 5. Website Maintenance */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">🛡️</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">Website Maintenance</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Keeping your website secure, updated, and performing at its best always.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ Security Updates</li>
                            <li className="flex items-center gap-2">✓ Performance Optimization</li>
                            <li className="flex items-center gap-2">✓ Content Updates</li>
                        </ul>
                    </div>

                    {/* 6. UI/UX Design */}
                    <div className="service-hover-card bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 cursor-default shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 font-bold">✨</div>
                        <h3 className="font-bold text-2xl mb-3 text-white">UI/UX Design</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">User-friendly interfaces and engaging experiences for all platforms.</p>
                        <ul className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
                            <li className="flex items-center gap-2">✓ User Research</li>
                            <li className="flex items-center gap-2">✓ Wireframing</li>
                            <li className="flex items-center gap-2">✓ Interactive Prototypes</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Pricing Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest uppercase text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/25">
            Flexible Investment
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-white">
            Choose Your Plan
        </h2>
        <p className="text-gray-400 text-base md:text-lg">Select the right package that fits your business scale and goals.</p>
    </div>

    {/* Pricing Cards Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Starter Plan */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:-translate-y-2 transition-all duration-500 shadow-lg">
            <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                <p className="text-gray-400 text-sm mb-6">Best for small businesses getting started online.</p>
                <div className="text-4xl font-extrabold text-primary mb-6">$199</div>
                <ul className="space-y-4 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                    <li className="flex items-center gap-3">✅ Basic Website Design</li>
                    <li className="flex items-center gap-3">✅ Responsive Layout</li>
                    <li className="flex items-center gap-3">✅ SEO Basic Setup</li>
                </ul>
            </div>
            <Link href="/contact" className="w-full bg-white/10 hover:bg-[#D4AF37] hover:text-black font-semibold py-3 rounded-xl text-center transition-all duration-300 block">
                Select Plan
            </Link>
        </div>

        {/* Professional Plan (Most Popular) */}
        <div className="bg-neutral-900 border-2 border-primary rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-primary/10 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:-translate-y-6 transition-all duration-500 transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Most Popular
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                <p className="text-gray-400 text-sm mb-6">Ideal for growing brands looking for advanced solutions.</p>
                <div className="text-4xl font-extrabold text-primary mb-6">$499</div>
                <ul className="space-y-4 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                    <li className="flex items-center gap-3">✅ Premium UI/UX Design</li>
                    <li className="flex items-center gap-3">✅ E-commerce Ready</li>
                    <li className="flex items-center gap-3">✅ Advanced SEO & Marketing</li>
                </ul>
            </div>
            <Link href="/contact" className="w-full bg-primary text-black hover:bg-primary/90 font-bold py-3 rounded-xl text-center transition-all duration-300 block shadow-lg shadow-primary/20">
                Get Started
            </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:-translate-y-2 transition-all duration-500 shadow-lg">
            <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                <p className="text-gray-400 text-sm mb-6">Custom-tailored solutions for large-scale operations.</p>
                <div className="text-4xl font-extrabold text-primary mb-6">Custom</div>
                <ul className="space-y-4 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                    <li className="flex items-center gap-3">✅ Full Custom Solution</li>
                    <li className="flex items-center gap-3">✅ Dedicated Support</li>
                    <li className="flex items-center gap-3">✅ Unlimited Revisions</li>
                </ul>
            </div>
            <Link href="/contact" className="w-full bg-white/10 hover:bg-[#D4AF37] hover:text-black font-semibold py-3 rounded-xl text-center transition-all duration-300 block">
                Talk to Us
            </Link>
        </div>

    </div>
</section>
        </main>
    );
}