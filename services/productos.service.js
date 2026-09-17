const productos = require("../data/productos");

function buscarPorId(id) {
  return productos.find((producto) => producto.id === id);
}

function obtenerTodos() {
  return productos;
}

function crear(nuevoProducto) {
  nuevoProducto.id = productos.length + 1;

  productos.push(nuevoProducto);

  return nuevoProducto;
}

function actualizar(id, datosActualizados) {
  const indice = productos.findIndex((p) => p.id === id);

  if (indice === -1) {
    return;
  }

  productos[indice].nombre = datosActualizados.nombre;
  productos[indice].precio = datosActualizados.precio;

  return productos[indice];
}

function eliminar(id) {
  const indice = productos.findIndex((producto) => producto.id === id);

  if (indice === -1) {
    return false;
  }

  productos.splice(indice, 1);

  return true;
}

module.exports = {
  buscarPorId,
  obtenerTodos,
  crear,
  actualizar,
  eliminar,
};
