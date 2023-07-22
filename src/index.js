import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import dbService from "./dbService.js";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
const DB = new dbService();
dotenv.config();
const port = Number(process.env.PORT) || 5000;

const app = new Hono();
///MIDDLEWARES
app.use("*", cors());

app.onError((err, c) => {
  const path = c._path;
  console.log(c._path);
  const message = err.message;
  console.log(err);
  ///signup error
  if (path === "/signup") {
    if (message.includes("user.PRIMARY") && err.errno === 1062) {
      return c.json({ message: "Username is already in use." }, 406);
    }
    if (message.includes("user.email") && err.errno === 1062) {
      return c.json({ message: "Email is already in use." }, 406);
    }
    if (message.includes("Data too long")) {
      return c.json({ message: "More character than it is allowed." }, 406);
    }

    return c.json({ message: "There was an error on signup process." }, 400);
  }
  if (path === "/login") {
    return c.json({ message }, 406);
  }
  return c.json({ message: "There was an error." }, 400);
});
app.get("/:username", async (c) => {
  const file = await fs.readFile(path.resolve("src", "images", "image2.jfif"));
  return c.body(file, 200, { "content-type": "image/png" });
});

///POST REQUEST
app.post("/signup", async (c) => {
  const body = await c.req.json();
  await DB.signup(body);
  return c.json(body, 200);
});

app.post("/login", async (c) => {
  const body = await c.req.json();
  const DBresponse = await DB.login(body);
  console.log(DBresponse);
  return c.json(body, 200);
});

app.post("/profile", async (c) => {
  const body = await c.req.json();
  console.log(c.req.file);
  const username = body.username;
  const DBresponse = await DB.getUser(username);
  console.log(DBresponse);
  return c.json(DBresponse, 200);
});

app.post("/edit", async (c) => {
  const body1 = await c.req.parseBody();
  const body = body1.file;
  console.log(body);
  const timeStamp = Date.now();
  const file = await fs.readFile(path.resolve("src", "images", "image.jpeg"));
  ///////////////////////////
  for (const filename in body1) {
    console.log("hey there");
    const file = body[filename];

    const buffer = await body.arrayBuffer(file);
    console.log(buffer);

    await fs.writeFile(
      path.resolve("src", "images", timeStamp + body.name),
      Buffer.from(buffer)
    );
  }
  ///////////////////////////

  return c.json({ file }, 200);
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
