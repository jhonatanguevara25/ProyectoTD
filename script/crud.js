//Inicializando la tabla
const tablaBodeguero = document.getElementById("tabla-bodeguero");
tablaBodeguero.innerHTML = "";
tablaBodeguero.innerHTML +=
  "<table><tr class='header'><td style='width: 100px;'>Id</td><td>Nombre Completo</td><td>Correo</td><td>Password</td><td style='width: 150px;'>Suscripcion</td><td class='tdButtom'>  </td><td class='tdButtom'>  </td></tr>";

fetch(`http://localhost:9000/api/bodeguero`).then((response) => {
  response.json().then((data) => {
    const bodegueros = data[0];
    for (let item = 0; item < bodegueros.length; item++) {
      console.log(bodegueros[item]);
      //tablaBodeguero.innerHTML+=`<tr><td>"+  ${bodegueros[item].idAdmin + "}</td><td>  ${bodegueros[item].nombreCompleto+"}</td><td>  ${bodegueros[item].password+"}</td><td>  ${bodegueros[item].suscripcion+"</td></tr><br>`;
      tablaBodeguero.innerHTML += `<table>
            <tr><td style='width: 100px;'>${bodegueros[item].idAdmin}</td>
            <td>  ${bodegueros[item].nombreCompleto}</td>
            <td>${bodegueros[item].correo}</td>
            <td>  ${bodegueros[item].password} </td>
            <td style='width: 150px;'>  ${bodegueros[item].suscripcion} </td>
            <td class="tdButtom"> <button>U</button> </td>
            </td><td class="tdButtom"> <button onclick="deleteBod(${bodegueros[item].idAdmin})">D</button> </td>
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
