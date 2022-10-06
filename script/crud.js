//Inicializando la tabla
const tablaBodeguero = document.getElementById("tabla-bodeguero");
tablaBodeguero.innerHTML = "";
tablaBodeguero.innerHTML +=
  "<table><tr class='header'><td style='width: 100px;'>Id</td><td>Nombre Completo</td><td>Correo</td><td>Password</td><td style='width: 150px;'>Suscripcion</td><td style='width: 60px;'>  </td><td style='width: 60px;'>  </td></tr>";

fetch(`http://localhost:9000/api/bodeguero`).then((response) => {
  response.json().then((data) => {
    const bodegueros = data[0];
    for (let item = 0; item < bodegueros.length; item++) {
      let nombreURL = bodegueros[item].nombreCompleto.replaceAll(" ", "%");
      console.log(nombreURL);

      //tablaBodeguero.innerHTML+=`<tr><td>"+  ${bodegueros[item].idAdmin + "}</td><td>  ${bodegueros[item].nombreCompleto+"}</td><td>  ${bodegueros[item].password+"}</td><td>  ${bodegueros[item].suscripcion+"</td></tr><br>`;
      tablaBodeguero.innerHTML += `<table>
            <tr><td style='width: 100px;'>${bodegueros[item].idAdmin}</td>
            <td>  ${bodegueros[item].nombreCompleto}</td>
            <td>${bodegueros[item].correo}</td>
            <td>  ${bodegueros[item].password} </td>
            <td style='width: 150px;'>  ${bodegueros[item].suscripcion} </td>
            <td style='width: 60px;'><button class="tdButtomUp"> <a href=/update?id=${bodegueros[item].idAdmin}&nombre=${nombreURL}&correo=${bodegueros[item].correo}>U</a> </button></td>
            </td><td style='width: 60px;'> <button class="tdButtom" onclick="deleteBod(${bodegueros[item].idAdmin})">D</button> </td>
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
