import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        cssCodeSplit: false, //false value will split to separate css file
        lib: {
            entry: "./src/EditableInputPlugin.js",
            formats: ["es","cjs"],
            name: "EditableInputPlugin",
            fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        },
    }
})