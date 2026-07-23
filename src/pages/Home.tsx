import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Code2, 
  Zap, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Building2, 
  ShieldCheck, 
  BarChart3,
  Globe,
  Award,
  Users
} from 'lucide-react';
import { AGENCY_INFO, SERVICES, PROJECTS, TESTIMONIALS, STATS } from '../data/agencyData';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Hero3DCanvas } from '../components/common/Hero3DCanvas';
import { GrowthCalculator } from '../components/common/GrowthCalculator';
import { ProjectModal } from '../components/common/ProjectModal';
import { WordReveal } from '../components/common/WordReveal';
import { MagneticButton } from '../components/common/MagneticButton';
import { TiltCard } from '../components/common/TiltCard';
import { CounterUp } from '../components/common/CounterUp';
import { InfiniteMarquee } from '../components/common/InfiniteMarquee';
import { StickyFeatureProcess } from '../components/common/StickyFeatureProcess';
import { PageTransition } from '../components/common/PageTransition';
import { ParallaxElement } from '../components/common/ParallaxElement';
import { ScrollScaleElement } from '../components/common/ScrollScaleElement';
import { Project } from '../types';

const CLIENT_PARTNERS = [
  { name: 'FINTECH ONE', badge: '$45M+ Scaled' },
  { name: 'NEXUS CLOUD', badge: '3.8x ROAS' },
  { name: 'AURA HEALTH', badge: '+210% CVR' },
  { name: 'STRATA LABS', badge: 'Top 10 Forbes' },
  { name: 'LUMINA AI', badge: 'Series B' },
  { name: 'VELOCITY PAY', badge: '1.2M Users' },
  { name: 'HYPERION EV', badge: '$80M GMV' },
  { name: 'PULSE DIGITAL', badge: '99.8% Uptime' },
];

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll target for Hero Parallax & Zoom-out effect
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0.2]);
  const blobY1 = useTransform(heroScrollProgress, [0, 1], [0, -100]);
  const blobY2 = useTransform(heroScrollProgress, [0, 1], [0, 150]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
      
      {/* ================= HERO SECTION WITH PARALLAX & DRIFTING BLOBS ================= */}
      <section ref={heroRef} className="relative pt-12 pb-20 md:py-28 overflow-hidden bg-radial-gradient">
        
        {/* Animated Drifting Background Blobs (GPU Accelerated) */}
        <motion.div
          style={{ y: blobY1, willChange: 'transform' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-cyan-400/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"
        />
        <motion.div
          style={{ y: blobY2, willChange: 'transform' }}
          className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-float-slow"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity, willChange: 'transform, opacity' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <AnimatedSection direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{AGENCY_INFO.headline}</span>
                </div>
              </AnimatedSection>

              {/* Staggered Word Reveal Heading */}
              <div className="pt-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.08]">
                  We Make Your Business{' '}
                  <WordReveal
                    text="Thrive Digitally"
                    highlightWords={['Thrive', 'Digitally']}
                    highlightClass="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                    delay={0.2}
                  />
                </h1>
              </div>

              {/* Description */}
              <AnimatedSection direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {AGENCY_INFO.description}
                </p>
              </AnimatedSection>

              {/* Magnetic CTAs */}
              <AnimatedSection direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all duration-300"
                    >
                      <span>Schedule Growth Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.25}>
                    <Link
                      to="/work"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/90 font-bold text-sm shadow-sm transition-all duration-200 backdrop-blur-md"
                    >
                      <span>Explore Case Studies</span>
                    </Link>
                  </MagneticButton>
                </div>
              </AnimatedSection>

              {/* Trust Badges */}
              <AnimatedSection direction="up" delay={0.5}>
                <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-600 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>$85M+ Ad Value Scaled</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>98.4% Client Retention</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Guaranteed Sprint ROI</span>
                  </div>
                </div>
              </AnimatedSection>

            </div>

            {/* Right Interactive 3D Mesh in Glassmorphism Container */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection direction="left" delay={0.3}>
                <TiltCard glare={true} tiltDegree={8}>
                  <div className="relative glass-card rounded-3xl p-2 shadow-2xl border border-slate-200/90">
                    <Hero3DCanvas />
                  </div>
                </TiltCard>
              </AnimatedSection>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= INFINITE LOGO MARQUEE ================= */}
      <section className="py-6 bg-white/60 backdrop-blur-md border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
            Trusted By High-Growth Tech Brands & Industry Leaders
          </p>
          <InfiniteMarquee items={CLIENT_PARTNERS} speed={30} />
        </div>
      </section>

      {/* ================= ANIMATED STATS COUNTER BAR ================= */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxElement direction="up" offset={30}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <TiltCard glare={false} tiltDegree={5} className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-2 hover:border-indigo-300 transition-all duration-500 relative overflow-hidden flex flex-col justify-center h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-cyan-50/0 group-hover:from-indigo-50/80 group-hover:to-cyan-50/80 transition-colors duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <p className="text-3xl md:text-5xl font-extrabold text-indigo-600 font-display tracking-tight group-hover:scale-105 transform origin-left transition-transform duration-500">
                        <CounterUp value={stat.number} />
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-2 group-hover:text-indigo-700 transition-colors duration-300">{stat.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{stat.description}</p>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </ParallaxElement>
        </div>
      </section>

      {/* ================= CORE SERVICES TEASER WITH TILT CARDS ================= */}
      <section className="py-20 md:py-28 bg-[#fafafd] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mt-3 tracking-tight">
              Full-Spectrum Digital Services Engineered For Scale
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
              We integrate high-converting marketing strategy with resilient web technology to generate compound revenue growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <AnimatedSection key={service.id} delay={idx * 0.15}>
                <TiltCard glare={true} tiltDegree={10} className="h-full">
                  <div className="group bg-white rounded-3xl p-8 h-full flex flex-col justify-between border border-slate-200 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-2 hover:border-indigo-300 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-cyan-50/0 group-hover:from-indigo-50/80 group-hover:to-cyan-50/80 transition-colors duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Zap className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100 group-hover:bg-indigo-100 transition-colors duration-300">
                          {service.stats}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mt-4 font-display group-hover:text-indigo-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                        {service.shortDesc}
                      </p>

                      <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                        {service.deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 group-hover:border-indigo-100 transition-colors duration-300">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        <span>Explore {service.title}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <MagneticButton>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md hover:scale-105"
              >
                <span>View All 6 Service Disciplines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>

        </div>
      </section>

      {/* ================= PINNED FEATURE PROCESS SECTION ================= */}
      <StickyFeatureProcess />

      {/* ================= INTERACTIVE ROI CALCULATOR ================= */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthCalculator />
        </div>
      </section>

      {/* ================= FEATURED CASE STUDIES WITH HOVER OVERLAY ================= */}
      <section className="py-20 md:py-28 bg-[#fafafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display mt-2 tracking-tight">
                Proven Client Case Studies
              </h2>
            </div>
            
            <Link
              to="/work"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.15}>
                <TiltCard glare={true} tiltDegree={6}>
                  <ScrollScaleElement range={[0.9, 1]}>
                    <div
                      onClick={() => setSelectedProject(project)}
                      data-cursor="VIEW"
                      className="group cursor-pointer glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                      <div>
                        <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{project.client}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 font-display group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                        {project.results.map((res, i) => (
                          <div key={i} className="bg-indigo-50/60 rounded-xl p-2.5 text-center">
                            <p className="text-sm md:text-base font-extrabold text-indigo-600 font-display">
                              <CounterUp value={res.metric} />
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium truncate">{res.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  </ScrollScaleElement>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display mt-2 tracking-tight">
              Trusted By Visionary Leaders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <AnimatedSection key={item.id} delay={idx * 0.1}>
                <TiltCard glare={false} tiltDegree={6} className="h-full">
                  <div className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/80 space-y-4 h-full flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">{item.name}</p>
                          <p className="text-[11px] text-slate-500">{item.role}, {item.company}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {item.highlightMetric}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        
        {/* Glow ambient blobs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-800/80">
            Let's Build Something Exceptional
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display leading-tight">
            Ready To Accelerate Your Digital Growth?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Vollywide Media to deploy disruptive marketing campaigns and world-class web products engineered to scale revenue.
          </p>

          <div className="pt-4">
            <MagneticButton strength={0.4}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>Schedule Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
    </PageTransition>
  );
};
