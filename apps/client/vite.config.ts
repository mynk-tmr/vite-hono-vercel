import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
	plugins: [UnoCSS(), TanStackRouterVite(), react()],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	build: {
		outDir: "../../dist",
		emptyOutDir: true,
	},
});
