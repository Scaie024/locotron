import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    cors: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: [
            'cmdk',
            'lucide-react',
            'react-resizable-panels',
            'sonner',
            'vaul',
            'tailwind-merge',
            'tailwindcss-animate',
            'class-variance-authority',
            'clsx',
            'next-themes',
          ],
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
          charts: ['recharts'],
          forms: ['@hookform/resolvers', 'react-hook-form', 'zod'],
          pickers: ['react-day-picker', 'date-fns'],
          carousel: ['embla-carousel-react'],
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tooltip',
      'lucide-react'
    ],
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  define: {
    'process.env': {}
  }
});
