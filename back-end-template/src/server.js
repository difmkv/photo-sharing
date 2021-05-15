import express from "express";
import admin from "firebase-admin";
import fileUpload from "express-fileupload";

import { db } from "./db";
import credentials from "./credentials.json";
import { routes, protectRouteMiddleware } from "./routes";

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use(express.static(__dirname + "/uploads/"));
app.use(fileUpload());
app.use(express.json());

routes.forEach((route) => {
  app[route.method](route.path, protectRouteMiddleware, route.handler);
});

const start = async () => {
  await db.connect("mongodb://localhost:27017");
  app.listen(8080, () => {
    console.log("Server is listening on port 8080");
  });
};

start();
