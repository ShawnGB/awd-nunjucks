import "dotenv/config";
import express from "express";
import { indexHandler } from "./handler/indexhandler";
import nunjucks from "nunjucks";

const app = express();

const port = process.env.PORT || 3030;

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");
app.get("/", indexHandler);

app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
