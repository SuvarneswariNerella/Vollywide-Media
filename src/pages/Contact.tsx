import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Clock, 
  MessageSquare,
  Building,
  User,
  DollarSign
} from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { WordReveal } from '../components/common/WordReveal';
import { MagneticButton } from '../components/common/MagneticButton';
import { TiltCard } from '../components/common/TiltCard';
import { PageTransition } from '../components/common/PageTransition';
import { ParallaxElement } from '../components/common/ParallaxElement';
import { ScrollScaleElement } from '../components/common/ScrollScaleElement';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedServices = searchParams.get('services')?.split(',') || [];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceNeeded: preselectedServices.length > 0 ? preselectedServices[0] : 'digital-marketing',
    budgetRange: '$10,000 - $25,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  const budgetOptions = [
    '< $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger festive celebratory confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20">
      
      {/* ================= HERO ================= */}
      <section className="relative py-16 md:py-20 bg-radial-gradient overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              Get In Touch
            </span>
          </AnimatedSection>

          <div className="mt-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              Let's Accelerate Your{' '}
              <WordReveal
                text="Digital Growth Engine"
                highlightWords={['Digital', 'Growth']}
                highlightClass="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                delay={0.15}
              />
            </h1>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-3 leading-relaxed">
              Schedule a strategy audit or request a custom proposal from Vollywide Media's senior growth team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-12 bg-[#fafafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Info & Locations */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Contact Cards */}
              <ParallaxElement direction="up" offset={20}>
                <TiltCard glare={false} tiltDegree={5}>
                  <div className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 font-display">Direct Channels</h3>
                  
                  <div className="space-y-3 text-xs">
                    <a
                      href={`mailto:${AGENCY_INFO.email}`}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/60 text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Email Inquiries</p>
                        <p className="font-semibold text-slate-900">{AGENCY_INFO.email}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${AGENCY_INFO.phone}`}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/60 text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Phone Hotline</p>
                        <p className="font-semibold text-slate-900">{AGENCY_INFO.phone}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </TiltCard>
              </ParallaxElement>

              {/* Office Locations */}
              <ParallaxElement direction="up" offset={40}>
                <TiltCard glare={false} tiltDegree={5}>
                <div className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Global Operations</h3>
                  
                  <div className="space-y-3">
                    {AGENCY_INFO.locations.map((loc, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900">{loc.city}</span>
                          <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-md font-bold border border-indigo-100">
                            {loc.timezone}
                          </span>
                        </div>
                        <p className="text-slate-500">{loc.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
              </ParallaxElement>

            </div>

            {/* Right Form / Calendar Widget Toggle */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-xl bg-white">
                
                {/* Toggle Bar */}
                <div className="flex bg-slate-100 p-1 rounded-2xl mb-8">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${
                      activeTab === 'form'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Send Project Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('calendar')}
                    className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'calendar'
                        ? 'bg-white text-indigo-600 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" /> Direct Calendar Booking
                  </button>
                </div>

                {activeTab === 'form' ? (
                  isSubmitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                        Proposal Request Received!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Vollywide Media. A senior growth strategist will review your requirements and follow up within 24 business hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., Sarah Jenkins"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="sarah@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Needed Dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.serviceNeeded}
                          onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget Range Radio Selector */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Project Monthly Budget
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {budgetOptions.map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => setFormData({ ...formData, budgetRange: opt })}
                              className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                                formData.budgetRange === opt
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Project Details & Goals
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your target growth goals, current roadblocks, and desired timelines..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      <MagneticButton className="w-full">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4 text-cyan-300" />
                              <span>Submit Proposal Request</span>
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </form>
                  )
                ) : (
                  /* Calendar Booking Widget */
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Book a 30-Min Growth Discovery Sync
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Select an available time slot directly with Julian Vance (Founder & Executive Creative Director).
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">30-Minute Video Consultation</p>
                        <p className="text-xs text-slate-500 mt-0.5">Google Meet / Zoom • Free Strategy Audit</p>
                      </div>

                      <div className="pt-2">
                        <MagneticButton>
                          <a
                            href={`mailto:${AGENCY_INFO.email}?subject=Direct%20Calendar%20Booking%20Request`}
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-colors"
                          >
                            <Calendar className="w-4 h-4" />
                            <span>Request Invitation via Calendar</span>
                          </a>
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
