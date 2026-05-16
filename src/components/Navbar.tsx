import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobOpen, setIsMobOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: '💍 Weddings', path: '/weddings' },
    { name: '🎂 Birthdays', path: '/birthdays' },
    { name: '🏪 Vendors', path: '/vendors' },
    { name: 'ℹ️ Info', path: '/info' },
    { name: '📢 Advertise', path: '/advertise' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-[1000] bg-[var(--nav-bg)] backdrop-blur-3xl border-b border-[var(--border)] h-[66px] px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-[38px] h-[38px] rounded-[10px] bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center font-mono text-[13px] font-bold text-white shadow-[0_0_16px_var(--glow)]">
          AI
        </div>
        <span className="font-display text-[21px] font-black tracking-[-0.5px]">
          AI<span className="text-[var(--accent)]">MS</span>
        </span>
      </Link>

      <ul className="hidden md:flex gap-0.5 list-none">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={cn(
                "px-[13px] py-[7px] rounded-lg text-[13.5px] font-medium transition-all duration-200",
                isActive(link.path)
                  ? "text-[var(--accent)] bg-[var(--surface)]"
                  : "text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-2.5 items-center">
        <button
          onClick={toggleTheme}
          className="w-[42px] h-[22px] bg-[var(--surface2)] border border-[var(--border2)] rounded-[11px] cursor-pointer relative transition-all duration-300"
          title="Toggle theme"
        >
          <div
            className={cn(
              "absolute top-[3px] left-[3px] w-[14px] h-[14px] rounded-full bg-[var(--accent)] transition-transform duration-300",
              theme === 'light' && "translate-x-[20px]"
            )}
          />
        </button>
        <Link to="/vendors" className="hidden sm:block">
          <button className="px-[18px] py-2 rounded-lg text-[13.5px] font-semibold border border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
            Find Vendors
          </button>
        </Link>
        <Link to="/advertise" className="hidden sm:block">
          <button className="px-[18px] py-2 rounded-lg text-[13.5px] font-semibold bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white shadow-[0_3px_12px_rgba(79,142,247,0.28)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(79,142,247,0.38)] transition-all">
            List Business
          </button>
        </Link>
        <button
          className="md:hidden text-[var(--text)] text-[22px] cursor-pointer"
          onClick={() => setIsMobOpen(!isMobOpen)}
        >
          {isMobOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[66px] left-0 right-0 z-[999] bg-[var(--nav-bg)] backdrop-blur-3xl border-b border-[var(--border)] p-[14px_18px] flex flex-col gap-[5px] transition-all duration-300 transform md:hidden",
          isMobOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="p-[11px_14px] rounded-[10px] text-[var(--text2)] text-[15px] font-medium hover:bg-[var(--surface)] hover:text-[var(--text)]"
            onClick={() => setIsMobOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
