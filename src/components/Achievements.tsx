import React from 'react';
import { Award, Globe, Briefcase, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Globe,
      title: 'First International Sales Order',
      description: 'Received first international sales order from Turkey on April 10, 2025 – a key milestone in my sales role.',
      highlight: true
    },
    {
      icon: Briefcase,
      title: 'Multi-Department Workflow Management',
      description: 'Successfully managed workflows across Sales, CRM, Procurement, Documentation, and IT at a global manufacturing company.',
      highlight: false
    },
    {
      icon: Sparkles,
      title: 'Industrial Sector Branding',
      description: 'Designed comprehensive marketing and branding assets for the industrial manufacturing sector.',
      highlight: false
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm tracking-[0.3em] mb-4">MILESTONES</div>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
            Key Achievements
          </h2>
          <p className="text-gray-500 text-xl">
            Defining moments of professional excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 ${
                  achievement.highlight 
                    ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                } rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
                <div className={`relative bg-black border ${
                  achievement.highlight ? 'border-yellow-500/50' : 'border-white/10'
                } rounded-2xl p-8 hover:border-cyan-500/50 transition-all group-hover:-translate-y-1`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${
                      achievement.highlight 
                        ? 'bg-gradient-to-br from-yellow-500 to-orange-500' 
                        : 'bg-gradient-to-br from-cyan-500 to-purple-500'
                    } rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
