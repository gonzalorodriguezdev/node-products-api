const express = require("express");

const {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productos.controllers");

const router = express.Router();

router.get("/", obtenerProductos);

router.get("/:id", obtenerProducto);

router.post("/", crearProducto);

router.put("/:id", actualizarProducto);

router.delete("/:id", eliminarProducto);

module.exports = router;
