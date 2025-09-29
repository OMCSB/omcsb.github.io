import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8200,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          // Split animation library
          animations: ['framer-motion', 'gsap', '@gsap/react', 'motion'],
          // Split UI libraries
          ui: ['lucide-react', '@radix-ui/react-tooltip', 'next-themes', 'react-icons', 'daisyui', 'sonner'],
          // Split WebGL libraries
          webgl: ['ogl'],
          // Split utility libraries
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
          // Split routing
          routing: ['react-router-dom'],
          // Split data fetching
          query: ['@tanstack/react-query']
        }
      }
    },
    // Increase chunk size warning limit to 1MB for better UX
    chunkSizeWarningLimit: 1000,
  },
});
