// @lovable.dev/vite-tanstack-config bundles the following plugins — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { PluginOption } from "vite";

// Removes the bundled vite-tsconfig-paths plugin so Vite uses native tsconfigPaths
// resolution and suppresses the deprecation warning.
const removeTsconfigPathsPlugin = {
  name: "remove-tsconfig-paths",
  enforce: "pre" as const,
  config(config: { plugins?: PluginOption[] }) {
    if (Array.isArray(config.plugins)) {
      config.plugins = config.plugins.filter(
        (p: unknown) =>
          !(
            p &&
            typeof p === "object" &&
            "name" in p &&
            (p as { name: string }).name === "vite-tsconfig-paths"
          ),
      );
    }
  },
};

export default defineConfig({
  plugins: [removeTsconfigPathsPlugin],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      // Use Vite's native tsconfig path resolution instead of the vite-tsconfig-paths plugin
      tsconfigPaths: true,
    },
  },
});
