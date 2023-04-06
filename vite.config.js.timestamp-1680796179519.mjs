// vite.config.js
import { defineConfig } from "file:///home/jortiz/Desktop/crc-simulator/node_modules/vite/dist/node/index.js";
import react from "file:///home/jortiz/Desktop/crc-simulator/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/jortiz/Desktop/crc-simulator";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__vite_injected_original_dirname, "./src/"),
      "@components": `${path.resolve(__vite_injected_original_dirname, "./src/components/")}`,
      "@utils": `${path.resolve(__vite_injected_original_dirname, "./src/utils")}`,
      "@public": `${path.resolve(__vite_injected_original_dirname, "./public/")}`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb3J0aXovRGVza3RvcC9jcmMtc2ltdWxhdG9yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9qb3J0aXovRGVza3RvcC9jcmMtc2ltdWxhdG9yL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2pvcnRpei9EZXNrdG9wL2NyYy1zaW11bGF0b3Ivdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQHNyYyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy8nKSxcbiAgICAgICdAY29tcG9uZW50cyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzLycpfWAsXG4gICAgICAnQHV0aWxzJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3V0aWxzJyl9YCxcbiAgICAgICdAcHVibGljJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcHVibGljLycpfWAsXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLFNBQVMsb0JBQW9CO0FBQ3JULE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUN4QyxlQUFlLEdBQUcsS0FBSyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzdELFVBQVUsR0FBRyxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2xELFdBQVcsR0FBRyxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==