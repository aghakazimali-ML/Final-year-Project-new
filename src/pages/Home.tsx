import React from 'react';
import { motion } from 'motion/react';
import { Bot, MapPin, CheckCircle, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { vendors } from '../data/vendors';
import VendorCard from '../components/VendorCard';
import AdBanner from '../components/AdBanner';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Home = () => {
  const featuredVendors = vendors.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AIMS — Explore Event Vendors in Lahore</title>
        <meta name="description" content="Pakistan's free AI-powered event vendor directory for Lahore. Find photographers, caterers, and venues." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-66px)] flex items-center overflow-hidden px-5 py-15 md:px-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-50" />
          <div className="absolute top-[-120px] right-[-100px] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(79,142,247,0.12)_0%,transparent_70%)] rounded-full" />
          <div className="absolute bottom-[-160px] left-[-80px] w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] rounded-full" />
        </div>
        
        <div className="relative z-1 max-w-[680px] mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.25 bg-[var(--surface)] border border-[var(--border2)] rounded-full text-[12.5px] text-[var(--accent)] font-mono mb-5">
            <span className="w-1.5 h-1.5 bg-[var(--green)] rounded-full animate-pulse" /> Pakistan's AI Event Directory
          </div>
          <h1 className="font-display text-[42px] md:text-[64px] lg:text-[76px] font-black leading-[1.04] tracking-[-2.5px] mb-4.5">
            Find Trusted<br />
            <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Event Vendors</span><br />
            <em className="italic text-[var(--text3)] text-[0.68em]">in Lahore only</em>
          </h1>
          <p className="text-[17px] leading-relaxed text-[var(--text2)] max-w-[520px] mb-8.5">
            AIMS is a free AI-powered information hub. Browse real, verified event vendors in Lahore — view their contact details and reach out directly. No fees, no middlemen.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link to="/vendors">
              <button className="px-6.5 py-3.25 rounded-xl text-base font-semibold bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white shadow-[0_6px_20px_rgba(79,142,247,0.3)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(79,142,247,0.42)] transition-all">
                Browse All Vendors →
              </button>
            </Link>
            <button className="px-6.5 py-3.25 rounded-xl text-base font-semibold bg-[var(--surface)] border border-[var(--border2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
               Ask AI Assistant
            </button>
          </div>
          <div className="flex gap-9 flex-wrap">
            {[
              { val: '500+', lbl: 'Vendor Listings' },
              { val: 'Lahore', lbl: 'Active City' },
              { val: '100%', lbl: 'Free to Browse' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-display text-[34px] font-black leading-none">
                  {stat.val}<span className="text-[var(--accent)]">{i === 0 ? '+' : ''}</span>
                </div>
                <div className="text-[12px] text-[var(--text3)] mt-0.75 uppercase tracking-wide">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[440px] h-[600px] z-1">
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full bg-[var(--surface)] border border-[var(--border2)] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative group"
          >
             <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]" 
                  alt="Events in Lahore" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
             </div>
             
             <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="text-[12px] font-mono tracking-[0.3em] uppercase mb-2 text-[var(--accent)]">Lahore Events</div>
                <h3 className="font-display text-[42px] font-black leading-[0.9] tracking-tighter mb-4">
                  The Future <br />
                  Of Hosting
                </h3>
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" />
                        </div>
                      ))}
                   </div>
                   <div className="text-[11px] font-mono text-white/60">
                      500+ Verified <br /> Vendors Active
                   </div>
                </div>
             </div>

             {/* Floating badge */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-8 right-8 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md"
             >
                <div className="text-[10px] font-bold tracking-widest text-white/40">AIMS</div>
             </motion.div>
          </motion.div>

          {/* Secondary smaller overlay card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-12 bg-white text-black p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100"
          >
             <div className="w-12 h-12 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-xl">
                ✓
             </div>
             <div>
                <div className="text-[13px] font-bold">100% Free Access</div>
                <div className="text-[11px] opacity-60">No platform commissions</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-[var(--bg2)] border-t border-[var(--border)] py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Featured Vendors</div>
          <h2 className="font-display text-[32px] md:text-[48px] font-black tracking-[-1.5px] leading-[1.08] mb-3.5">
            Top-Rated Vendors <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">In Lahore</span>
          </h2>
          <p className="text-base leading-relaxed text-[var(--text2)] max-w-[540px] mb-6">
            Real vendors, real contact details. Browse Lahore's best and reach out directly.
          </p>

          <AdBanner 
            title="Royal Events Lahore"
            subtitle="Pakistan's premier wedding decoration company. 10+ years of luxury setups. Serving Lahore."
            img="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&q=80"
          />

          <div className="flex gap-2 mb-7 flex-wrap">
            <button className="px-5 py-2 rounded-full text-[13.5px] font-semibold border border-[var(--accent)] bg-[var(--accent)] text-white">🏙️ Lahore</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} compact />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/vendors">
              <button className="px-[30px] py-[13px] rounded-lg text-base font-semibold bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white shadow-[0_3px_12px_rgba(79,142,247,0.28)] hover:-translate-y-0.5 transition-all">
                View All Vendors →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Discovery Banner */}
      <section className="px-5 md:px-10 py-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1280px] mx-auto overflow-hidden rounded-[32px] bg-[var(--bg2)] border border-[var(--border)] relative group min-h-[520px] flex items-center"
        >
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069" 
               className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[4000ms]" 
               alt="Lahore Event Atmosphere" 
             />
             <div className="absolute inset-0 bg-linear-to-r from-[var(--bg)] via-[var(--bg)]/90 to-transparent" />
          </div>
          
          <div className="relative z-1 p-10 md:p-16 lg:p-24 max-w-[760px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.25 bg-[var(--surface)] border border-[var(--border2)] rounded-full text-[11px] text-[var(--gold)] font-mono mb-6 uppercase tracking-widest"
            >
              ✨ Premium Experience
            </motion.div>
            <h2 className="font-display text-[42px] md:text-[68px] font-black leading-[0.95] tracking-[-3.5px] mb-8">
              Discover Elegant <br/>
              <span className="text-[var(--accent)] underline decoration-[var(--accent2)] decoration-wavy underline-offset-8">Events In Lahore</span>
            </h2>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[var(--text2)] mb-10 max-w-[500px]">
              Access our curated collection of verified professionals. No commission fees. No hidden costs. Just pure, direct connection for your next celebration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vendors">
                <button className="px-9 py-4.5 bg-white dark:bg-[var(--accent)] text-black dark:text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                  Explore Directory
                </button>
              </Link>
              <Link to="/info">
                <button className="px-9 py-4.5 bg-[var(--surface)] border border-[var(--border2)] text-[var(--text)] rounded-2xl font-bold hover:bg-[var(--bg3)] transition-all">
                  How it Works
                </button>
              </Link>
            </div>
          </div>
          
          {/* Floating UI Elements with warm images */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center overflow-hidden pointer-events-none pr-12">
             <div className="relative w-full aspect-square max-w-[440px]">
                <motion.div 
                   animate={{ y: [0, -20, 0], rotate: [-10, -5, -10] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[5%] right-[15%] w-[220px] aspect-[4/5] bg-[var(--surface)] border border-[var(--border)] rounded-3xl shadow-2xl p-4 z-10 overflow-hidden"
                >
                   <div className="w-full h-3/4 bg-[var(--bg2)] rounded-2xl mb-4 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80" className="w-full h-full object-cover" alt="" />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] text-white">⭐ 4.9</div>
                   </div>
                   <div className="w-full h-2 bg-[var(--border2)] rounded-full mb-2" />
                   <div className="w-1/2 h-2 bg-[var(--border)] rounded-full" />
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 20, 0], rotate: [5, 10, 5] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-[5%] left-[5%] w-[240px] aspect-[4/5] bg-[var(--surface)] border border-[var(--border)] rounded-3xl shadow-2xl p-4 z-20 overflow-hidden"
                >
                   <div className="w-full h-3/4 bg-[var(--bg2)] rounded-2xl mb-4 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80" className="w-full h-full object-cover" alt="" />
                      <div className="absolute bottom-3 left-3 px-2 py-1 bg-[var(--accent)] text-white rounded-lg text-[10px] font-bold">Wedding</div>
                   </div>
                   <div className="w-full h-2 bg-[var(--accent)] opacity-20 rounded-full mb-2" />
                   <div className="w-3/4 h-2 bg-[var(--border)] rounded-full" />
                </motion.div>

                {/* Sparkling particles */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[var(--gold)] rounded-full blur-sm animate-pulse opacity-30" />
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[var(--accent)] rounded-full blur-xs opacity-40" />
             </div>
          </div>
        </motion.div>
      </section>

      {/* Occasion Types */}
      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Browse by Occasion</div>
          <h2 className="font-display text-[32px] md:text-[48px] font-black tracking-[-1.5px] leading-[1.08] mb-9">
            What Are You <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Planning?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { icon: '💍', label: 'Weddings', desc: 'Photographers, decorators, caterers, makeup artists, and venues.', color: 'var(--rose)', path: '/weddings' },
              { icon: '🎂', label: 'Birthdays', desc: 'From kids\' entertainers to upscale adult event planners.', color: 'var(--gold)', path: '/birthdays' },
              { icon: '🎪', label: 'Corporate', desc: 'AV companies, conference organizers, and corporate venue specialists.', color: 'var(--accent)', path: '/vendors' },
              { icon: '🕌', label: 'Cultural', desc: 'Mehndi, Valima, Eid celebrations — vendors who understand traditions.', color: 'var(--green)', path: '/vendors' }
            ].map((cat, i) => (
              <Link to={cat.path} key={i}>
                <div className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[18px] p-[26px_22px] overflow-hidden transition-all hover:border-[var(--accent)] hover:-translate-y-1">
                  <span className="text-[34px] mb-3.5 block">{cat.icon}</span>
                  <div className="text-base font-bold mb-1.25">{cat.label}</div>
                  <div className="text-[13px] text-[var(--text2)] leading-relaxed mb-3">{cat.desc}</div>
                  <div className="text-[12.5px] font-bold" style={{ color: cat.color }}>Browse {cat.label.toLowerCase()} vendors →</div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: cat.color }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Why AIMS */}
      <section className="bg-[var(--bg2)] border-t border-[var(--border)] py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Why AIMS</div>
              <h2 className="font-display text-[32px] md:text-[48px] font-black tracking-[-1.5px] leading-[1.08] mb-3.5">
                A Free Directory, <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Nothing More</span>
              </h2>
              <p className="text-base leading-relaxed text-[var(--text2)] max-w-[540px]">
                We don't book events. We don't charge fees. We connect you with real vendors in Lahore by giving you accurate, AI-organised information. You do the rest.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: '🤖', title: 'AI Search Assistant', desc: 'Describe what you need in plain language. Our AI instantly surfaces matching vendor profiles.' },
                { icon: '📞', title: 'Direct Contact Only', desc: 'Every profile shows real email and phone numbers. You reach vendors directly — zero platform involvement.' },
                { icon: '✅', title: 'Manually Verified', desc: 'Each listing is reviewed before publishing. Inactive or fake entries are removed regularly.' }
              ].map((item, i) => (
                <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all hover:border-[var(--accent)] hover:-translate-y-1">
                  <span className="text-[32px] mb-2.75 block">{item.icon}</span>
                  <h3 className="text-[15px] font-bold mb-1.5">{item.title}</h3>
                  <p className="text-[13px] text-[var(--text2)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Reviews</div>
          <h2 className="font-display text-[32px] md:text-[48px] font-black tracking-[-1.5px] leading-[1.08] mb-9">
            What People <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">In Lahore Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { stars: 5, txt: '"Found our wedding photographer on AIMS in under 10 minutes. Contacted him directly, discussed pricing ourselves, and booked. Totally free and zero hassle!"', name: 'Sara & Usman', role: 'Wedding · Lahore', icon: '👰', grad: 'from-[#f43f5e] to-[#f97316]' },
              { stars: 5, txt: '"The AI assistant suggested 3 caterers in Lahore matching my event type. Called them all, compared, and picked the best one. This is how directories should work."', name: 'Kamran Ahmed', role: 'Birthday · Lahore', icon: '👨', grad: 'from-[#f0b429] to-[#f97316]' },
              { stars: 5, txt: '"As a decorator listed on AIMS, inquiry calls tripled. Clients see my profile in Lahore and call me directly. The best free visibility for event businesses."', name: 'Nadia Decor Studio', role: 'Listed Vendor · Lahore', icon: '🎨', grad: 'from-[#4f8ef7] to-[#7c3aed]' }
            ].map((t, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-[18px] p-6">
                <div className="text-[var(--gold)] text-sm mb-2.75 flex">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-[var(--text2)] leading-relaxed mb-4 italic">{t.txt}</p>
                <div className="flex items-center gap-2.5">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-linear-to-br", t.grad)}>
                    {t.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--text3)] uppercase tracking-wide">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
