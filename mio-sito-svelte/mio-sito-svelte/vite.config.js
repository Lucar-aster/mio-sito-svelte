import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  base: "/mio-sito-svelte/",  // Cambia con il nome del tuo repository
});
