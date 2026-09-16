const express = require("express");

const productosRouter = require("./routes/productos.routes");

const app = express();

app.use(express.json());

app.use("/productos", productosRouter);

app.listen(3000, () => {
  console.log("Servidor Express funcionando en http://localhost:3000");
});
