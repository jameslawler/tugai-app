import { Hono } from "hono";

import auth from "./auth";

const api = new Hono<{ Bindings: CloudflareBindings }>();

api.route("/auth", auth);

api.get("/ping", (c) => {
  return c.html(<b>Pong</b>);
});

export default api;
