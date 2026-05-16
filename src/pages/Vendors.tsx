import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { vendors } from '../data/vendors';
import VendorCard from '../components/VendorCard';

const Vendors = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  const categories = [
    { label: 'All', value: 'all', icon: '' },
    { label: 'Photography', value: 'photography', icon: '📸' },
    { label: 'Catering', value: 'catering', icon: '🍽️' },
    { label: 'Decoration', value: 'decor', icon: '💐' },
    { label: 'Venues', value: 'venue', icon: '🏛️' },
    { label: 'Makeup', value: 'makeup', icon: '💄' },
    { label: 'Music', value: 'music', icon: '🎵' },
    { label: 'Cakes', value: 'cake', icon: '🎂' },
    { label: 'Transport', value: 'transport', icon: '🚗' },
  ];

  const filteredVendors = useMemo(() => {
    const q = debouncedSearch.toLowerCase();
    return vendors.filter(v => {
      const matchCat = activeCat === 'all' || v.cat === activeCat;
      const matchSearch = !q || 
        v.name.toLowerCase().includes(q) || 
        v.desc.toLowerCase().includes(q) || 
        v.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [debouncedSearch, activeCat]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Browse Vendors — AIMS Lahore</title>
        <meta name="description" content="Search through over 500+ event vendors in Lahore. Photography, catering, decor, and more." />
      </Helmet>
      <div className="bg-[var(--bg2)] px-10 py-14 border-b border-[var(--border)] text-center">
        <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Vendor Directory</div>
        <h1 className="font-display text-4xl md:text-5xl font-black mb-1.5">
          Real Vendors. <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Real Contact Details.</span>
        </h1>
        <p className="text-[15.5px] text-[var(--text2)] max-w-[460px] mx-auto mt-1.5">
          Browse verified event vendors in Lahore. Call or email them directly — 100% free.
        </p>
        <div className="max-w-[560px] mx-auto relative mt-6">
          <Search size={18} className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[var(--text3)]" />
          <input
            type="text"
            placeholder="Search by name or service..."
            className="w-full pl-[46px] pr-4 py-3.5 bg-[var(--surface)] border border-[var(--border2)] rounded-[13px] text-base text-[var(--text)] font-sans outline-none focus:border-[var(--accent)] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-[var(--bg2)] px-5 md:px-10 border-b border-[var(--border)] py-3.5 overflow-x-auto flex items-center gap-1.75 whitespace-nowrap scrollbar-hide">
        <span className="text-[12px] text-[var(--text3)] font-bold mr-1 shrink-0 uppercase tracking-widest">CATEGORY:</span>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCat(cat.value)}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium border cursor-pointer transition-all shrink-0 ${
              activeCat === cat.value
                ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
        <div className="h-6 w-px bg-[var(--border)] mx-2 shrink-0 md:block hidden" />
        <span className="text-[12px] text-[var(--text3)] font-bold mr-1 shrink-0 uppercase tracking-widest md:inline hidden">CITY:</span>
        <button className="px-3.5 py-1.5 rounded-full text-[13px] font-medium border border-[var(--border)] text-[var(--text2)] shrink-0 md:inline hidden">🌍 All</button>
        <button className="px-3.5 py-1.5 rounded-full text-[13px] font-medium border bg-[var(--accent)] border-[var(--accent)] text-white shrink-0 md:inline hidden ml-1.5">🏙️ Lahore</button>
      </div>

      <div className="p-7 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5">
          {filteredVendors.length > 0 ? (
            filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))
          ) : (
            <div className="col-span-full py-18 px-5 text-center text-[var(--text3)]">
              <div className="text-[42px] mb-2.75">🔍</div>
              <div className="text-base font-semibold text-[var(--text2)] mb-1.75">No vendors found</div>
              <div className="text-[13.5px]">Try different search terms or clear filters</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
