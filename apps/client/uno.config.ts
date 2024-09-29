import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
			},
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: {
					name: "Inter",
					weights: [400, 500, 700],
				},
			},
		}),
	],
	transformers: [transformerDirectives()],
});
