import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: '/green-mecc-site/',
      server: {
        port: 6831,
        host: '0.0.0.0',
      },
      plugins: [react()],
    };
});
