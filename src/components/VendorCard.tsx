import React from 'react';
import { Star, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    cat: string;
    city: string;
    desc: string;
    tags: string[];
    rt: number;
    rv: number;
    em: string;
    ph: string;
    bc: string;
    badge: string;
    img: string;
  };
  compact?: boolean;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, compact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow)] hover:border-[var(--accent)] group"
    >
      {vendor.img ? (
        <img
          src={vendor.img}
          alt={vendor.name}
          className="w-full h-[155px] object-cover block group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-[155px] flex items-center justify-center text-[52px] bg-[var(--bg3)]">
          🏪
        </div>
      )}

      <div className="p-[18px]">
        <div
          className="inline-block px-2 py-0.5 rounded-[7px] text-[11px] font-bold font-mono tracking-wider mb-2.25 uppercase"
          style={{ backgroundColor: `${vendor.bc}22`, color: vendor.bc }}
        >
          {vendor.badge}
        </div>
        <h3 className="text-[17px] font-bold mb-0.5">{vendor.name}</h3>
        <p className="text-[12.5px] text-[var(--text3)] mb-2 flex items-center gap-1">
          <MapPin size={12} /> {vendor.city.charAt(0).toUpperCase() + vendor.city.slice(1)}, Pakistan
        </p>
        <p className="text-[13px] text-[var(--text2)] leading-relaxed mb-2.5">
          {compact ? vendor.desc.substring(0, 88) + '...' : vendor.desc}
        </p>

        {!compact && (
          <div className="flex gap-1.5 flex-wrap mb-[11px]">
            {vendor.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.75 bg-[var(--bg2)] rounded-[6px] text-[11.5px] text-[var(--text2)]">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex text-[var(--gold)] text-[13px]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(vendor.rt) ? "currentColor" : "none"}
                className={i < Math.floor(vendor.rt) ? "" : "text-[var(--text3)]"}
              />
            ))}
          </div>
          <span className="text-[13px] font-bold">{vendor.rt}</span>
          <span className="text-[12px] text-[var(--text3)]">({vendor.rv} reviews)</span>
        </div>

        <div className="flex gap-2">
          <a
            href={`mailto:${vendor.em}`}
            className="flex-1 p-[9px] rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.25 bg-[var(--glow)] text-[var(--accent)] border border-[rgba(79,142,247,0.2)] hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            <Mail size={14} /> Email
          </a>
          <a
            href={`tel:${vendor.ph}`}
            className="flex-1 p-[9px] rounded-lg text-[13px] font-semibold flex items-center justify-center gap-1.25 bg-[rgba(16,185,129,0.1)] text-[var(--green)] border border-[rgba(16,185,129,0.2)] hover:bg-[var(--green)] hover:text-white transition-all"
          >
            <Phone size={14} /> Call
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VendorCard;
