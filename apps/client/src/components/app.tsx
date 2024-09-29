import "virtual:uno.css";
import "../index.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export const App = () => {
	return (
		<PrimeReactProvider>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	);
};
