import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WorkshopPage = () => {
  // Function to open WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/525535913417`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sé más eficiente con IA</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transforma tu operación diaria con nuestro workshop práctico de inteligencia artificial
            </p>
            <button 
              onClick={openWhatsApp}
              className="mt-4 bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Solicitar información
            </button>
          </div>
        </section>

        {/* Descripción General */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Descripción General</h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-700 mb-4">
                  “Sé más eficiente con IA” es un workshop práctico, diseñado para que las empresas adopten la inteligencia artificial como herramienta de apoyo operativo. A través de una metodología estructurada y adaptada a cada industria, ayudamos a incorporar soluciones accesibles que aumentan la productividad y reducen el esfuerzo manual.
                </p>
                <p className="text-lg text-gray-700">
                  Este workshop cierra la brecha entre el conocimiento teórico y la aplicación real, sin necesidad de conocimientos técnicos previos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objetivo del Workshop */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Objetivo del Workshop</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl text-teal-500 mb-4">1</div>
                  <p className="text-lg text-gray-700">Integrar herramientas de IA en procesos operativos cotidianos.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl text-teal-500 mb-4">2</div>
                  <p className="text-lg text-gray-700">Aumentar la eficiencia sin inversiones costosas ni reestructuras.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl text-teal-500 mb-4">3</div>
                  <p className="text-lg text-gray-700">Reducir la brecha entre perfiles junior y senior mediante el uso de IA como apoyo estratégico.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="text-4xl text-teal-500 mb-4">4</div>
                  <p className="text-lg text-gray-700">Fomentar una cultura organizacional más ágil, ordenada y escalable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Metodología</h2>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">1</span>
                    Assessment previo
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Análisis del sector, procesos clave y actividades repetitivas.</li>
                    <li>Identificación de áreas con potencial de mejora inmediata.</li>
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">2</span>
                    Workshop personalizado (2 a 4 horas)
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Explicación práctica sobre aplicaciones reales de la IA.</li>
                    <li>Casos de uso por industria y tipo de rol.</li>
                    <li>Demostración de herramientas gratuitas y dinámicas de aplicación inmediata.</li>
                    <li>Recomendaciones específicas de implementación.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3">3</span>
                  Kit de implementación
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Repositorio de herramientas y flujos operativos.</li>
                  <li>Materiales de apoyo descargables y grabación de la sesión.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Aprendizajes Clave */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Aprendizajes Clave</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    <th className="py-4 px-6 text-left font-bold">Competencia</th>
                    <th className="py-4 px-6 text-left font-bold">Enfoque</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Aplicación práctica de IA</td>
                    <td className="py-4 px-6">Uso de herramientas para asistir tareas administrativas y operativas.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Organización con IA</td>
                    <td className="py-4 px-6">Gestión eficiente de información y documentación.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Automatización simple</td>
                    <td className="py-4 px-6">Tareas automatizadas con plataformas no-code.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Operación asistida</td>
                    <td className="py-4 px-6">Cambio del enfoque manual a procesos optimizados con IA.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Público Objetivo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Público Objetivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-100">
                <p className="text-lg text-gray-700">Empresas en transformación digital.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-100">
                <p className="text-lg text-gray-700">Equipos con alta carga operativa o procesos manuales.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-100">
                <p className="text-lg text-gray-700">Líderes que buscan mejorar la toma de decisiones con IA.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-100">
                <p className="text-lg text-gray-700">Organizaciones que aún utilizan herramientas básicas como Excel y correo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicaciones por Área */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Aplicaciones por Área</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    <th className="py-4 px-6 text-left font-bold">Área</th>
                    <th className="py-4 px-6 text-left font-bold">Ejemplos de uso de IA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Administración</td>
                    <td className="py-4 px-6">Automatización de reportes y seguimiento de tareas.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Finanzas</td>
                    <td className="py-4 px-6">Generación de presupuestos y conciliaciones básicas.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Ventas y CRM</td>
                    <td className="py-4 px-6">Segmentación, análisis de oportunidades y generación de propuestas.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Soporte</td>
                    <td className="py-4 px-6">Atención automatizada y documentación rápida.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Dirección</td>
                    <td className="py-4 px-6">Apoyo estratégico y generación automática de informes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Incluye */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Incluye</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment previo personalizado</h3>
                  <p className="text-gray-700">Análisis específico de tu empresa para identificar oportunidades de mejora.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Workshop práctico</h3>
                  <p className="text-gray-700">Demostraciones en vivo y dinámicas interactivas para aplicar inmediatamente.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Acceso a grabación y materiales</h3>
                  <p className="text-gray-700">Recursos descargables y grabación de la sesión para repasar en cualquier momento.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Repositorio de herramientas</h3>
                  <p className="text-gray-700">Lista curada de herramientas de IA gratuitas y de pago recomendadas.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-md border border-teal-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recomendaciones por rol</h3>
                  <p className="text-gray-700">Guías específicas para cada función en tu organización.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formato y Logística */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Formato y Logística</h2>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Modalidad:</span> Presencial u online en vivo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Duración:</span> 2 a 4 horas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Idioma:</span> Español.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Requisitos:</span> Computadora con acceso a internet (en línea).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span><span className="font-semibold">Cupo ideal:</span> Hasta 20 personas por sesión.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resultado esperado */}
        <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultado esperado</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Al finalizar el workshop, tu equipo contará con al menos tres herramientas activadas, un flujo operativo mejorado y una visión clara de cómo escalar su productividad mediante IA.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Agendar Workshop
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopPage;
