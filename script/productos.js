//Inicializando la tabla
const tablaProducto = document.getElementById("tabla-productos");
tablaProducto.innerHTML = "";
tablaProducto.innerHTML +=
  "<table><tr class='header'><td style='width: 100px;'>Id</td><td style='width: 100px;'>Categoría</td><td>Correo</td><td>Password</td><td style='width: 150px;'>Suscripcion</td><td style='width: 60px;'>  </td><td style='width: 60px;'>  </td></tr>";

fetch(`http://localhost:9000/api/producto`).then((response) => {
  response.json().then((data) => {
    const productos = data[0];
    for (let item = 0; item < productos.length; item++) {
      let nombreURL = productos[item].nombreCompleto.replaceAll(" ", "%");
      console.log(nombreURL);

      //tablaBodeguero.innerHTML+=`<tr><td>"+  ${productos[item].idAdmin + "}</td><td>  ${productos[item].nombreCompleto+"}</td><td>  ${productos[item].password+"}</td><td>  ${productos[item].suscripcion+"</td></tr><br>`;
      tablaProducto.innerHTML += `<table>
            <tr><td style='width: 100px;'>${productos[item].idAdmin}</td>
            <td>  ${productos[item].nombreCompleto}</td>
            <td>${productos[item].correo}</td>
            <td>  ${productos[item].password} </td>
            <td style='width: 150px;'>  ${productos[item].suscripcion} </td>
            <td style='width: 60px;'><button class="tdButtomUp"> <a href=/update?id=${productos[item].idAdmin}&nombre=${nombreURL}&correo=${productos[item].correo}>U</a> </button></td>
            </td><td style='width: 60px;'> <button class="tdButtom" onclick="deleteBod(${productos[item].idAdmin})">D</button> </td>
            </tr></table>`;
    }
  });
});

function deleteBod(id) {
  fetch(`http://localhost:9000/api/bodeguero/${id}`, { method: "DELETE" }).then(
    () => {
      alert("Se ha eliminado el usuario con ID:" + id);
      location.reload();
    }
  );
}
