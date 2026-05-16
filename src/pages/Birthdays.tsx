import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Birthdays = () => {
  const categories = [
    { icon: '🧒', label: 'Kids Parties (1–12)', desc: 'Clowns, magicians, bouncy castles, themed cakes. Find entertainers and decorators for little ones.', color: 'var(--gold)' },
    { icon: '🎓', label: 'Teens & Young Adults', desc: 'DJs, photo booths, themed decor, gaming setups. Vendors who make teen parties unforgettable.', color: '#8b5cf6' },
    { icon: '🥂', label: 'Adult Celebrations', desc: 'Rooftop venues, elegant caterers, event stylists. Browse premium vendors for sophisticated events.', color: 'var(--rose)' },
    { icon: '🎖️', label: 'Milestone Birthdays', desc: 'Sweet 16, 21st, 50th — event planners and caterers experienced in milestone celebrations.', color: 'var(--green)' },
  ];

  const themes = ['🦸 Superhero', '🌊 Mermaid', '🚀 Space Explorer', '🎪 Circus', '🦄 Unicorn', '🏰 Princess', '🦖 Dinosaur', '🎮 Gaming', '🌸 Floral Garden', '🎭 Bollywood', '🌴 Tropical', '🎨 Art Studio', '🍭 Candy Land', '🐉 Dragon', '🤖 Robot'];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Birthday Party Vendors Lahore — AIMS</title>
        <meta name="description" content="Host a legendary birthday party in Lahore. Find cakes, entertainers, and party decor." />
      </Helmet>
      <div className="px-10 py-18 text-center border-b border-[var(--border)] bg-linear-to-br from-[#0f1800] to-[#1a1200] dark:from-[#0f1800] dark:to-[#1a1200] light:from-[#f5fff0] light:to-[#fffbf0]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.25 bg-[rgba(240,180,41,0.1)] border border-[rgba(240,180,41,0.3)] rounded-full text-[12.5px] text-[var(--gold)] font-mono mb-5">
          🎂 Birthday Party Directory
        </div>
        <h1 className="font-display text-4xl md:text-[62px] font-black tracking-[-1.5px] leading-[1.08] max-w-[660px] mx-auto mb-3">
          Find Vendors for a <span className="text-[var(--gold)]">Legendary</span> Birthday 🎉
        </h1>
        <p className="text-base text-[var(--text2)] max-w-[480px] mx-auto mb-6.5 leading-relaxed">
          From kids' party entertainers to upscale adult event planners in Lahore — browse real vendor profiles and contact them directly.
        </p>
        <Link to="/vendors">
          <button className="px-7 py-3 bg-linear-to-br from-[var(--gold)] to-[var(--orange)] text-white font-semibold rounded-lg hover:scale-105 transition-all">
            Browse Birthday Vendors
          </button>
        </Link>
      </div>

      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Age Groups</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-9">
            Celebrations for <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Every Age</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
            {categories.map((cat, i) => (
              <Link to="/vendors" key={i}>
                <div className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[18px] p-[26px_22px] transition-all hover:border-[var(--accent)] hover:-translate-y-1">
                  <span className="text-[34px] mb-3.5 block">{cat.icon}</span>
                  <div className="text-base font-bold mb-1.25">{cat.label}</div>
                  <div className="text-[13px] text-[var(--text2)] leading-relaxed mb-3">{cat.desc}</div>
                  <div className="text-[12.5px] font-bold" style={{ color: cat.color }}>Find {cat.label.split(' ')[0].toLowerCase()} vendors →</div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.75 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: cat.color }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg2)] border-t border-[var(--border)] py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Trending</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6">
            Popular Birthday <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Themes</span>
          </h2>
          <div className="flex gap-2.5 flex-wrap mt-6">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="px-[17px] py-[11px] bg-[var(--surface)] border border-[var(--border)] rounded-[13px] text-sm font-medium cursor-pointer transition-all hover:border-[var(--gold)] hover:bg-[rgba(240,180,41,0.08)]"
              >
                {theme}
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

export default Birthdays;
