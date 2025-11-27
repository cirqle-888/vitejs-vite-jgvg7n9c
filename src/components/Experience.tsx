import React from 'react';
import { Briefcase, Circle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      year: '2024 – Present',
      company: 'Vimec Valves – Vimec Group Italia Srl',
      roles: [
        {
          title: 'Sales Coordinator',
          description: 'CRM (Odoo), sales tracking, reports, quotation follow-ups, inter-department communication.'
        },
        {
          title: 'IT Support + Document Controller',
          description: 'ERP systems, documentation, website content.'
        }
      ]
    },
    {
      year: '2023 – 2024',
      company: 'Speakerbox',
      roles: [
        {
          title: 'Office Manager',
          description: 'Accounting, employee engagement, operations.'
        },
        {
          title: 'Account Manager',
          description: 'Client handling, project management.'
        }
      ]
    },
    {
      year: '2021 – 2023',
      company: 'Creative Agency – Speakerbox',
      roles: [
        {
          title: 'Social Media Marketing Specialist',
          description: 'Strategic social media campaigns, content creation, and brand management.'
        }
      ]
    },
    {
      year: '2019 – 2020',
      company: 'Medinest Polyclinic',
      roles: [
        {
          title: 'Medical Assistant',
          description: 'Patient care support, administrative tasks, and clinical assistance.'
        }
      ]
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm tracking-[0.3em] mb-4">TIMELINE</div>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <Circle className="w-3 h-3 fill-cyan-500 text-cyan-500" />
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur animate-pulse"></div>
                  </div>
                </div>

                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                  {/* Year - left on desktop */}
                  <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
                      {exp.year}
                    </div>
                  </div>

                  {/* Content - right on desktop */}
                  <div className={`${index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:pr-16'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition"></div>
                      <div className="relative bg-black border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
                        <div className="flex items-start gap-3 mb-4">
                          <Briefcase className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                          <h3 className="text-xl text-white">{exp.company}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="border-l-2 border-cyan-500/30 pl-4">
                              <h4 className="text-cyan-400 mb-2">{role.title}</h4>
                              <p className="text-gray-500 text-sm">{role.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
