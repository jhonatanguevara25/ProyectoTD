const express = require("express");
const cors = require("cors");

const routesBodeguero = require("./routesBodeguero");
const routesCategoria = require("./routesCategoria");
const routesProducto = require("./routesProducto");
const routesProveedor = require("./routesProveedor");
const routesTienda = require("./routesTienda");
const routesVentasTienda = require("./ventasPorTienda");
const routesCreateDB = require("./createDBodeguero");

const app = express();
app.set("port", process.env.PORT || 9000);

// middlewares -------------------------------------
app.use(express.json());
app.use(cors());
// routes -------------------------------------------
app.get("/", (req, res) => {
  res.send("Api funcionando");
});

app.use("/api/bodeguero", routesBodeguero);
app.use("/api/categoria", routesCategoria);
app.use("/api/producto", routesProducto);
app.use("/api/proveedor", routesProveedor);
app.use("/api/tienda", routesTienda);
app.use("/api/ventasT", routesVentasTienda);
app.use("/api/createDB", routesCreateDB);

// server running -----------------------------------
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
