import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-16 text-center bg-gradient-to-b from-primary/10 to-transparent">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
                    Empowering Your <span className="text-primary">Digital Vision</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg px-6">
                    We are a team of creative thinkers and tech enthusiasts dedicated to scaling your business globally with precision and style.
                </p>
            </section>

            {/* About Content Section */}
            <section id="about-content" className="py-20 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative group bg-black rounded-3xl overflow-hidden border-2 border-yellow-500/40 hover:border-yellow-400 transition-all duration-700 shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/20 via-transparent to-yellow-300/10 opacity-60 group-hover:opacity-30 transition-opacity duration-700 z-10 pointer-events-none"></div>
                            <img src="/about-us.jpg" alt="Our Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
                        </div>
                    </div>

                    <div className="about-text">
                        <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-wider">
                            Who We <span className="text-primary underline decoration-4 underline-offset-8">Are</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            Founded with a passion for innovation, <strong className="text-primary">Uptotechsyl</strong> helps brands navigate the complex digital landscape. We create premium experiences that drive measurable results.
                        </p>
                        
                        {/* Stat Cards with Custom Hover */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="custom-hover-card stat-card p-6 rounded-2xl cursor-default bg-white/5 border border-white/10 shadow-lg">
                                <h3 className="text-3xl font-black text-primary transition-colors duration-300">150+</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1 font-bold transition-colors duration-300">Projects Completed</p>
                            </div>
                            
                            <div className="custom-hover-card stat-card p-6 rounded-2xl cursor-default bg-white/5 border border-white/10 shadow-lg">
                                <h3 className="text-3xl font-black text-primary transition-colors duration-300">99%</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1 font-bold transition-colors duration-300">Satisfied Clients</p>
                            </div>
                        </div>

                        {/* Feature List Items with Custom Hover */}
                        <ul className="space-y-4 mb-8">
                            <li className="custom-hover-card feature-item flex items-center cursor-default p-3 rounded-xl transition-all bg-white/5 border border-white/10">
                                <i className="bx bx-check-circle text-primary mr-3 text-2xl transition-colors duration-300"></i> 
                                <span className="text-gray-300 transition-colors duration-300 font-medium">Experienced Team</span>
                            </li>
                            <li className="custom-hover-card feature-item flex items-center cursor-default p-3 rounded-xl transition-all bg-white/5 border border-white/10">
                                <i className="bx bx-check-circle text-primary mr-3 text-2xl transition-colors duration-300"></i> 
                                <span className="text-gray-300 transition-colors duration-300 font-medium">Quality Service</span>
                            </li>
                            <li className="custom-hover-card feature-item flex items-center cursor-default p-3 rounded-xl transition-all bg-white/5 border border-white/10">
                                <i className="bx bx-check-circle text-primary mr-3 text-2xl transition-colors duration-300"></i> 
                                <span className="text-gray-300 transition-colors duration-300 font-medium">Affordable Pricing</span>
                            </li>
                            <li className="custom-hover-card feature-item flex items-center cursor-default p-3 rounded-xl transition-all bg-white/5 border border-white/10">
                                <i className="bx bx-check-circle text-primary mr-3 text-2xl transition-colors duration-300"></i> 
                                <span className="text-gray-300 transition-colors duration-300 font-medium">24/7 Support</span>
                            </li>
                            <li className="custom-hover-card feature-item flex items-center cursor-default p-3 rounded-xl transition-all bg-white/5 border border-white/10">
                                <i className="bx bx-check-circle text-primary mr-3 text-2xl transition-colors duration-300"></i> 
                                <span className="text-gray-300 transition-colors duration-300 font-medium">Pay Only After You Are Satisfied</span>
                            </li>
                        </ul>

                        <Link href="/contact" className="inline-block bg-primary text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                            Work With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">Our Core Values</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-rocket text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">Innovation</h3>
                            <p className="text-gray-400 text-sm transition-colors">We stay ahead of global trends to provide the latest tech solutions.</p>
                        </div>

                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-target-lock text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">Quality First</h3>
                            <p className="text-gray-400 text-sm transition-colors">No compromise on code quality or premium design aesthetics.</p>
                        </div>

                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-support text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">24/7 Support</h3>
                            <p className="text-gray-400 text-sm transition-colors">Our relationship continues with dedicated support after delivery.</p>
                        </div>

                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-shield-quarter text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">Client Trust</h3>
                            <p className="text-gray-400 text-sm transition-colors">Building long-term partnerships through transparency and honesty.</p>
                        </div>

                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-line-chart text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">Scalability</h3>
                            <p className="text-gray-400 text-sm transition-colors">Developing robust architectures that grow seamlessly with your business.</p>
                        </div>

                        <div className="custom-hover-card group p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-500 cursor-default shadow-xl">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20 transition-all duration-500 shadow-md">
                                <i className='bx bx-time-five text-4xl text-primary transition-colors'></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">Fast Delivery</h3>
                            <p className="text-gray-400 text-sm transition-colors">Ensuring timely execution without compromising on industry standards.</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}