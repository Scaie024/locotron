import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CaseStudy {
  title: string;
  result: string;
  tools: string[];
}

interface CaseStudiesProps {
  cases: CaseStudy[];
}

export default function CaseStudies({ cases }: CaseStudiesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="block">Casos de Éxito</span>
          <span className="block text-amber-500">Reales</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-lg mb-4">
                <span className="font-bold text-amber-600">{caseStudy.result}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map(tool => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
