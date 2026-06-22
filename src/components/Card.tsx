import React from 'react';
import type { CardData } from '../data/cards';
import { Button } from './Button';

interface CardProps {
  card: CardData;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="glass group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-primary/20 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={card.image} 
          alt={card.title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{card.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">{card.description}</p>
        
        <Button className="w-full mt-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          Learn More
        </Button>
      </div>
    </div>
  );
};
