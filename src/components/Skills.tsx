import React from 'react';
import { Cpu, Database, BarChart3, FileText, TrendingUp, Palette, Users, Layout, Settings, Zap, Globe, Mail, Search, Target, PenTool, Code, Monitor, Cloud, Lock, MessageSquare, Calendar, ShoppingCart, Package, Truck, ClipboardList, UserCheck, HeadphonesIcon, Smartphone, Megaphone, Video, Camera, Edit, Book, Layers, GitBranch, Server, HardDrive, Wifi, Shield, Key, CheckCircle, Award } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    { name: 'IT Automation', icon: Cpu },
    { name: 'ERP (SAP)', icon: Database },
    { name: 'ERP (Odoo)', icon: Database },
    { name: 'Data Analysis', icon: BarChart3 },
    { name: 'Documentation', icon: FileText },
    { name: 'Digital Marketing', icon: TrendingUp },
    { name: 'Branding', icon: Palette },
    { name: 'CRM', icon: Users },
    { name: 'Graphic Design', icon: Layout },
    { name: 'Administration', icon: Settings },
    { name: 'Process Optimization', icon: Zap },
    { name: 'Web Management', icon: Globe },
    { name: 'Email Marketing', icon: Mail },
    { name: 'SEO', icon: Search },
    { name: 'Sales Strategy', icon: Target },
    { name: 'Content Creation', icon: PenTool },
    { name: 'Web Development', icon: Code },
    { name: 'UI/UX Design', icon: Monitor },
    { name: 'Cloud Solutions', icon: Cloud },
    { name: 'Cybersecurity', icon: Lock },
    { name: 'Social Media Mgmt', icon: MessageSquare },
    { name: 'Project Management', icon: Calendar },
    { name: 'E-commerce', icon: ShoppingCart },
    { name: 'Inventory Mgmt', icon: Package },
    { name: 'Supply Chain', icon: Truck },
    { name: 'Procurement', icon: ClipboardList },
    { name: 'Client Relations', icon: UserCheck },
    { name: 'Technical Support', icon: HeadphonesIcon },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'Campaign Mgmt', icon: Megaphone },
    { name: 'Video Editing', icon: Video },
    { name: 'Photography', icon: Camera },
    { name: 'Copywriting', icon: Edit },
    { name: 'Training & Docs', icon: Book },
    { name: 'Brand Identity', icon: Layers },
    { name: 'Version Control', icon: GitBranch },
    { name: 'Server Admin', icon: Server },
    { name: 'Database Mgmt', icon: HardDrive },
    { name: 'Network Setup', icon: Wifi },
    { name: 'Data Security', icon: Shield },
    { name: 'API Integration', icon: Key },
    { name: 'Quality Assurance', icon: CheckCircle },
    { name: 'Leadership', icon: Award }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm tracking-[0.3em] mb-4">EXPERTISE</div>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-500 text-xl">
            {skillsData.length}+ Professional Skills
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black border border-white/10 rounded-lg p-4 hover:border-cyan-500/50 transition-colors cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-500 transition-all">
                      <Icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
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
