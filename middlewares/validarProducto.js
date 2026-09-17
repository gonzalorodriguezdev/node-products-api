function validarProducto(req, res, next) {
  const producto = req.body;

  if (
    typeof producto.nombre !== "string" ||
    typeof producto.precio !== "number"
  ) {
    return res.status(400).send("Datos inválidos");
  }

  next();
}

module.exports = validarProducto;
