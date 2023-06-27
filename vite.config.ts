// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   // plugins: [react()],
//   optimizeDeps: {
//     esbuildOptions: {
//       resolveExtensions: ['.web.js', '.js', '.ts', '.web.ts','.web.tsx', '.tsx', '.jsx'],
//     },
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       'react-native': 'react-native-web',
//     },
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    port:5173
  },
  define: {
    global: "window",
  },
  optimizeDeps: {
    include: ["@react-navigation/native"],
    esbuildOptions: {
      mainFields: ["module", "main"],
      resolveExtensions: [".web.js", ".js", ".ts"],
    },
  },
  resolve: {
    extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
    alias: {
      "react-native": "react-native-web",
    },
  },
  plugins: [
    react()
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})