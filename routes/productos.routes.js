const express = require("express");

const validarProducto = require("../middlewares/validarProducto");

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

router.post("/", validarProducto, crearProducto);

router.put("/:id", validarProducto, actualizarProducto);

router.delete("/:id", eliminarProducto);

module.exports = router;
