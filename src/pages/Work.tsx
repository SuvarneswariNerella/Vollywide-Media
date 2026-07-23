import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { ProjectModal } from '../components/common/ProjectModal';
import { WordReveal } from '../components/common/WordReveal';
import { TiltCard } from '../components/common/TiltCard';
import { CounterUp } from '../components/common/CounterUp';
import { PageTransition } from '../components/common/PageTransition';
import { ParallaxElement } from '../components/common/ParallaxElement';
import { ScrollScaleElement } from '../components/common/ScrollScaleElement';
import { ArrowUpRight, TrendingUp, Sparkles, Filter } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'FinTech', 'E-Commerce', 'SaaS', 'Mobile Apps', 'Brand Identity'];

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-20">
      
      {/* ================= HERO ================= */}
      <section className="relative py-16 md:py-24 bg-radial-gradient overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              Case Studies & Portfolio
            </span>
          </AnimatedSection>

          <div className="mt-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.1]">
              Transformative Work That Generates{' '}
              <WordReveal
                text="Measurable Business Value"
                highlightWords={['Measurable', 'Value']}
                highlightClass="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                delay={0.15}
              />
            </h1>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore how Vollywide Media combines performance marketing campaigns and full-stack engineering to elevate industry leaders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CATEGORY FILTER BAR ================= */}
      <section className="py-5 bg-white/90 backdrop-blur-md border-y border-slate-200/80 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO GRID WITH TILT CARDS ================= */}
      <section className="py-16 bg-[#fafafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard glare={true} tiltDegree={6} className="h-full">
                    <ScrollScaleElement range={[0.9, 1]}>
                      <div
                        onClick={() => setSelectedProject(project)}
                        data-cursor="VIEW"
                        className="group cursor-pointer glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
                      >
                        <div>
                          {/* Image Preview */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                              {project.category}
                            </span>
                            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md">
                              {project.year}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 space-y-4">
                          <div>
                            <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{project.client}</p>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1 font-display group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                              <span>{project.title}</span>
                              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </h2>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {project.summary}
                          </p>

                          {/* Metric Highlights */}
                          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                            {project.results.map((res, idx) => (
                              <div key={idx} className="bg-indigo-50/60 rounded-xl p-2.5 text-center">
                                <p className="text-sm md:text-base font-extrabold text-indigo-600 font-display">
                                  <CounterUp value={res.metric} />
                                </p>
                                <p className="text-[10px] text-slate-500 font-medium truncate">{res.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Tags */}
                      <div className="px-6 md:px-8 pb-6 flex flex-wrap gap-1.5">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      </div>
                    </ScrollScaleElement>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
    </PageTransition>
  );
};
