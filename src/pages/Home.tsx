import React from 'react';
import { Card } from '../components/Card';
import { cardsData } from '../data/cards';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80')] opacity-5 dark:opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Frontend Assessment Test</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">React.js</span> Today
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto mb-10">
            Explore our comprehensive curriculum designed to take you from beginner to advanced React developer using modern practices, hooks, and component-based architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Topics</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Dive into our structured learning paths and master every aspect of React development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
};
