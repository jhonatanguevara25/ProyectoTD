let url = document.URL;

function registrar() {
  let nombreOB = document.getElementById("name").value;
  let correoOB = document.getElementById("email").value;
  let passwordOB = document.getElementById("pswd").value;
  let suscripcionOB = document.getElementById("susc").value;

  /*  const data = {
    nombreCompleto: nombreOB,
    correo: correoOB,
    password: passwordOB,
    suscripcion: suscripcionOB,
  };
*/
  /*console.log(JSON.stringify(data));
  try {
    fetch(`http://localhost:9000/api/bodeguero`, {
      method: "POST", // or 'PUT'
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => alert(response.json()));
  } catch (err) {
    alert(err);
  }*/
  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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

  postData("http://localhost:9000/api/bodeguero", {
    nombreCompleto: nombreOB,
    correo: correoOB,
    password: passwordOB,
    suscripcion: suscripcionOB,
  }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}
