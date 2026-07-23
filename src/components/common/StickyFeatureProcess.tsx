import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, TrendingUp, BarChart, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Deep Business & Growth Audit',
    subtitle: 'Uncovering Untapped Opportunity',
    desc: 'We analyze your complete digital footprint, audience funnels, ad account history, and unit economics to build a precise growth blueprint.',
    metrics: ['Full Funnel Diagnostic', 'CAC & LTV Modeling', 'Competitor Intelligence'],
    icon: <BarChart className="w-5 h-5 text-indigo-600" />,
    gradient: 'from-indigo-500/10 to-violet-500/5'
  },
  {
    step: '02',
    title: 'Omnichannel Growth Sprint',
    subtitle: 'High-Impact Deployment',
    desc: 'We deploy rapid creative testing, high-converting landing pages, and automated media-buying protocols across Meta, Google, TikTok, and Programmatic.',
    metrics: ['High-Velocity Ad Creative', 'Custom Landing Pages', 'AI Bidding Logic'],
    icon: <Zap className="w-5 h-5 text-violet-600" />,
    gradient: 'from-violet-500/10 to-cyan-500/5'
  },
  {
    step: '03',
    title: 'Conversion Engine Optimization',
    subtitle: 'Maximizing Value Per Visitor',
    desc: 'Continuous multivariate A/B testing, checkout frictionless flows, and post-click personalization double visitor conversion rates.',
    metrics: ['35%+ Lift in CVR', 'Dynamic Offer Personalization', 'Zero-Friction Checkout'],
    icon: <TrendingUp className="w-5 h-5 text-cyan-600" />,
    gradient: 'from-cyan-500/10 to-emerald-500/5'
  },
  {
    step: '04',
    title: 'Retention & LTV Expansion',
    subtitle: 'Compounding Revenue',
    desc: 'Email/Klaviyo automation, SMS VIP programs, and lifecycle retention workflows transform single buyers into loyal brand advocates.',
    metrics: ['Email ROI 42:1', 'Predictive Replenishment', 'Customer VIP Tiers'],
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
    gradient: 'from-emerald-500/10 to-indigo-500/5'
  }
];

export const StickyFeatureProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Pinned Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How We Guarantee Scale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Our 4-Stage Revenue Acceleration Methodology
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We replace guesswork with predictable engineering. Each phase compounds upon the last to turn cold traffic into high-margin revenue.
            </p>

            {/* Active Step Indicator Pill */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-indigo-600 uppercase tracking-wider">Current Phase</span>
                <span className="text-slate-400">Phase {activeStep + 1} of {PROCESS_STEPS.length}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                  animate={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
              </div>
              <p className="text-xs font-bold text-slate-900 truncate">
                {PROCESS_STEPS[activeStep].title}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all hover:scale-105"
              >
                <span>Explore Full Execution Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Scroll Steps */}
          <div className="lg:col-span-7 space-y-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                onViewportEnter={() => setActiveStep(idx)}
                viewport={{ margin: '-30% 0px -30% 0px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl transition-all duration-500 border ${
                  activeStep === idx
                    ? 'bg-white border-indigo-300 shadow-2xl shadow-indigo-500/10 scale-[1.02]'
                    : 'bg-white/60 border-slate-200/80 shadow-sm opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm">
                      {step.step}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-display">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/60 shrink-0">
                    {step.icon}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                  {step.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Deliverables & Outcomes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/50 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
