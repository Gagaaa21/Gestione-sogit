import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      router: { entry: "router.tsx" },
      server: { entry: "server.ts" },
    }),
    nitro({ preset: "vercel" }),
    viteTsConfigPaths(),
    viteReact(),
  ],
});
