const {
  buscarPorId,
  obtenerTodos,
  crear,
  actualizar,
  eliminar,
} = require("../services/productos.service");

function obtenerProductos(req, res) {
  res.json(obtenerTodos());
}

function obtenerProducto(req, res) {
  const id = Number(req.params.id);

  const productoE = buscarPorId(id);

  if (!productoE) {
    return res.status(404).send("Producto no encontrado");
  }
  res.json(productoE);
}

function crearProducto(req, res) {
  const nuevoProducto = req.body;

  if (
    typeof nuevoProducto.nombre !== "string" ||
    typeof nuevoProducto.precio !== "number"
  ) {
    return res.status(400).send("Datos inválidos");
  }
  const productoCreado = crear(nuevoProducto);

  res.status(201).json(productoCreado);
}

function actualizarProducto(req, res) {
  const id = Number(req.params.id);

  const datosActualizados = req.body;

  if (
    typeof datosActualizados.nombre !== "string" ||
    typeof datosActualizados.precio !== "number"
  ) {
    return res.status(400).send("Datos inválidos");
  }
  const resultado = actualizar(id, datosActualizados);

  if (!resultado) {
    return res.status(404).send("Producto no encontrado");
  }

  res.json(resultado);
}

function eliminarProducto(req, res) {
  const id = Number(req.params.id);

  const resultado = eliminar(id);

  if (!resultado) {
    return res.status(404).send("Producto no encontrado");
  }

  res.send("Producto eliminado");
}

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerProducto,
};
