import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  
  // This function finds the contact section and scrolls to it smoothly
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Portrait */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-2 ring-cyan-500/50">
              <ImageWithFallback
                src="src/assets/IMG_4023 (1).webp"
                alt="Umarul Farooq V.V"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Umarul Farooq V.V
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 text-gray-400 max-w-3xl leading-relaxed">
              IT Support & ERP Specialist | Sales Coordination | Digital Marketing & Branding | Graphic Designer
            </h2>
            
            <p className="text-lg md:text-xl mb-10 text-gray-500 max-w-2xl">
              Helping businesses optimize operations, improve workflows, and build strong digital presence.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2 justify-center text-white">
                  <Download size={20} />
                  Download CV
                </span>
              </button>
              
              {/* UPDATED BUTTON WITH ONCLICK EVENT */}
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2 justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all text-white cursor-pointer"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Also updated to scroll down */}
      <div 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce cursor-pointer"
      >
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
