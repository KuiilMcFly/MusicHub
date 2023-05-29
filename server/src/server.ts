import express from "express";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();
app.use(express.json());


app.post("/user", createNewUser);
app.post("/signin", signin);

app.use("/api", protect, router);

export default app;