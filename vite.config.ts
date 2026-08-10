import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this site from https://sreejavuyyala.github.io/sreeja-portfolio/,
  // so every asset URL must be prefixed with the repo name. If you ever rename the repo
  // to `<username>.github.io` (a user/organization Pages site), change this back to '/'.
  base: '/sreeja-portfolio/',
})
