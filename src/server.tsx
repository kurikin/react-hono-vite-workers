import { Hono } from "hono";
import ReactDomServer from "react-dom/server";
import App from "./App";

const app = new Hono();
app.get("/", (c) => {
  const page = ReactDomServer.renderToString(<App />);
  return c.html(page);
});
