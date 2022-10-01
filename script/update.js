const url = new URL(location.href);
const id = url.searchParams.get("id");
const nombreCompleto = url.searchParams.get("nombre").replaceAll("%", " ");
const correo = url.searchParams.get("correo");

console.log(id+" :: "+nombreCompleto + "-" + correo);


document.getElementById("name").value = nombreCompleto;
document.getElementById("email").value = correo;

function actualizar() {
    let nombreOB = document.getElementById("name").value;
    let correoOB = document.getElementById("email").value;

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
      return response.json(); // parses JSON response into native JavaScript objects
    }
  
    postData(`http://localhost:9000/api/bodeguero/${id}`, {
      nombreCompleto: nombreOB,
      correo: correoOB,
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      alert("El usuario con id " +id+" ha sido actualizado");
      location.href="crud.html";
    });
  }