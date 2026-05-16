import React, { useState } from 'react';
import { Phone, Mail, CheckCircle, Info, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AdBanner from '../components/AdBanner';

const Advertise = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'Photography & Videography',
    interest: 'Basic Free Listing',
    phone: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>List Your Business — AIMS Lahore</title>
        <meta name="description" content="Reach thousands of event planners in Lahore. List your vendor business for free on AIMS." />
      </Helmet>
      <div className="bg-linear-to-br from-[var(--bg2)] to-[var(--bg3)] px-10 py-16 text-center border-b border-[var(--border)]">
        <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Advertise on AIMS</div>
        <h1 className="font-display text-4xl md:text-[62px] font-black tracking-[-1.5px] max-w-[660px] mx-auto mb-2.5">
          Reach Thousands of Event <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Planners Daily</span>
        </h1>
        <p className="text-[15.5px] text-[var(--text2)] leading-relaxed max-w-[500px] mx-auto mb-7.5">
          Place your ad on AIMS and get seen by thousands of people actively looking for event vendors in Lahore.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[900px] mx-auto">
          {[
            { val: '50K+', lbl: 'Monthly Visitors' },
            { val: 'Lahore', lbl: 'Active City' },
            { val: '500+', lbl: 'Vendor Listings' },
            { val: 'Free', lbl: 'Basic Listing' }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-[18px] text-center">
              <div className="font-mono text-[26px] font-bold text-[var(--accent)] leading-none">{item.val}</div>
              <div className="text-[12px] text-[var(--text3)] mt-1">{item.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Sponsored Listings</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-2.5">
            Live <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Advertisements</span>
          </h2>
          <p className="text-base text-[var(--text2)] mb-8">These are real sponsored placements on AIMS. Your business could appear right here.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5">
            <div className="bg-[var(--surface)] border border-[var(--ad-border)] rounded-[20px] overflow-hidden shadow-[var(--card-shadow)] relative before:content-['SPONSORED'] before:absolute before:top-3 before:right-3 before:bg-[var(--gold)] before:text-black before:text-[9px] before:font-bold before:px-2 before:py-0.75 before:rounded-[6px] before:font-mono before:tracking-[1px] before:z-10">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&h=210&fit=crop" className="w-full h-[210px] object-cover" alt="" />
              <div className="p-5">
                <span className="block text-[10px] font-bold text-[var(--gold)] font-mono tracking-[2px] mb-1.25 uppercase">SPONSORED · DECORATION</span>
                <div className="text-xl font-extrabold mb-0.75">Royal Events Lahore</div>
                <div className="text-[13px] text-[var(--text2)] italic mb-3">"Where every detail becomes a masterpiece"</div>
                <p className="text-[13.5px] text-[var(--text2)] leading-relaxed mb-3.5">Lahore's most sought-after wedding decoration company. Luxury stage setups, floral walls, and complete venue transformation. 10+ years experience.</p>
                <div className="flex gap-3 flex-wrap mb-4">
                  <div className="text-[12.5px] text-[var(--text3)] flex items-center gap-1"><MapPin size={12} /> Lahore, Punjab</div>
                  <div className="text-[12.5px] text-[var(--text3)] flex items-center gap-1">⭐ 4.9 (340 reviews)</div>
                </div>
                <div className="flex gap-2.25">
                  <a href="tel:+923001234567" className="flex-1 p-[11px] rounded-lg text-sm font-bold bg-linear-to-br from-[var(--gold)] to-[var(--orange)] text-white text-center">📞 0300-1234567</a>
                  <a href="mailto:info@royaleventslahore.com" className="flex-1 p-[11px] rounded-lg text-sm font-bold bg-[var(--glow)] text-[var(--accent)] border border-[var(--border2)] text-center">✉️ Email</a>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface)] border border-[var(--border2)] rounded-[20px] overflow-hidden shadow-[var(--card-shadow)] relative before:content-['SPONSORED'] before:absolute before:top-3 before:right-3 before:bg-[var(--accent)] before:text-white before:text-[9px] before:font-bold before:px-2 before:py-0.75 before:rounded-[6px] before:font-mono before:tracking-[1px] before:z-10">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&h=210&fit=crop" className="w-full h-[210px] object-cover" alt="" />
              <div className="p-5">
                <span className="block text-[10px] font-bold text-[var(--accent)] font-mono tracking-[2px] mb-1.25 uppercase">SPONSORED · MUSIC</span>
                <div className="text-xl font-extrabold mb-0.75">Sain Zahoor Events</div>
                <div className="text-[13px] text-[var(--text2)] italic mb-3">"Tradition meet excellence"</div>
                <p className="text-[13.5px] text-[var(--text2)] leading-relaxed mb-3.5">Folk qawwali and live bands for Mehndi and Baraat. Making your events culturally rich and musically unforgettable in Lahore.</p>
                <div className="flex gap-3 flex-wrap mb-4">
                  <div className="text-[12.5px] text-[var(--text3)] flex items-center gap-1"><MapPin size={12} /> Lahore, Punjab</div>
                  <div className="text-[12.5px] text-[var(--text3)] flex items-center gap-1">⭐ 5.0 (511 reviews)</div>
                </div>
                <div className="flex gap-2.25">
                  <a href="tel:+923001110001" className="flex-1 p-[11px] rounded-lg text-sm font-bold bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white text-center">📞 0300-1110001</a>
                  <a href="mailto:booking@sainzahoor.pk" className="flex-1 p-[11px] rounded-lg text-sm font-bold bg-[var(--glow)] text-[var(--accent)] border border-[var(--border2)] text-center">✉️ Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg2)] border-t border-[var(--border)] py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Place Your Ad</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6">
            Advertise or List Your <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Business</span>
          </h2>
          
          <div className="max-w-[740px] mx-auto mt-10">
            {submitted ? (
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-8 text-center">
                <CheckCircle size={56} className="text-[var(--green)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Inquiry Submitted!</h3>
                <p className="text-[var(--text2)] mb-0">Our team will contact you within 24 hours at <strong>{formData.email}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-1.25">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Business Name *</label>
                    <input 
                      required 
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none" 
                      placeholder="e.g. Royal Decor Lahore"
                      value={formData.businessName}
                      onChange={e => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.25">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Service Category *</label>
                    <select 
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none"
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                      <option>Photography & Videography</option>
                      <option>Catering</option>
                      <option>Decoration & Florals</option>
                      <option>Venue / Banquet Hall</option>
                      <option>Bridal Makeup & Hair</option>
                      <option>Music & Entertainment</option>
                      <option>Cakes & Bakery</option>
                      <option>Transport</option>
                      <option>Full Event Planning</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.25">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Interested In</label>
                    <select 
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none"
                      value={formData.interest}
                      onChange={e => setFormData({...formData, interest: e.target.value})}
                    >
                      <option>Basic Free Listing</option>
                      <option>Sponsored Banner (Homepage)</option>
                      <option>Featured Ad Card</option>
                      <option>All-Pages Banner Strip</option>
                      <option>Not Sure — Advise Me</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.25">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Contact Phone *</label>
                    <input 
                      required
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none" 
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.25 md:col-span-2">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Business Email *</label>
                    <input 
                      required
                      type="email"
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none" 
                      placeholder="business@yourdomain.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.25 md:col-span-2">
                    <label className="text-[12.5px] text-[var(--text3)] uppercase tracking-wider font-bold">Description</label>
                    <textarea 
                      rows={3}
                      className="p-[11px_13px] bg-[var(--bg2)] border border-[var(--border)] rounded-lg text-[var(--text)] text-sm focus:border-[var(--accent)] outline-none resize-none" 
                      placeholder="Tell us briefly about your services..."
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-lg p-3.5 flex gap-2.5">
                      <Info size={18} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                      <p className="text-[13px] text-[var(--text2)] leading-relaxed">
                        Basic vendor listings on AIMS are <strong>completely free</strong>. Sponsored placements (banners, featured ad cards) are paid — our team will send you options and pricing after reviewing your submission.
                      </p>
                    </div>
                  </div>
                  <button type="submit" className="md:col-span-2 py-3.25 bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] text-white text-[15px] font-bold rounded-xl hover:-translate-y-0.5 transition-all shadow-[0_6px_20px_rgba(79,142,247,0.3)]">
                    Submit Inquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
