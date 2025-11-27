import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Hardcode the API key here as well to ensure global availability if needed
      'process.env.API_KEY': JSON.stringify('AIzaSyB6BD8e6GkCD9oTZWv5-_Pmk2PXutHnhPM'),
    },
  };
});