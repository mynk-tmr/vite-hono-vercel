import { createFileRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";

export const Route = createFileRoute("/")({
	component: () => <Button label="Home" />,
});
