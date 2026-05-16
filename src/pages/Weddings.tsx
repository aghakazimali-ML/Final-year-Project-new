import React from 'react';
import { Camera, Flower2, Utensils, Building2, Palmtree, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Weddings = () => {
  const categories = [
    { icon: <Camera size={34} />, label: 'Photography & Film', desc: 'Candid and portrait photographers, videographers. View portfolios and contact info.', color: 'var(--rose)', cat: 'photography' },
    { icon: <Flower2 size={34} />, label: 'Decoration & Florals', desc: 'Floral artists, stage decorators, and full venue transformation specialists.', color: '#ec4899', cat: 'decor' },
    { icon: <Utensils size={34} />, label: 'Catering & Food', desc: 'Desi, continental, and fusion caterers. View their listings and call for rates.', color: 'var(--gold)', cat: 'catering' },
    { icon: <Building2 size={34} />, label: 'Venues & Halls', desc: 'Garden venues, banquet halls, and hotel event spaces across Lahore.', color: 'var(--accent2)', cat: 'venue' },
    { icon: <Palmtree size={34} />, label: 'Bridal Makeup', desc: 'Award-winning bridal artists. Browse profiles and book directly with them.', color: 'var(--rose)', cat: 'makeup' },
    { icon: <Music2 size={34} />, label: 'Music & Entertainment', desc: 'Qawwali, live bands, DJs, and dhol players. View listings and contact directly.', color: 'var(--green)', cat: 'music' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Wedding Vendors Lahore — AIMS</title>
        <meta name="description" content="Plan your perfect wedding in Lahore. Find best photographers, makeup artists, and venues." />
      </Helmet>
      <div className="px-10 py-18 md:py-16 text-center border-b border-[var(--border)] bg-linear-to-br from-[#1a0c10] to-[#100a1a] dark:from-[#1a0c10] dark:to-[#100a1a] light:from-[#fff0f4] light:to-[#fdf5ff]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.25 bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.3)] rounded-full text-[12.5px] text-[var(--rose)] font-mono mb-5">
           💍 Wedding Vendor Directory
        </div>
        <h1 className="font-display text-4xl md:text-[62px] font-black tracking-[-1.5px] leading-[1.08] max-w-[660px] mx-auto mb-3">
          Find Your Perfect <span className="text-[var(--rose)]">Wedding</span> Vendors
        </h1>
        <p className="text-base text-[var(--text2)] max-w-[480px] mx-auto mb-6.5 leading-relaxed">
          Browse photographers, caterers, decorators, venues, and more in Lahore. View real profiles and contact vendors directly — completely free.
        </p>
        <Link to="/vendors">
          <button className="px-7 py-3 bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white font-semibold rounded-lg hover:scale-105 transition-all">
            View All Wedding Vendors
          </button>
        </Link>
      </div>

      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Browse by Category</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-9">
            Wedding Service <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Categories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {categories.map((cat, i) => (
              <Link to="/vendors" key={i}>
                <div className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[18px] p-[26px_22px] transition-all hover:border-[var(--accent)] hover:-translate-y-1">
                  <div className="mb-3.5" style={{ color: cat.color }}>{cat.icon}</div>
                  <div className="text-base font-bold mb-1.25">{cat.label}</div>
                  <div className="text-[13px] text-[var(--text2)] leading-relaxed mb-3">{cat.desc}</div>
                  <div className="text-[12.5px] font-bold" style={{ color: cat.color }}>View {cat.label.toLowerCase().split(' ')[0]} →</div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.75 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: cat.color }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg2)] border-t border-[var(--border)] py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">How It Works</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-7">
            Find Vendors in <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">3 Easy Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {[
              { icon: '🔍', title: 'Search & Filter', desc: 'Use the Vendors page to filter by category (photography, catering etc.) in Lahore.' },
              { icon: '📋', title: 'Read Their Profile', desc: 'Each vendor profile shows services, ratings from customers, and full contact details.' },
              { icon: '📞', title: 'Call or Email Directly', desc: 'Tap the email or call button on any profile. You deal directly with the vendor.' }
            ].map((step, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                <span className="text-[32px] mb-2.75 block">{step.icon}</span>
                <h3 className="text-[15px] font-bold mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-[var(--text2)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/vendors" className="px-7 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent2)] transition-colors">
              Browse All Vendors →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
