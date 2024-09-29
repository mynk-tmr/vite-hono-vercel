import type { HonoApp } from "server";
import { hc } from "hono/client";

const { api } = hc<HonoApp>(
	import.meta.env.PROD ? import.meta.env.BASE_URL : "http://localhost:3000",
);
