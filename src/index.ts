import { serve } from "@hono/node-server";
import { Hono } from "hono";
import book from "./bookRouter/bookRouter";
const app = new Hono();

app.route("/book", book);

serve({
  fetch: app.fetch,
  port: 8000,
});
