import React from 'react';

interface ServiceTier {
  title: string;
  description: string;
  features: string[];
  price?: string;
}

interface ServiceTiersProps {
  tiers: ServiceTier[];
}

const ServiceTiers: React.FC<ServiceTiersProps> = ({ tiers }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">{tier.title}</h3>
            <p className="text-gray-600 mb-4">{tier.description}</p>
            
            <ul className="space-y-2 mb-6">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="bg-gray-500 hover:bg-gray-600 text-white w-full py-2 rounded-lg transition-colors">
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTiers;
