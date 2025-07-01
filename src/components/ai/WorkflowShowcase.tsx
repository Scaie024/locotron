import React from 'react';

interface WorkflowShowcaseProps {
  tools: string[];
  llms: string[];
}

export default function WorkflowShowcase({ tools, llms }: WorkflowShowcaseProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="block">Flujos de Trabajo</span>
          <span className="block text-amber-500">Impulsados por IA</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">1. Captura de Datos</h3>
            <p className="text-gray-600">
              {tools.join(' / ')} recopila información de múltiples fuentes
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">2. Procesamiento con IA</h3>
            <p className="text-gray-600">
              {llms.join(' / ')} analizan y enriquecen los datos
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">3. Acciones Automatizadas</h3>
            <p className="text-gray-600">
              Resultados integrados en tus sistemas
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ejemplo Real:</h3>
          <p className="mb-4">
            Cuando un cliente completa un formulario en Typeform:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>n8n captura los datos</li>
            <li>Claude 3 analiza las respuestas</li>
            <li>Se crea un registro en Airtable</li>
            <li>Se envía email personalizado via SendGrid</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
