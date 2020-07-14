//var nameInput = document.getElementById("user-name");
//console.log(nameInput.value);
//var inputs = document.getElementsByClassName("form-control");
//console.log(inputs);
//var inputsByName = document.getElementsByName("user");
//console.log(inputsByName);
//var elementsByTagname = document.getElementsByTagName("input");
//console.log(elementsByTagname);
//var elementByQuery = document.querySelector("input.form-control");
//console.log(elementByQuery);
//var allElementsByQuery = document.querySelectorAll("input.form-control");
//console.log(allElementsByQuery);
/* analizar
const createUserObject = (event) => {
    console.log(event.target)
    var inputCollection = document.getElementsByTagName("input")
    //  Crear un objeto
    var userObject = {}
    for( let i = 0; i < inputCollection.length; i++ ){
        let objectKey = inputCollection[i].dataset.pointsTo
        let objectValue = inputCollection[i].value
        userObject[objectKey] = objectValue
    } 
    console.log(userObject)
}
*/

var nameInput = document.getElementById('user-name')
nameInput.addEventListener('keyup', event => {
  let inputValue = event.target.value
  console.log(inputValue)
})

var inputCollection = document.querySelectorAll('input')
console.log(inputCollection)

inputCollection.forEach(element => {
  console.log(element)
  element.addEventListener('keyup', event => {
    let inputValue = event.target.value
    console.log(inputValue)
  })
})

var todoList = [
  'Preparar Clase',
  'Impartir Clase',
  'Teamback',
  'Revisión de proyecto',
  'Corrección de estilos',
  'Bañar a Sky',
]

var myList = document.getElementById('my-list')

todoList.forEach(item => {
  let listItem = document.createElement('li')
  let textNode = document.createTextNode(item)
  listItem.appendChild(textNode)
  myList.appendChild(listItem)
})

/*
const addListItems = () => {
    let listItem = document.createElement("li")
    let textNode = document.createTextNode("Elemento de lista")
    listItem.appendChild(textNode)
    myList.appendChild(listItem)
}*/
/*
const setDynamicText = (event) => {
    let text = event.target.value
    let title = document.getElementById('dynamic-text')
    let newText = document.createTextNode(text);
    title.replaceChild(newText,title.childNodes[0])
}
document.getElementById('user-name').addEventListener("keyup",setDynamicText)



*/
