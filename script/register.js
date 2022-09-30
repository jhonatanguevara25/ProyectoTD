let url= document.URL;

function registrar(){
    let nombreOB = document.getElementById("name").value;
    let correoOB = document.getElementById("email").value;
    let passwordOB = document.getElementById("pswd").value;
    let suscripcionOB = document.getElementById("susc").value;


    const data = { idAdmin: 60 , nombreCompleto:  nombreOB, correo: correoOB, password: passwordOB, suscripcion: suscripcionOB};

    console.log(JSON.stringify(data));
    try {
        fetch(`http://localhost:9000/api/bodeguero`, {
        method: 'POST', // or 'PUT'
        headers: {
            accept: 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => alert(response.json()))



    } catch (err) {
        alert(err);
    }

    
}   