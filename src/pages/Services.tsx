import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Code2, 
  Sparkles, 
  Search, 
  Target, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Layers, 
  Zap, 
  Check,
  ChevronDown
} from 'lucide-react';
import { SERVICES, FAQS } from '../data/agencyData';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { WordReveal } from '../components/common/WordReveal';
import { MagneticButton } from '../components/common/MagneticButton';
import { TiltCard } from '../components/common/TiltCard';
import { CounterUp } from '../components/common/CounterUp';
import { PageTransition } from '../components/common/PageTransition';
import { ParallaxElement } from '../components/common/ParallaxElement';
import { ScrollScaleElement } from '../components/common/ScrollScaleElement';

export const Services: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['digital-marketing', 'web-app-development']);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleServiceSelection = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate scope estimate
  const estimatedDays = selectedServices.length * 10;

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20">
      
      {/* ================= SERVICES HERO ================= */}
      <section className="relative py-16 md:py-24 bg-radial-gradient overflow-hidden">
        
        {/* Subtle Animated Ambient Gradient Orb Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              x: [0, 25, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-violet-400/10 to-cyan-400/10 rounded-full blur-[130px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -30, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-gradient-to-br from-cyan-500/10 via-indigo-400/10 to-purple-500/10 rounded-full blur-[110px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              Agency Capabilities
            </span>
          </AnimatedSection>

          <div className="mt-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              High-Impact Digital Solutions Engineered For{' '}
              <WordReveal
                text="Exponential Scale"
                highlightWords={['Exponential', 'Scale']}
                highlightClass="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                delay={0.15}
              />
            </h1>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              We combine disruptive acquisition marketing, modern full-stack web engineering, and conversion rate optimization to turn digital channels into dependable growth drivers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= DETAILED SERVICE CARDS WITH TILT ================= */}
      <section className="py-16 bg-[#fafafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ScrollScaleElement range={[0.95, 1.02]}>
                <TiltCard glare={true} tiltDegree={5}>
                  <div
                    id={service.id}
                    className="group relative glass-card rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-md bg-white/95 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] hover:border-indigo-300/80 transition-all duration-500 overflow-hidden"
                  >
                  {/* Glassmorphism ambient hover glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left Info */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.12, rotate: 8, y: -4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow duration-300 shrink-0`}
                        >
                          {getIcon(service.iconName)}
                        </motion.div>
                        <div>
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                            Service Discipline {index + 1}
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 font-display">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                        {service.fullDesc}
                      </p>

                      <div className="pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables & Scope</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Metric Highlight & CTA */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full border border-slate-800 shadow-xl">
                      <div>
                        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Benchmark Result</span>
                        <p className="text-3xl font-extrabold text-cyan-400 font-display mt-2">
                          <CounterUp value={service.stats} />
                        </p>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          Measured across active Vollywide Media client accounts over 6-month continuous optimization sprints.
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Ready to execute?</span>
                        <MagneticButton strength={0.3}>
                          <Link
                            to="/contact"
                            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
                          >
                            <span>Book Scope Call</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </MagneticButton>
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>
              </ScrollScaleElement>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE SERVICE ESTIMATOR ================= */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Custom Scope Estimator
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-2">
              Select Your Target Agency Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Pick the disciplines your project requires to see an estimated sprint timeline and scope structure.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Service Checkboxes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => {
                const isSelected = selectedServices.includes(s.id);
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleServiceSelection(s.id)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex items-start justify-between ${
                      isSelected
                        ? 'bg-indigo-50/70 border-indigo-500 shadow-sm'
                        : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="pr-3">
                      <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.shortDesc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scope Summary Box */}
            <div className="lg:col-span-4">
              <TiltCard glare={false} tiltDegree={5}>
                <div className="glass-card rounded-3xl p-6 border border-slate-200/80 shadow-lg space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">Scope Summary</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {selectedServices.length} service discipline(s) selected
                    </p>
                  </div>

                  <div className="space-y-3 border-y border-slate-100 py-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Estimated Sprint Time:</span>
                      <span className="font-bold text-slate-900">~{estimatedDays} Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Dedicated Specialists:</span>
                      <span className="font-bold text-slate-900">{Math.min(selectedServices.length + 1, 5)} Team Members</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Execution Framework:</span>
                      <span className="font-bold text-indigo-600">Agile Sprint System</span>
                    </div>
                  </div>

                  <MagneticButton className="w-full">
                    <Link
                      to={`/contact?services=${selectedServices.join(',')}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <span>Request Detailed Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-2">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., pricing, timeline, process)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};
