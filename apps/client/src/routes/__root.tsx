import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";

export const Route = createRootRoute({
	component: () => (
		<>
			<Button label="hello" icon={<i className="i-tabler-hand-click" />} />
			<Outlet />
		</>
	),
});
