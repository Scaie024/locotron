import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function AiHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Automatización con <span className="text-amber-400">Agentes de IA</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Conectamos LLMs con n8n, Make y Vercel para crear flujos de trabajo inteligentes
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['n8n', 'Make', 'Vercel', 'GPT-4', 'Claude', 'Llama3'].map(tool => (
            <Badge 
              key={tool}
              className="px-4 py-2 text-lg bg-gray-800 hover:bg-gray-700"
            >
              {tool}
            </Badge>
          ))}
        </div>
        
        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all">
          Ver Demo Interactiva
        </button>
      </div>
    </section>
  );
}
