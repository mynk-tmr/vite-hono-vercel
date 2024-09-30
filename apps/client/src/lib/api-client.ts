import { hc } from "hono/client";
import type { HonoApp } from "server";

const { api } = hc<HonoApp>(
	import.meta.env.PROD ? import.meta.env.BASE_URL : "http://localhost:3000",
);
