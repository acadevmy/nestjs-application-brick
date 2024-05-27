import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  envPrefix: '{{applicationName.constantCase()}}_',
  envDir: '../..',
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      exportName: 'viteNodeApp',
      tsCompiler: 'swc',
      initAppOnBoot: true,
    }),
  ],
  optimizeDeps: {
    exclude: ['class-transformer', 'class-validator'],
  },
});
