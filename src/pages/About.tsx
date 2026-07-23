import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Users, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Linkedin, 
  Sparkles,
  Zap,
  TrendingUp,
  Code2
} from 'lucide-react';
import { AGENCY_INFO, TEAM_MEMBERS, STATS } from '../data/agencyData';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { WordReveal } from '../components/common/WordReveal';
import { MagneticButton } from '../components/common/MagneticButton';
import { TiltCard } from '../components/common/TiltCard';
import { CounterUp } from '../components/common/CounterUp';
import { InfiniteMarquee } from '../components/common/InfiniteMarquee';
import { PageTransition } from '../components/common/PageTransition';
import { ParallaxElement } from '../components/common/ParallaxElement';
import { ScrollScaleElement } from '../components/common/ScrollScaleElement';

const TECH_STACK_TAGS = [
  'React 18', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS',
  'Meta Ads API', 'Google Marketing Platform', 'Klaviyo', 'PostgreSQL',
  'Three.js', 'Framer Motion', 'BigQuery Analytics'
];

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-radial-gradient overflow-hidden">
        
        {/* Ambient Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              Who We Are
            </span>
          </AnimatedSection>

          <div className="mt-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              Driven By Disruptive Marketing &{' '}
              <WordReveal
                text="Precision Web Engineering"
                highlightWords={['Precision', 'Engineering']}
                highlightClass="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                delay={0.15}
              />
            </h1>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Vollywide Media was founded on a singular conviction: modern brands cannot thrive on creative storytelling alone, nor on passive engineering. True digital growth requires both.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= TECH STACK MARQUEE ================= */}
      <section className="py-4 bg-white/80 border-y border-slate-200/80">
        <InfiniteMarquee items={TECH_STACK_TAGS} speed={25} />
      </section>

      {/* ================= STORY & PHILOSOPHY ================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                The Vollywide Story
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Eliminating The Agency-Engineering Gap
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Traditional ad agencies write clever headlines but lack the technical capacity to optimize web applications for conversion. Traditional dev shops write clean code but lack marketing strategy.
              </p>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Vollywide Media unifies these disciplines. Our cross-functional squads combine senior growth marketers, React/Cloud architects, and UI/UX designers under one roof.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                  <p className="text-3xl font-extrabold text-indigo-600 font-display">
                    <CounterUp value="100%" />
                  </p>
                  <p className="text-xs text-slate-700 font-bold mt-1">In-House Execution Squads</p>
                </div>
                
                <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-100">
                  <p className="text-3xl font-extrabold text-cyan-600 font-display">
                    <CounterUp value="$85M+" />
                  </p>
                  <p className="text-xs text-slate-700 font-bold mt-1">Managed Ad Revenue</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ScrollScaleElement range={[0.9, 1.05]}>
                <TiltCard glare={true} tiltDegree={6}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                      alt="Vollywide Media Team Collaboration"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">San Francisco HQ</p>
                        <p className="text-sm font-semibold">Where strategy meets execution.</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollScaleElement>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES WITH TILT CARDS ================= */}
      <section className="py-20 bg-[#fafafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display mt-2">
              The Values That Drive Our Standard
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Data-Obsessed Growth',
                desc: 'We do not guess; we measure. Every creative campaign and line of code is benchmarked against conversion rates and revenue.'
              },
              {
                icon: ShieldCheck,
                title: 'Radical Transparency',
                desc: 'Full visibility into performance dashboards, ad spend metrics, and source code repositories. No hidden markups or gatekeeping.'
              },
              {
                icon: Zap,
                title: 'Speed to Value',
                desc: 'In digital, velocity is destiny. Our agile sprint frameworks deliver launch-ready campaigns and apps in weeks, not quarters.'
              }
            ].map((val, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <TiltCard glare={true} tiltDegree={8} className="h-full">
                  <div className="glass-card rounded-3xl p-8 border border-slate-200/80 h-full flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shadow-md shadow-indigo-500/10">
                        <val.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">{val.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">{val.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              The Minds Behind Vollywide
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display mt-2">
              Leadership & Growth Specialists
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <AnimatedSection key={member.id} delay={idx * 0.1}>
                <TiltCard glare={true} tiltDegree={8}>
                  <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                        <p className="text-xs font-semibold text-indigo-600 mt-0.5">{member.role}</p>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {member.specialties.map((spec, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL HUBS ================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800">
              Global Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mt-3">
              Serving Clients Across 3 Timezones
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AGENCY_INFO.locations.map((loc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <ParallaxElement direction="up" offset={idx % 2 === 0 ? 20 : -20}>
                  <TiltCard glare={false} tiltDegree={5}>
                    <div className="bg-slate-800/80 rounded-3xl p-6 md:p-8 border border-slate-700/80 text-left space-y-3 shadow-xl">
                      <Globe2 className="w-8 h-8 text-cyan-400" />
                      <h3 className="text-xl font-bold font-display text-white">{loc.city}</h3>
                      <p className="text-xs text-slate-300">{loc.address}</p>
                      <span className="inline-block text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800">
                        {loc.timezone}
                      </span>
                    </div>
                  </TiltCard>
                </ParallaxElement>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12">
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold shadow-xl shadow-indigo-500/20"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
    </PageTransition>
  );
};
