import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../../data/agencyData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Radial Glow Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-bold text-base font-display">
                  V
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-display">
                Vollywide Media
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {AGENCY_INFO.description}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-200 mb-2.5">Subscribe to Digital Growth Insights</p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  {subscribed ? <CheckCircle className="w-3.5 h-3.5 text-emerald-300" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? 'Subscribed' : 'Join'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Pages</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-indigo-400 transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Digital Marketing</li>
              <li>Web & Mobile Engineering</li>
              <li>Branding & Design Systems</li>
              <li>Organic SEO Engines</li>
              <li>Conversion Rate Optimization</li>
              <li>AI & Marketing Automation</li>
            </ul>
          </div>

          {/* Col 5: Global Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Global Hubs</h4>
            <div className="space-y-3 text-xs">
              {AGENCY_INFO.locations.map((loc, idx) => (
                <div key={idx} className="border-b border-slate-900 pb-2">
                  <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-indigo-400" /> {loc.city}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vollywide Media LLC. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
