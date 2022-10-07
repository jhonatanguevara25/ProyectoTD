const selectCategoria = document.getElementById("tipoP");

fetch(`http://localhost:9000/api/categoria`).then((response) => {
  response.json().then((data) => {
    const categorias = data[0];
    for (let item = 0; item < categorias.length; item++) {
        var option = document.createElement("option");
        option.value = categorias[item].idCategoria;
        option.text = categorias[item].nombreCat;
        selectCategoria.add(option);
    }
  });
});
