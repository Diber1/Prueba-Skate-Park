import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { engine } from "express-handlebars";

// IMPORTACIÓN RUTAS
import { router as skaters } from "./routes/skaters.js";
import { router as views } from "./routes/views.js";
import { router as auth } from "./routes/auth.js";

// INSTANCIA servidor
const app = express();

// LOGGER para SERVIDOR
app.use(morgan("dev"));

// MIDDLEWARE para SUBIR ARCHIVOS
app.use(fileUpload());

// MIDDLEWARE para RECIBIR JSON
app.use(express.json());

// USO ARCHIVOS ESTÁTICOS
app.use(express.static("static"));

// DEFINIR MOTOR DE VISTAS
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// REGISTRAR RUTAS
app.use("/", views);
app.use("/skaters", skaters);
app.use("/auth", auth);

app.listen(3000, () => {
  console.log("App escuchando el puerto 3000");
});
