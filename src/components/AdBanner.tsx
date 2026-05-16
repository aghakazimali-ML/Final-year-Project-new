import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';

interface AdBannerProps {
  title: string;
  subtitle: string;
  label?: string;
  img: string;
  phone?: string;
  email?: string;
  ctaText?: string;
  type?: 'primary' | 'gold';
}

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  subtitle,
  label = 'SPONSORED',
  img,
  phone,
  email,
  ctaText = 'Contact Now',
  type = 'gold'
}) => {
  return (
    <div className={`bg-[var(--ad-bg)] border border-[var(--ad-border)] rounded-2xl p-[18px_22px] flex flex-wrap items-center justify-between gap-[18px] my-6 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:height-[3px] ${type === 'gold' ? 'before:bg-linear-to-r(var(--gold),var(--orange))' : 'before:bg-linear-to-r(var(--accent),var(--accent2))'}`}>
      <div className="flex items-center gap-[13px] flex-1 min-w-[200px]">
        <img src={img} className="w-[76px] h-[76px] rounded-[13px] object-cover shrink-0" alt={title} />
        <div>
          <div className={`text-[10px] font-bold font-mono tracking-[2px] mb-0.75 ${type === 'gold' ? 'text-[var(--gold)]' : 'text-[var(--accent)]'}`}>
            {label}
          </div>
          <div className="text-base font-bold mb-0.75">{title}</div>
          <div className="text-[13px] text-[var(--text2)]">{subtitle}</div>
        </div>
      </div>
      
      <div className="flex gap-2">
        {phone && (
          <a href={`tel:${phone}`} className="p-[10px_20px] bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white rounded-[10px] text-[13.5px] font-bold leading-none shrink-0 transition-all hover:-translate-y-0.5">
            <Phone size={14} className="inline mr-1" /> {phone}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="p-[10px_20px] border border-[var(--border2)] text-[var(--text2)] rounded-[10px] text-[13.5px] font-bold leading-none shrink-0 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            <Mail size={14} className="inline mr-1" /> Email
          </a>
        )}
        {!phone && !email && (
          <button className={`p-[10px_20px] text-white rounded-[10px] text-[13.5px] font-bold shrink-0 transition-all hover:-translate-y-0.5 ${type === 'gold' ? 'bg-linear-to-br(var(--gold),var(--orange))' : 'bg-linear-to-br(var(--accent),var(--accent2))'}`}>
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default AdBanner;
