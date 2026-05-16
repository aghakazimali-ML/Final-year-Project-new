import React from 'react';
import { Search, Info, Phone, Bot, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const InfoPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>How AIMS Works — Information Center</title>
        <meta name="description" content="Learn how to find vendors or list your business on AIMS Lahore's event directory." />
      </Helmet>
      <div className="bg-[var(--bg2)] px-10 py-16 text-center border-b border-[var(--border)]">
        <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">Information Center</div>
        <h1 className="font-display text-4xl md:text-[62px] font-black tracking-[-1.5px] max-w-[580px] mx-auto mb-2.5">
          How <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">AIMS Works</span>
        </h1>
        <p className="text-[15.5px] text-[var(--text2)] max-w-[480px] mx-auto leading-relaxed">
          Everything you need to know about our free AI event vendor directory in Lahore.
        </p>
      </div>

      <section className="py-18">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">For Event Seekers</div>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-9">
            Find a Vendor in <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">3 Steps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {[
              { icon: <Search size={32} />, title: '1. Search or Ask AI', desc: 'Browse the Vendors page with category filters, or chat with our AI assistant — describe your event for instant suggestions.' },
              { icon: <Info size={32} />, title: '2. Read Vendor Profiles', desc: 'Each profile shows the business name, services offered, category tags, community rating, and a clear description.' },
              { icon: <Phone size={32} />, title: '3. Contact Them Directly', desc: 'Click email or call on any vendor card. AIMS stays completely out of it — no booking system, no commission.' }
            ].map((item, i) => (
              <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                <div className="text-[var(--accent)] mb-2.75 block">{item.icon}</div>
                <h3 className="text-[15px] font-bold mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-[var(--text2)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-[11px] font-mono uppercase tracking-[3px] text-[var(--accent)] mb-3">For Vendors</div>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-9">
              Get Your Business <span className="bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Listed</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {[
                { icon: <Info size={32} />, title: 'Submit Your Details', desc: 'Go to the Advertise page and fill the free listing form with your business name and contact info.' },
                { icon: <CheckCircle size={32} />, title: 'We Review & Publish', desc: 'Our team reviews your submission and publishes your vendor profile on AIMS — usually within 24–48 hours.' },
                { icon: <Phone size={32} />, title: 'Clients Contact You', desc: 'Visitors find your profile. They see your email and phone and contact you directly — no middleman.' },
                { icon: <Bot size={32} />, title: 'AI Recommends You', desc: 'When users ask our AI chatbot for vendors in your category, your listing gets surfaced automatically.' }
              ].map((item, i) => (
                <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                  <div className="text-[var(--accent)] mb-2.75 block">{item.icon}</div>
                  <h3 className="text-[15px] font-bold mb-1.5">{item.title}</h3>
                  <p className="text-[13px] text-[var(--text2)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-linear-to-br from-[var(--accent)] to-[var(--accent2)] rounded-[22px] p-10 text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2.5 tracking-[-1px]">AIMS is 100% Free</h2>
            <p className="opacity-85 text-[15px] max-w-[400px] mx-auto mb-6">
              Consumers browse for free. Vendors get listed for free. Just honest information, connecting people with vendors.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/vendors">
                <button className="px-6 py-3 bg-white text-[var(--accent)] font-bold rounded-[10px] hover:scale-105 transition-all">Browse Vendors</button>
              </Link>
              <Link to="/advertise">
                <button className="px-6 py-3 bg-white/15 text-white border border-white/30 font-semibold rounded-[10px] hover:bg-white/20 transition-all">List My Business (Free)</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
