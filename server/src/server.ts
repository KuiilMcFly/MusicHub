import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log("server started");
});
