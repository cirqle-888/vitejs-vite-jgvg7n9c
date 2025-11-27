import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
      
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Achievements />
        <Contact />
        
        {/* Footer */}
        <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm py-8 text-center">
          <p className="text-gray-500">© 2025 Umarul Farooq V.V. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
