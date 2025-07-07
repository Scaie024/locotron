import React from 'react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ConsultingProcessProps {
  steps: ProcessStep[];
}

const ConsultingProcess: React.FC<ConsultingProcessProps> = ({ steps }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso de Consultoría</h2>
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 rounded"></div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex items-start md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:px-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Paso {step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {/* Timeline Circle */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold ring-8 ring-gray-50">
                  {step.step}
                </div>
              </div>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-1/2 px-8"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingProcess;
