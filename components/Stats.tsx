
import React from 'react';
import { siteConfig } from '../config';

const Stats: React.FC = () => {
  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex p-3 rounded-2xl bg-white/5 mb-4 group-hover:bg-blue-600/20 transition-colors">
                {React.createElement(s.icon as React.ComponentType<any>, { size: 28, className: "text-blue-400" })}
              </div>
              <div className="text-4xl font-bold text-white mb-1 font-serif">{s.value}</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
