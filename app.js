const express = require("express");

const logger = require("./middlewares/logger");

const manejarErrores = require("./middlewares/manejarErrores");

const productosRouter = require("./routes/productos.routes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/productos", productosRouter);

app.use((req, res) => {
  return res.status(404).send("Ruta no encontrada");
});

app.use(manejarErrores);

app.listen(3000, () => {
  console.log("Servidor Express funcionando en http://localhost:3000");
});
