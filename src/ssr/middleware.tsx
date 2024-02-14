import ReactDomServer from "react-dom/server";
import { JSX } from "react";
import type { MiddlewareHandler } from "hono";

type SSRElement = () => JSX.Element;

export const ssr = (App: SSRElement): MiddlewareHandler => {
  return async (c) => {
    const page = ReactDomServer.renderToString(<App />);
    return c.html(page);
  };
};
