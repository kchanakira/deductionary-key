import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/deductionary-key',
    plugins: [
        tailwindcss(),
    ],
});
