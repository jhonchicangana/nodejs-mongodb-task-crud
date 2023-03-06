// CONFIGURA APP

import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";
//import nodemon from "nodemon";


const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs",
    create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);

app.set ('view engine', '.hbs')

// middLewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Routes
app.use(indexRoutes);

// ARCHIVOS ESTATICOS = static para css

app.use(express.static(path.join(__dirname,"public")));

export default app;
