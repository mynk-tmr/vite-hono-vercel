import {
	defineConfig,
	presetIcons,
	presetUno,
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
	],
	transformers: [transformerDirectives()],
	content: {
		pipeline: {
			include: [
				/(.*\/)primereact(.*)\.(c|m)?(js)(x?)$/, // PrimeReact
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // Default
			],
		},
	},
});
