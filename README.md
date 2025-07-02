# 🚀 scAIe - Consultoría Tecnológica Estratégica

Una landing page moderna y profesional para scAIe, empresa de consultoría tecnológica especializada en transformación digital, automatización e inteligencia artificial.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y profesional con gradientes y animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Navegación Fluida**: React Router con lazy loading para mejor rendimiento
- **Componentes Reutilizables**: Arquitectura modular con shadcn/ui
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y contraste adecuado

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Animations**: CSS animations + Framer Motion

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, o pnpm

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Scaie024/nuevaLanding.git
cd nuevaLanding
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

## 📁 Estructura del Proyecto

```
nuevaLanding/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── ui/            # Componentes de UI (shadcn/ui)
│   │   ├── layout/        # Componentes de layout
│   │   └── sections/      # Secciones de la página
│   ├── pages/             # Páginas de la aplicación
│   ├── lib/               # Utilidades y configuración
│   ├── hooks/             # Custom hooks
│   └── styles/            # Estilos globales
├── index.html             # HTML principal
├── vite.config.ts         # Configuración de Vite
├── tailwind.config.ts     # Configuración de Tailwind
└── package.json           # Dependencias y scripts
```

## 🎨 Diseño y Branding

### Paleta de Colores
- **Primario**: Gris neutro (#6B7280)
- **Secundario**: Azul principal (#458FE8)
- **Acento**: Verde (#00a86b)
- **Fondo**: Gradiente suave (#f5f5f5 → #C0E0FF)

### Tipografía
- **Principal**: Inter (Google Fonts)
- **Secundaria**: Poppins (Google Fonts)

## 📱 Páginas y Secciones

### Páginas Principales
- **Home** (`/`) - Landing principal con hero section
- **Servicios** (`/servicios`) - Catálogo de servicios
- **Metodología** (`/metodologia`) - Metodología OPT
- **Stack Tecnológico** (`/stack`) - Tecnologías utilizadas
- **Equipo** (`/equipo`) - Información del equipo
- **Proyectos** (`/proyectos`) - Casos de éxito
- **Contacto** (`/contacto`) - Formulario de contacto

### Secciones Destacadas
- Hero Section con CTA principal
- Beneficios y características
- Proceso de trabajo
- Estadísticas y métricas
- Casos de éxito
- Formulario de contacto

## 🔧 Configuración

### Variables de Entorno
```env
VITE_API_URL=your_api_url_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

### Personalización
- **Colores**: Editar `src/lib/theme.ts`
- **Estilos**: Modificar `src/index.css`
- **Componentes**: Personalizar en `src/components/`

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Netlify
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Subir contenido de /dist a gh-pages branch
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: contacto@scaie.com
- **LinkedIn**: [scAIe](https://linkedin.com/company/scaie)
- **Website**: [scaie.com](https://scaie.com)

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los componentes de UI
- [Tailwind CSS](https://tailwindcss.com/) por el framework de CSS
- [Vite](https://vitejs.dev/) por el build tool
- [React](https://reactjs.org/) por el framework de JavaScript

---

⭐ **Si este proyecto te ayuda, considera darle una estrella en GitHub!**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Scaie024/nuevaLanding)

[![GitHub last commit](https://img.shields.io/github/last-commit/Scaie024/nuevaLanding)](https://github.com/Scaie024/nuevaLanding)

## GitHub Repository

https://github.com/Scaie024/nuevaLanding
