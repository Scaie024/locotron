import React from 'react';

const WorkshopSection = () => {
  // Function to open WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/525535913417`, '_blank');
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sé más eficiente con IA</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Transforma tu operación diaria con nuestro workshop práctico de inteligencia artificial
          </p>
          <button 
            onClick={openWhatsApp}
            className="mt-4 bg-white text-gray-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105"
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
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg">
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Objetivo del Workshop</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="text-4xl text-gray-600 mb-4">1</div>
                <p className="text-lg text-gray-700">Integrar herramientas de IA en procesos operativos cotidianos.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="text-4xl text-gray-600 mb-4">2</div>
                <p className="text-lg text-gray-700">Aumentar la eficiencia sin inversiones costosas ni reestructuras.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="text-4xl text-gray-600 mb-4">3</div>
                <p className="text-lg text-gray-700">Reducir la brecha entre perfiles junior y senior mediante el uso de IA como apoyo estratégico.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="text-4xl text-gray-600 mb-4">4</div>
                <p className="text-lg text-gray-700">Fomentar la autonomía y la resolución de problemas complejos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A quién está dirigido */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿A quién está dirigido?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresas</h3>
                <p className="text-gray-700">Organizaciones que buscan optimizar su operación y reducir costos.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipos</h3>
                <p className="text-gray-700">Grupos de trabajo que necesitan herramientas para ser más eficientes.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Profesionales</h3>
                <p className="text-gray-700">Individuos que desean mejorar su productividad y valor en el mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del Workshop */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Contenido del Workshop</h2>
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Módulo 1: Fundamentos de IA para la Productividad</h3>
                <p className="text-gray-700">Introducción a los conceptos clave de la IA y su aplicación en el entorno laboral.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Módulo 2: Herramientas Prácticas</h3>
                <p className="text-gray-700">Exploración y uso de herramientas de IA para automatización, análisis y comunicación.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Módulo 3: Creación de Flujos de Trabajo Inteligentes</h3>
                <p className="text-gray-700">Diseño de un plan de integración de IA adaptado a los procesos de tu empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiales Incluidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Materiales Incluidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manual de implementación</h3>
                <p className="text-gray-700">Guía paso a paso para aplicar lo aprendido en tu día a día.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Repositorio de herramientas</h3>
                <p className="text-gray-700">Lista curada de herramientas de IA gratuitas y de pago recomendadas.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recomendaciones por rol</h3>
                <p className="text-gray-700">Guías específicas para cada función en tu organización.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formato y Logística */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Formato y Logística</h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl shadow-lg border border-gray-200">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span><span className="font-semibold">Modalidad:</span> Presencial u online en vivo.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span><span className="font-semibold">Duración:</span> 2 a 4 horas.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span><span className="font-semibold">Idioma:</span> Español.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span><span className="font-semibold">Requisitos:</span> Computadora con acceso a internet (en línea).</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                  <span><span className="font-semibold">Cupo ideal:</span> Hasta 20 personas por sesión.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultado esperado */}
      <section className="py-16 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultado esperado</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Al finalizar el workshop, tu equipo contará con al menos tres herramientas activadas, un flujo operativo mejorado y una visión clara de cómo escalar su productividad mediante IA.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-gray-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Agendar Workshop
          </button>
        </div>
      </section>
    </main>
  );
};

export default WorkshopSection;
