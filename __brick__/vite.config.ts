import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: {{port}},
  },
  preview: {
    port: {{port}},
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
