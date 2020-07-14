var userObject = {}
var counter = 0

const getUserData = event => {
  event.preventDefault()
  let inputsCollection = document.querySelectorAll('input')

  inputsCollection.forEach(item => {
    /*Creamos una llave para nuestro objeto*/
    let objectKey = item.dataset.pointsTo
    /*Creamos un valor para nuestro objeto*/
    let objectValue = item.value
    /*insertamos la llave y el valor dentro de nuestro objeto*/
    userObject[objectKey] = objectValue
  })
  printUserData(userObject)
}

const printUserData = userObject => {
  const { name, address, phone } = userObject
  //creamos nodos html
  let dataRow = document.createElement('tr')
  let idTd = document.createElement('td')
  let nameTd = document.createElement('td')
  let addressTd = document.createElement('td')
  let phoneTd = document.createElement('td')
  //creamos nodos de texto
  let idTextNode = document.createTextNode(++counter)
  idTd.appendChild(idTextNode)
  let nameTextNode = document.createTextNode(name)
  nameTd.appendChild(nameTextNode)
  let phoneTextNode = document.createTextNode(phone)
  phoneTd.appendChild(phoneTextNode)
  let addressTextNode = document.createTextNode(address)

  addressTd.appendChild(addressTextNode)
  dataRow.appendChild(idTd)
  dataRow.appendChild(nameTd)
  dataRow.appendChild(addressTd)
  dataRow.appendChild(phoneTd)

  let usersTable = document.getElementById('users-table')
  usersTable.appendChild(dataRow)
}

var submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', getUserData)

/*   Eliminar el ultimo elemento elemento */
const deleteLastChild = () => {
  let lastChild = document.getElementById('users-table')
  
  lastChild.hasChildNodes()
    ? (lastChild.lastChild.remove(), --counte)
    : console.log('no tiene nodos')
}
