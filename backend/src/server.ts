import express from "express";
import "./database/connection";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

//Query params http://localhost:3333/users?search=diego possivel concatenar com & ex: http://localhost:3333/users?search=diego&nome=diego
//Route params http://localhost:3333/users/diego

app.listen(3333);
