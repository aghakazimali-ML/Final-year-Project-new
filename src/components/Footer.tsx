import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--border)] p-[48px_40px_24px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 max-w-[1200px] mx-auto mb-10">
        <div className="flex flex-col gap-2.5">
          <h3 className="font-display text-xl font-black">
            AI<span className="text-[var(--accent)]">MS</span>
          </h3>
          <p className="text-[13.5px] text-[var(--text2)] leading-relaxed max-w-[250px]">
            Pakistan's free AI-powered event vendor directory, serving Lahore. Real vendors. Real contact info. No fees, ever.
          </p>
          <div className="flex gap-1.5 mt-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <button key={i} className="w-8 h-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg flex items-center justify-center text-sm cursor-pointer transition-all hover:border-[var(--accent)] hover:bg-[var(--glow)]">
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-[13px]">Events</h4>
          <Link to="/weddings" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Weddings</Link>
          <Link to="/birthdays" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Birthdays</Link>
          <Link to="/vendors" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Corporate Events</Link>
          <Link to="/vendors" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Cultural Events</Link>
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-[13px]">Directory</h4>
          <Link to="/vendors" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">All Vendors</Link>
          <Link to="/vendors" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Lahore</Link>
        </div>

        <div className="flex flex-col">
          <h4 className="font-bold text-sm mb-[13px]">Platform</h4>
          <Link to="/advertise" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">Advertise Here</Link>
          <Link to="/advertise" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">List Your Business</Link>
          <Link to="/info" className="text-[13.5px] text-[var(--text2)] mb-2 hover:text-[var(--accent)] transition-colors">How It Works</Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-[18px] border-t border-[var(--border)] flex flex-wrap justify-between items-center text-[12.5px] text-[var(--text3)] gap-2">
        <span>© 2025 AIMS — Pakistan. Free to use · No commissions · Direct contact only.</span>
        <span>Lahore, Pakistan</span>
      </div>
    </footer>
  );
};

export default Footer;
