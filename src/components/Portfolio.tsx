import React from 'react';
import { Palette, Monitor, Database, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Portfolio() {
  const categories = [
    {
      title: 'Branding & Graphic Design',
      icon: Palette,
      description: 'Logo design, brand identity, marketing materials',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web & UI/UX',
      icon: Monitor,
      description: 'Website design, user interfaces, digital experiences',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'ERP / IT Workflows',
      icon: Database,
      description: 'Process automation, system integration, documentation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sales & CRM Work Samples',
      icon: Users,
      description: 'Sales reports, CRM dashboards, client management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm tracking-[0.3em] mb-4">PORTFOLIO</div>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
            Featured Work
          </h2>
          <p className="text-gray-500 text-xl">
            Showcasing diverse projects across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {category.description}
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
