import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; 

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro({ preset: "vercel" }) // 👈 Tells Nitro to compile specifically for Vercel
    ],
  },
});