//Inicializando la tabla
const tablaProducto = document.getElementById("tabla-productos");
tablaProducto.innerHTML = "";
tablaProducto.innerHTML +=
  `<table>
  <tr class='header'>
  <td style='width: 50px;'>Id</td>
  <td style='width: 80px;'>Categoría</td>
  <td style='width: 250px;'>Nombre de Producto</td>
  <td>Descripción de Producto</td>
  <td style='width: 150px;'>Precio de Costo</td>
  <td style='width: 150px;'>Precio de Venta</td>
  <td style='width: 60px;'></td>
  <td style='width: 60px;'></td></tr>`;

fetch(`http://localhost:9000/api/producto`).then((response) => {
  response.json().then((data) => {
    const productos = data[0];
    for (let item = 0; item < productos.length; item++) {
      // let nombreURL = productos[item].nombreCompleto.replaceAll(" ", "%");
      // console.log(nombreURL);

      //tablaBodeguero.innerHTML+=`<tr><td>"+  ${productos[item].idAdmin + "}</td><td>  ${productos[item].nombreCompleto+"}</td><td>  ${productos[item].password+"}</td><td>  ${productos[item].suscripcion+"</td></tr><br>`;
      tablaProducto.innerHTML += `<table>
            <tr><td style='width: 50px;'>${productos[item].idProducto}</td>
            <td style='width: 80px;'>  ${productos[item].idCategoria}</td>
            <td style='width: 250px;'>${productos[item].nombreP}</td>
            <td>  ${productos[item].descripcion} </td>
            <td style='width: 150px;'><input type="number" id="costo${productos[item].idProducto}" class="form-control" value="${productos[item].precioCosto}"/></td>
            <td style='width: 150px;'><input type="number" id="venta${productos[item].idProducto}" class="form-control" value="${productos[item].precioVentaR}"/></td>
            <td style='width: 60px;'><button class="tdButtomUp" onclick="actualizarProducto(${productos[item].idProducto})"> U </button></td>
            </td><td style='width: 60px;'> <button class="tdButtom" onclick="deleteProducto(${productos[item].idProducto})">D</button> </td>
            </tr></table>`;
    }
  });
});

function deleteProducto(id) {
  fetch(`http://localhost:9000/api/producto/${id}`, { method: "DELETE" }).then(
    () => {
      alert("Se ha eliminado el Producto con ID:" + id);
      location.reload();
    }
  );
}

function registrarProducto(){
    let idCategoriaOB = document.getElementById("tipoP").value;
    let nombreOB = document.getElementById("nonProd").value;
    let descriOB = document.getElementById("descriProd").value;
    let costoOB = document.getElementById("costo").value;
    let ventaOB = document.getElementById("venta").value;
    let rucProveeOB = "20100035121";
    let codBarraOB = "2837641227685";

    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), 
      });
      return response.json();
    }
  
    postData("http://localhost:9000/api/producto", {
      idCategoria: idCategoriaOB,
      nombreP: nombreOB,
      descripcion: descriOB,
      precioCosto: costoOB,
      precioVentaR: ventaOB,
      rucProvee: rucProveeOB,
      codBarra: codBarraOB
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    location.reload();
}

function actualizarProducto(id) {
  let precioVenta = document.getElementById("venta"+id).value;
  let costo = document.getElementById("costo"+id).value;
  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  }
  postData(`http://localhost:9000/api/producto/${id}`, {
    precioCosto :costo,
    precioVentaR: precioVenta
  }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  alert("El producto con id " + id + " ha sido actualizado");
  location.reload();
}