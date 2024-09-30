import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<button type="button">
				Click me <i className="i-tabler-hand-click" />{" "}
			</button>
			<Outlet />
		</>
	),
});
