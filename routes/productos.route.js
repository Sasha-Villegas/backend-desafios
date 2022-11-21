import { Router } from "express";
const routerProductos = Router();
const products = [
  {
    title: "nombre del producto",
    price: "precio",
    thumbnail: "url al logo o foto del producto",
    id: 1,
  },
];

//obtener array de productgos
routerProductos.get("/", (req, res) => {
  res.json(products);
});

//agregar un nuevo producto
routerProductos.post("/", (req, res) => {
  const { tittle, price, thumbnail } = req.body;
  const obj = {
    tittle,
    price,
    thumbnail,
    id: products.length + 1,
  };
  products.push(obj);
  res.status(201).json(obj);
  console.log(obj);
});

//consultar por un producto especifico del array
routerProductos.get("/:id", (req, res) => {
  const { id } = req.params;
  const verify = products.some((e) => e.id == Number(id));
  let result;
  let status;
  verify
    ? ((result = products.find((e) => e.id == Number(id))), (status = 200))
    : ((result = { error: "producto no encontrado" }), (status = 404));
  res.status(status).json(result);
});

// actualizar un producto del array
routerProductos.put("/:id", (req, res) => {
  const { id } = req.params;
  const { tittle, price, thumbnail } = req.body;
  const verify = products.some((e) => e.id === Number(id));
  let result;
  let status;
  if (verify) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    result = {
      tittle,
      price,
      thumbnail,
      id: Number(id),
    };
    products.splice(index, 1, result);
    status = 200;
  } else {
    result = { error: "producto no encontrado" };
    status = 404;
  }
  res.status(status).json(result);
});

//eliminar un producto del array
routerProductos.delete("/:id", (req, res) => {
  const { id } = req.params;
  const verify = products.some((e) => e.id === Number(id));
  let result;
  let status;
  if (verify) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    products.splice(index, 1);
    result = products;
    status = 200;
  } else {
    result = { error: "producto no encontrado" };
    status = 404;
  }
  res.status(status).json(result);
});

export default routerProductos;

