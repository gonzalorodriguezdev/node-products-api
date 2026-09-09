const http = require("http");
const { type } = require("os");

const productos = [
  {
    id: 1,
    nombre: "Mouse",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 150,
  },
];

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url);
  const partes = req.url.split("/");
  const id = Number(partes[2]);

  const productoEncontrado = productos.find((producto) => producto.id === id);

  if (req.url === "/") {
    res.end("Bienvenido");
  } else if (req.url === "/productos" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(productos));
  } else if (req.url === "/productos" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const nuevoProducto = JSON.parse(body);

      if (
        typeof nuevoProducto.nombre !== "string" ||
        typeof nuevoProducto.precio !== "number"
      ) {
        res.statusCode = 400;
        return res.end("Datos invalidos");
      }

      console.log(nuevoProducto);
      console.log(typeof nuevoProducto);

      nuevoProducto.id = productos.length + 1;

      productos.push(nuevoProducto);

      res.statusCode = 201;
      res.setHeader("Content-Type", "applicantion/json");
      res.end(JSON.stringify(nuevoProducto));
    });
  } else if (req.url === "/usuarios") {
    res.end("Lista de usuarios");
  } else if (productoEncontrado == null) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Producto no encontrado" }));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(productoEncontrado));
  }
});

servidor.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
