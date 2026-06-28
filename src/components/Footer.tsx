import React from 'react';
import { Code2, Globe, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">ReactMastery</span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
            &copy; {new Date().getFullYear()} ReactMastery Assessment. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="sr-only">Website</span>
              <Globe className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="sr-only">Location</span>
              <MapPin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
