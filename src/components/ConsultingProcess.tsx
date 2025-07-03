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
    <div className="space-y-12 py-8">
      <h2 className="text-3xl font-bold text-center mb-10">Nuestro Proceso de Consultoría</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-1/2 px-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-2">Paso {step.step}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10">
              {step.step}
            </div>
            
            <div className="w-1/2 px-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultingProcess;
