import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  // For GitHub Pages on a project site, set base to "/<repo>/"
  // If you use a user/organization site, change base to "/"
  base: '/ameritas-vite-app/',
  plugins: [svgr(), react()],
})
