const express = require("express");

const router = express.Router();

const productos = [
  { id: 1, nombre: "Mouse", precio: 100 },
  { id: 2, nombre: "Teclado", precio: 150 },
];

router.get("/", (req, res) => {
  res.json(productos);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const productoE = productos.find((p) => p.id === id);

  if (!productoE) {
    return res.status(404).send("Producto no encontrado");
  }
  res.json(productoE);
});

router.post("/", (req, res) => {
  const nuevoProducto = req.body;

  if (
    typeof nuevoProducto.nombre !== "string" ||
    typeof nuevoProducto.precio !== "number"
  ) {
    return res.status(400).send("Datos inválidos");
  }
  nuevoProducto.id = productos.length + 1;

  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const indice = productos.findIndex((p) => p.id === id);

  if (indice === -1) {
    return res.status(404).send("Producto no encontrado");
  }

  const datosActualizados = req.body;

  if (
    typeof datosActualizados.nombre !== "string" ||
    typeof datosActualizados.precio !== "number"
  ) {
    return res.status(400).send("Datos inválidos");
  }

  productos[indice].nombre = datosActualizados.nombre;
  productos[indice].precio = datosActualizados.precio;

  res.json(productos[indice]);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const indice = productos.findIndex((producto) => producto.id === id);

  if (indice === -1) {
    return res.status(404).send("Producto no encontrado");
  }

  productos.splice(indice, 1);

  res.send("Producto eliminado");
});

module.exports = router;
