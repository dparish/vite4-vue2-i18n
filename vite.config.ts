import {defineConfig} from 'vite';
import Vue2 from '@vitejs/plugin-vue2';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    plugins: [
        Vue2(),
        VueI18nPlugin({bridge: true, compositionOnly: false}),
    ],
});
