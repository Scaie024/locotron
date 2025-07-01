import React from 'react';

const Privacidad = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Aviso de Privacidad</h1>
    <p className="mb-4">En scAIe, la privacidad de nuestros usuarios es de suma importancia. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Información que Recopilamos</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Datos de contacto: nombre, correo electrónico, teléfono.</li>
      <li>Información de empresa y cargo.</li>
      <li>Datos proporcionados a través de formularios.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Uso de la Información</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Responder a tus consultas y solicitudes.</li>
      <li>Enviar información relevante sobre nuestros servicios.</li>
      <li>Mejorar la experiencia del usuario y nuestros servicios.</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Protección de Datos</h2>
    <p className="mb-4">Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones o divulgación.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Derechos ARCO</h2>
    <p className="mb-4">Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición enviando un correo a <a href="mailto:contacto@scaie.com" className="text-blue-600 underline">contacto@scaie.com</a>.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Cambios al Aviso</h2>
    <p className="mb-4">Nos reservamos el derecho de modificar este aviso en cualquier momento. Los cambios serán publicados en este sitio web.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contacto</h2>
    <p>Si tienes dudas sobre este aviso, contáctanos en <a href="mailto:contacto@scaie.com" className="text-blue-600 underline">contacto@scaie.com</a>.</p>
  </div>
);

export default Privacidad; 