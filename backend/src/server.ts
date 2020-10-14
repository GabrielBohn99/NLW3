import express from "express";
import "express-async-errors";
import path from "path";
import cors from "cors";

import "./database/connection";

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

//Query params http://localhost:3333/users?search=diego possivel concatenar com & ex: http://localhost:3333/users?search=diego&nome=diego
//Route params http://localhost:3333/users/diego

app.listen(3333);
