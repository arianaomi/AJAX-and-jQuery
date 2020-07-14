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

  console.log(userObject)
  console.log(JSON.stringify(userObject))

  saveKoder(userObject)
}

const printUserData = userObject => {
  const { name, mail, age } = userObject
  let usersTable = usersTable
  let tableRow = `
    <tr>
      <td>${name}</td>
      <td>${name}</td>
      <td>${name}</td>
    </tr>`

  let usersTable = document.getElementById('users-table')
  usersTable.innerHTML = dataRow
}

const deleteLastChild = event => {
  event.preventDefault()

  let usersTable = document.getElementsByTagName('tbody')[0]
  console.log(usersTable)

  usersTable.hasChildNodes() ? (usersTable.lastChild.remove(), --counter) : null
}

var submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', getUserData)
var deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', deleteLastChild)

/*AJAX*/
const printResponse = data => {
  console.log(data)
}
const getKodersData = () => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      console.log(response)
      for (let koder in response) {
        console.log(koder)
        console.log(response[koder])
        let koderName = response[koder].name[0]
        console.log(koderName)
        koderName == 'R' ? printUserData(response[koder]) : null
      }
      //printResponse( response )
    }
  }

  xhttp.open('GET', 'https://ajaxclass-1ca34.firebaseio.com/koders/.json', true)
  xhttp.send()
}

const saveKoder = koderData => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      console.log(response)
    }
  }
  xhttp.open(
    'POST',
    'https://ajaxclass-1ca34.firebaseio.com/koders/.json',
    true
  )
  xhttp.send(JSON.stringify(koderData))
}

const updateKoder = () => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      console.log(response)
    }
  }
  xhttp.open(
    'PUT',
    'https://ajaxclass-1ca34.firebaseio.com/koders/-M9a4scq0liW6sv-ar1k/.json',
    true
  )
  xhttp.send(
    JSON.stringify({
      name: 'Israel',
      email: 'israel@kodemia.mx',
      age: 20,
    })
  )
}
const patchKoder = newObject => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      console.log(response)
    }
  }
  xhttp.open(
    'PATCH',
    'https://ajaxclass-1ca34.firebaseio.com/koders/-M9a4scq0liW6sv-ar1k/.json',
    true
  )
  xhttp.send(JSON.stringify(newObject))
  xhttp.send(JSON.stringify(newObject))
}

const deleteKoder = () => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.readyState)
    console.log(this.status)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      console.log(response)
    }
  }
  xhttp.open(
    'DELETE',
    `https://ajaxclass-1ca34.firebaseio.com/koders/-M9aA1nAt2TjeeOng4Lk/mail/.json`,
    true
  )
  xhttp.send()
}
