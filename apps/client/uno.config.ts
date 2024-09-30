import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
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
	transformers: [transformerDirectives(), transformerVariantGroup()],
	variants: [
		(matcher) =>
			varBuild(matcher, "hocus:", ["hover", "focus-visible", "active"]),
	],
});

/* helper functions */

function varBuild(matcher: string, sel: string, arr: string[]) {
	if (!matcher.startsWith(sel)) return matcher;
	return {
		matcher: matcher.slice(sel.length),
		selector: (s) => arr.map((a) => `${s}:${a}`).join(","),
	};
}
