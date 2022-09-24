const { Connection, Request, TYPES } = require("tedious");

//var Connection = require("tedious").Connection;
var config = {
  server: "yarashop.database.windows.net", //update me
  authentication: {
    type: "default",
    options: {
      userName: "admin123", //update me
      password: "YGTl63QI", //update me
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: "yarashop", //update me
  },
};
var connection = new Connection(config);
connection.on("connect", function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
  executeStatement();
});

connection.connect();
// JAJA :V
//var Request = require("tedious").Request;
//var TYPES = require("tedious").TYPES;

function executeStatement() {
  request = new Request("SELECT TOP 20 * FROM [dbo].[Entries];", function (
    err
  ) {
    if (err) {
      console.log(err);
    }
  });
  var result = "";
  request.on("row", function (columns) {
    // Es un bucle por cada fila que tenga la sentencia
    columns.forEach(function (column) {
      if (column.value !== null) {
        result += column.value + " "; // Cada línea se suma en un string mayor
      }
    });
    console.log(result + "\n"); // Se imprime cada línea.
    result = "";
  });
  // Close the connection after the final event emitted by the request, after the callback passes
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);
}
