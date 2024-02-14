import { Hono } from "hono";
import { ssr } from "./ssr/middleware";
import App from "./App";

const app = new Hono();
app.get("/", ssr(App));

export default app;
