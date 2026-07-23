import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#fafafd] px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-md">
          <span className="text-3xl font-extrabold font-display">404</span>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Page Not Found</h1>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            The page you are looking for does not exist or has been moved to a new route.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return To Homepage</span>
        </Link>
      </div>
    </div>
  );
};
