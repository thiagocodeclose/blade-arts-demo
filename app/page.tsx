// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, CheckCircle, ArrowRight, ChevronDown, Shield
} from 'lucide-react';
import { studioInfo, stats, disciplines, instructors, testimonials, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Disciplines', 'Instructors', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F0F0F]/96 backdrop-blur border-b border-[#2a2820]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Shield size={20} className="text-bl-gold" />
          <div>
            <span className="font-heading text-lg tracking-[0.2em] text-white uppercase leading-none block">Blade Academy</span>
            <span className="text-bl-muted text-[10px] uppercase tracking-[0.3em] font-body">Fencing & Weapons Arts · Seattle</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-sm font-body font-bold text-bl-muted hover:text-bl-text transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-bl-gold hover:bg-bl-gold/10 text-bl-gold font-body font-bold text-xs uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#171717] border-t border-[#2a2820] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-body font-bold text-bl-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="border border-bl-gold text-bl-gold font-body font-bold text-sm uppercase tracking-widest px-5 py-3 text-center">Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=1600&q=85"
          alt="Fencer in silhouette"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/98 via-[#0F0F0F]/80 to-[#0F0F0F]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/40" />
        {/* Gold tint overlay */}
        <div className="absolute inset-0 opacity-10" style={{ background: 'rgba(184, 134, 11, 0.3)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-bl-gold/40 px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-bl-gold rounded-full" />
            <span className="text-bl-gold font-body font-bold text-xs uppercase tracking-[0.3em]">Seattle's Premier Weapons Arts Academy</span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading text-6xl sm:text-8xl lg:text-9xl text-white leading-none mb-6">
            MASTER<br />
            THE ART<br />
            <span className="text-bl-gold">OF STEEL</span>
          </h1>

          <p className="text-bl-muted text-lg mb-3 font-body font-bold uppercase tracking-widest">Foil · Sabre · Épée · Kendo · Iaido</p>
          <p className="text-[#888] leading-relaxed mb-8 max-w-lg font-body">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-bl-gold hover:bg-[#9a7009] text-white font-body font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Free Trial Class <ArrowRight size={15} />
            </a>
            <a href="#disciplines" className="inline-flex items-center gap-2 border border-[#333] hover:border-bl-gold text-bl-text font-body font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Disciplines
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-[#2a2820]">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-heading text-4xl text-white">{s.value}</div>
                <div className="text-bl-muted text-xs uppercase tracking-widest mt-0.5 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Disciplines ─── */
function Disciplines() {
  const originFlags = {
    'French / Italian': '🤺',
    'Hungarian / Eastern European': '⚔️',
    'French Dueling': '🏅',
    'Japanese': '⛩️',
  };
  return (
    <section id="disciplines" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-bl-gold" />
            <p className="text-bl-gold font-body font-bold text-sm uppercase tracking-[0.3em]">Five Paths of Mastery</p>
            <div className="h-px w-8 bg-bl-gold" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl text-white">DISCIPLINES</h2>
          <p className="text-bl-muted mt-3 max-w-xl mx-auto font-body">From Olympic fencing to Japanese sword arts — each discipline a complete martial tradition.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplines.map((d, i) => (
            <div key={d.name}
              className={`reveal bg-[#171717] border border-[#2a2820] hover:border-bl-gold/40 p-7 transition-colors ${i === 0 ? 'lg:col-span-1' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{originFlags[d.origin] || '⚔️'}</span>
                <span className="text-bl-gold font-body font-bold text-xs uppercase tracking-wider border border-bl-gold/30 px-2 py-0.5">{d.level}</span>
              </div>
              <h3 className="font-heading text-2xl text-white mb-1">{d.name}</h3>
              <p className="text-bl-gold/70 font-body text-xs uppercase tracking-widest mb-3">{d.origin}</p>
              <p className="text-bl-muted text-sm leading-relaxed font-body">{d.description}</p>
              <div className="mt-5 pt-4 border-t border-[#2a2820]">
                <a href="#contact" className="text-bl-gold text-sm font-body font-bold uppercase tracking-wide hover:text-yellow-300 transition-colors flex items-center gap-1.5">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Instructors ─── */
function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-bl-gold" />
            <p className="text-bl-gold font-body font-bold text-sm uppercase tracking-[0.3em]">The Masters</p>
            <div className="h-px w-8 bg-bl-gold" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl text-white">INSTRUCTORS</h2>
          <p className="text-bl-muted mt-3 max-w-lg mx-auto font-body">World-class masters — each certified at the highest level in their tradition.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((c, i) => (
            <div key={c.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-px w-8 bg-bl-gold mb-2" />
                </div>
              </div>
              <h3 className="font-heading text-xl text-white mb-1">{c.name}</h3>
              <p className="text-bl-gold font-body text-xs uppercase tracking-wide mb-3">{c.rank}</p>
              <p className="text-bl-muted text-sm leading-relaxed font-body">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-bl-gold" />
            <p className="text-bl-gold font-body font-bold text-sm uppercase tracking-[0.3em]">Student Voices</p>
            <div className="h-px w-8 bg-bl-gold" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl text-white">TESTIMONIALS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-[#171717] border border-[#2a2820] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-bl-gold text-bl-gold" />)}
              </div>
              <p className="text-bl-text text-sm leading-relaxed mb-6 font-body">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-bl-gold flex items-center justify-center font-heading text-bl-gold">{t.name[0]}</div>
                <span className="font-heading text-lg text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-bl-gold" />
            <p className="text-bl-gold font-body font-bold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-px w-8 bg-bl-gold" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl text-white">PRICING</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative p-8 ${p.highlight ? 'border-2 border-bl-gold bg-[#1a1600]' : 'bg-[#171717] border border-[#2a2820]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bl-gold text-[#0F0F0F] font-body font-bold text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-3xl text-white mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 font-body ${p.highlight ? 'text-bl-gold/70' : 'text-bl-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-bl-gold" />
                    <span className={`text-sm font-body ${p.highlight ? 'text-bl-text' : 'text-bl-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center font-body font-bold text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-bl-gold text-[#0F0F0F] hover:bg-[#9a7009]' : 'border border-bl-gold text-bl-gold hover:bg-bl-gold/10'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const disciplines_list = ['Foil Fencing', 'Sabre Fencing', 'Épée Fencing', 'Kendo', 'Iaido'];
  return (
    <section id="contact" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-bl-gold" />
              <p className="text-bl-gold font-body font-bold text-sm uppercase tracking-[0.3em]">Begin Your Training</p>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">YOUR FREE CLASS AWAITS</h2>
            <p className="text-bl-muted leading-relaxed mb-8 max-w-md font-body">
              No experience needed. Come try any discipline, free. Our masters will guide you from the very first footwork drill.
            </p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-bl-gold flex-shrink-0" />
                  <span className="text-bl-muted text-sm font-body">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-bl-muted flex-shrink-0" />
                <span className="text-bl-muted text-sm font-body"><strong className="text-bl-text">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#171717] border border-[#2a2820] p-8">
            <h3 className="font-heading text-3xl text-white mb-6">REQUEST FREE TRIAL</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Inigo'], ['Last Name', 'Montoya']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-bl-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#0F0F0F] border border-[#2a2820] focus:border-bl-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#333] font-body" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'you@email.com'], ['Phone', 'tel', '(206) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-bl-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#0F0F0F] border border-[#2a2820] focus:border-bl-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#333] font-body" />
                </div>
              ))}
              <div>
                <label className="block text-bl-muted text-xs uppercase tracking-wide mb-1.5 font-body">Discipline Interest</label>
                <select className="w-full bg-[#0F0F0F] border border-[#2a2820] focus:border-bl-gold text-white text-sm px-4 py-3 outline-none transition-colors font-body">
                  <option>Select a discipline...</option>
                  {disciplines_list.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-bl-gold hover:bg-[#9a7009] text-[#0F0F0F] font-body font-bold text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Book Free Class <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2a2820] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield size={16} className="text-bl-gold" />
          <div>
            <span className="font-heading text-white">BLADE ACADEMY</span>
            <span className="text-bl-muted text-[10px] block uppercase tracking-widest font-body">Seattle, WA</span>
          </div>
        </div>
        <p className="text-[#444] text-xs font-body">© 2026 Blade Academy. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#171717] border border-[#2a2820] hover:border-bl-gold flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-bl-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#171717] border border-[#2a2820] hover:border-bl-gold flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-bl-muted" />
          </a>
        </div>
        <p className="text-[#444] text-xs font-body">Powered by <span className="text-bl-gold">Koriva Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Disciplines />
      <Instructors />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
