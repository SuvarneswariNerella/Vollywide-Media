import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Calendar, Award } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            {/* Title & Client */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">Case Study</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
                {project.title}
              </h2>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                Client: <span className="text-slate-800">{project.client}</span>
              </p>
            </div>

            {/* Featured Hero Mockup Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs text-slate-200 font-medium">{project.summary}</p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-600" /> Key Impact & ROI Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.map((res, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-indigo-600 font-display">
                      {res.metric}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{res.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/60">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> The Challenge
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" /> The Vollywide Solution
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Testimonial Quote if present */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <p className="text-sm italic text-slate-200 mb-4 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <p className="text-xs font-bold text-cyan-300">{project.testimonial.author}</p>
                  <p className="text-[11px] text-slate-400">{project.testimonial.role}</p>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-600 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-medium">Want similar exponential growth for your brand?</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
