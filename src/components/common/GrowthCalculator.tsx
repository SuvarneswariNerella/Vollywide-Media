import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GrowthCalculator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(10000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(250);
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(30000);

  // Projected metrics calculations
  const baselineConversions = Math.round(monthlyTraffic * 0.015); // 1.5% default conversion rate
  const baselineRevenue = baselineConversions * avgOrderValue;

  // Vollywide optimized metrics (+3.2x ROAS & CRO optimization)
  const optimizedConversions = Math.round(monthlyTraffic * 0.038); // 3.8% CRO rate
  const optimizedRevenue = optimizedConversions * avgOrderValue + (monthlySpend * 3.2);
  const revenueUplift = optimizedRevenue - baselineRevenue;
  const roiPercentage = Math.round(((optimizedRevenue - monthlySpend) / monthlySpend) * 100);

  return (
    <div className="w-full glass-card rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-xl bg-gradient-to-br from-white via-indigo-50/20 to-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Controls */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" /> Interactive Growth Estimator
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display">
              Calculate Your Revenue Acceleration
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Adjust your current digital metrics below to see how Vollywide's performance marketing & CRO engine impacts your bottom line.
            </p>
          </div>

          <div className="space-y-5">
            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-800 mb-2">
                <span>Monthly Ad Budget</span>
                <span className="text-indigo-600 font-bold">${monthlySpend.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$2,000/mo</span>
                <span>$100,000/mo</span>
              </div>
            </div>

            {/* Slider 2: Monthly Website Traffic */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-800 mb-2">
                <span>Monthly Website Visitors</span>
                <span className="text-indigo-600 font-bold">{monthlyTraffic.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min={5000}
                max={250000}
                step={5000}
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>5,000</span>
                <span>250,000</span>
              </div>
            </div>

            {/* Slider 3: Average Order / Customer Value */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-800 mb-2">
                <span>Average Deal / Order Value</span>
                <span className="text-indigo-600 font-bold">${avgOrderValue}</span>
              </div>
              <input
                type="range"
                min={50}
                max={2500}
                step={25}
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$50</span>
                <span>$2,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="w-full lg:w-1/2">
          <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Projected Monthly Revenue</p>
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mt-1 font-display tracking-tight">
                  ${Math.round(optimizedRevenue).toLocaleString()}
                </h4>
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50">
                <p className="text-xs text-slate-400">Estimated Revenue Uplift</p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">
                  +${Math.round(revenueUplift).toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50">
                <p className="text-xs text-slate-400">Estimated Campaign ROI</p>
                <p className="text-lg font-bold text-cyan-400 mt-0.5">
                  {roiPercentage}% ROI
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              *Projections based on Vollywide client benchmarks (+3.2x ROAS & 2.5x CRO improvement). Real results tailored in our custom strategy session.
            </p>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Claim Your Custom Growth Plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
