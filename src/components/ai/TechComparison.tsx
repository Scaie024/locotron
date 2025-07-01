import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const comparisonData = [
  {
    feature: 'Integración LLMs',
    scaie: '✅ Completa',
    zapier: '✅ Básica',
    make: '✅ Avanzada',
    n8n: '✅ Avanzada'
  },
  {
    feature: 'Precio',
    scaie: 'Personalizado',
    zapier: '$$$',
    make: '$$',
    n8n: '$ (open-source)'
  },
  {
    feature: 'Conectores',
    scaie: '500+',
    zapier: '3000+',
    make: '1000+',
    n8n: '300+'
  },
  {
    feature: 'Customización',
    scaie: 'Total',
    zapier: 'Limitada',
    make: 'Media',
    n8n: 'Alta'
  }
];

export default function TechComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="block">¿Por qué elegir</span>
          <span className="block text-amber-500">nuestra solución?</span>
        </h2>
        
        <Table className="bg-white rounded-lg overflow-hidden shadow">
          <TableHeader>
            <TableRow>
              <TableHead>Característica</TableHead>
              <TableHead>scAIe</TableHead>
              <TableHead>Zapier</TableHead>
              <TableHead>Make</TableHead>
              <TableHead>n8n</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className="text-amber-600 font-bold">{row.scaie}</TableCell>
                <TableCell>{row.zapier}</TableCell>
                <TableCell>{row.make}</TableCell>
                <TableCell>{row.n8n}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6">
            Combinamos lo mejor de cada plataforma con nuestra experiencia en IA
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
            Comparar Planes
          </button>
        </div>
      </div>
    </section>
  );
}
