import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import dbService from "./dbService.js";
import dotenv from "dotenv";
const DB = new dbService();
dotenv.config();
const port = Number(process.env.PORT) || 5000;

const app = new Hono();
app.use("*", cors());

app.onError((err, c) => {
  console.log(err);
  const message = err.message;
  if (err.message.includes("user.PRIMARY") && err.errno === 1062) {
    console.log("duplicate data erroru ve username eroru");
  }
  if (err.message.includes("user.email") && err.errno === 1062) {
    console.log("duplicate data erroru ve email eroru");
  }

  return c.json({ message: "Error sent from onError" }, 500);
});

app.post("/signup", async (c) => {
  const body = await c.req.json();
  const dbResponse = await DB.signup(body);
  console.log("DB RESPONSE:", dbResponse);
  return c.json(body, 201);
});

serve(
  {
    fetch: app.fetch,
    port: port,
  },
  (connection) => {
    console.log(`listenin on ${connection.port}`);
  }
);
