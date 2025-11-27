import React from 'react';
import { Briefcase, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const tools = [
    { name: 'Microsoft 365', icon: '📊' },
    { name: 'SAP', icon: '💼' },
    { name: 'Odoo', icon: '🔧' },
    { name: 'Adobe CC', icon: '🎨' },
    { name: 'CRM Tools', icon: '📈' }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm tracking-[0.3em] mb-4">ABOUT</div>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Profile Overview
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                With over <span className="text-cyan-400">5 years of experience</span> in digital marketing, branding, IT support, and industrial manufacturing, I bring multi-functional expertise across operations, design, sales coordination, and ERP systems.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I currently work at <span className="text-cyan-400">Vimec Valves – Vimec Group Italia Srl</span>, supporting Sales, CRM, Procurement, Documentation, and IT workflows.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I received my <span className="text-cyan-400">first international sales order on April 10, 2025, from Turkey</span> — a key milestone in my sales role.
              </p>
            </div>
          </div>

          {/* Tools & Stats */}
          <div className="space-y-6">
            {/* Tools Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-black border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl mb-6 text-white">Tools & Platforms</h3>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="text-gray-300 text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative bg-black border border-cyan-500/50 rounded-xl p-6 text-center">
                  <Briefcase className="mx-auto mb-2 text-cyan-400" size={28} />
                  <div className="text-3xl text-white mb-1">5+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative bg-black border border-purple-500/50 rounded-xl p-6 text-center">
                  <Award className="mx-auto mb-2 text-purple-400" size={28} />
                  <div className="text-3xl text-white mb-1">43+</div>
                  <div className="text-xs text-gray-500">Skills</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative bg-black border border-pink-500/50 rounded-xl p-6 text-center">
                  <TrendingUp className="mx-auto mb-2 text-pink-400" size={28} />
                  <div className="text-3xl text-white mb-1">100+</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
