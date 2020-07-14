/*var nameInput = document.getElementById("user-name");
console.log(nameInput.value);
var inputs = document.getElementsByClassName("form-control");
console.log(inputs);
var inputsByName = document.getElementsByName("user");
console.log(inputsByName);
var elementsByTagname = document.getElementsByTagName("input");
console.log(elementsByTagname);
var elementByQuery = document.querySelector("input.form-control");
console.log(elementByQuery);
var allElementsByQuery = document.querySelectorAll("input.form-control");
console.log(allElementsByQuery);

/**¿Qué conceptos me ayudarán con la práctica?
-Objetos de javacript ( properties, values )
-ciclos( .forEach, for...)
-métodos de DOM (getElementById, ClassName, Name, etc)
diferencias entre Array, Object, HTMLCollection, NodeLists
 */

const getDataById = () => {
  let nameInput = document.getElementById('user-name').value
  let addressInput = document.getElementById('user-address').value
  let phoneInput = document.getElementById('user-phone').value
  let userData = {
    nameInput,
    addressInput,
    phoneInput,
  }
  console.log(userData)
}

getDataById()

const createObject = ([name, address, phone]) => {
  let user = {
    name,
    address,
    phone,
  }
  console.log(user)
}

const getDataByQuery = () => {
  let dataEntered = document.querySelectorAll('.form-control')
  let data = []
  for (let item of dataEntered) {
    data.push(item.value)
  }
  createObject(data)
}

getDataByQuery()
const getDataByName = () => {
  let data = []
  let dataEnteredByName = document
    .getElementsByName('user')
    .forEach(element => {
      data.push(element.value)
    })
  createObject(data)
}
getDataByName()
