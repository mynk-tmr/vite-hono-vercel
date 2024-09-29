import "virtual:uno.css";
import "../index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { type APIOptions, PrimeReactProvider } from "primereact/api";
import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const primeConfig: Partial<APIOptions> = {
	ripple: true,
};

export const App = () => {
	return (
		<PrimeReactProvider value={primeConfig}>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	);
};
