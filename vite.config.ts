// @ts-nocheck
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path = require('path');
//按需加载
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
//给html.index添加模板变量解析
import { minifyHtml, injectHtml } from 'vite-plugin-html';

/**
 * 获取vite打包环境模式
 */
function GetViteMode() {
  const modeIndex = process.argv.findIndex(v => v === '--mode') + 1;
  const mode = process.argv[modeIndex];
  return mode;
}

const mode = GetViteMode();

let i = 0;

const basePath = '/';
const isProd = mode === 'production';
console.log('isProd:', isProd, '\r\nmode:', mode);

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    vue(),
    Components({
      // 研究配置
      // ui库解析器，也可以自定义
      resolvers: [
        VantResolver(),
      ],
    }),
    minifyHtml(),
    injectHtml({
      data: {
        title: '月夜柳箫',
        isProd: isProd,
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4200,
  },
  build: {
    outDir: 'dist/sote-home',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: isProd,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 1024, //单个文件限制大小
    rollupOptions: {
      output: {
        manualChunks(path) {
          const nameStr = `${i++}_${new Date().getTime().toString()}`;
          return nameStr;
        }
      }
    }
  },
});
