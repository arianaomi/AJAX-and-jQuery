/* DOM   
  Insertar en una tabla el json que traimos
*/
var counter = 0;
const printKoderData = (koderObject) => {
  const { name, age, mail } = koderObject;

  let dataRow = document.createElement("tr");
  let idTd = document.createElement("td");
  let nameTd = document.createElement("td");
  let ageTd = document.createElement("td");
  let mailTd = document.createElement("td");

  idTd.innerHTML = ++counter;
  nameTd.innerHTML = name;
  ageTd.innerHTML = age;
  mailTd.innerHTML = mail;

  dataRow.appendChild(idTd);
  dataRow.appendChild(nameTd);
  dataRow.appendChild(ageTd);
  dataRow.appendChild(mailTd);

  let koderTable = document.getElementById("koders-table");
  koderTable.appendChild(dataRow);
};
/*   AJAX */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.response);
    for (let key in response) {
      console.log(response[key]);
      printKoderData(response[key]);
    }
  }
};
xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/koders/.json");
xhttp.send();

//////////////// A J A X/////////////////////

/*
   Pasos de AJAX: 
   
   1- Create an XMLHttpRequest() object
   2- Make an assessment of the state and status of the request
      2.1 - Verrify that the request is correct.
  3-Configure the request
  4-Send the request
*/
var xhttp = new XMLHttpRequest(); // 1- creando una instancia de  XMLHttpRequest()

//2- evalucion de la petición
xhttp.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
  //2.1
  if (this.readyState == 4 && this.status == 200) {
    //console.log(this.response); // respueta en crudo
    //console.log(this.responseText); //la respuesta esta en responseText (string) es una propiedad de XMLH
    let response = JSON.parse(this.response); // convirtiendo la respuesta en un json (objeto de objetos)
    //mandar a llamar una funcion para procesar la respuesta
  } else {
    console.log(this.status);
  }
};

// 3- configurando
xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/koders/.json"); //true asincrona: se seguira ejecutando  el código js mientras espera la peticion | false sincrono: detiene  la app hasta que tiene una respuesta
// 4- Enviar la peticion
xhttp.send();
