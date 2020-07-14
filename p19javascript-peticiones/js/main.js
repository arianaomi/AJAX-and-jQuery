var postObject = {}
var arrPost = []

/* Obtiene los datos del DOM y los guarado en objeto */
const getPostData = event => {
  event.preventDefault()
  let getDatas = document.querySelectorAll('.form-control')
  console.log(getDatas)

  getDatas.forEach(data => {
    let key = data.dataset.key
    let value = data.value
    postObject[key] = value
  })

  console.log(postObject)
  sendPost(postObject)
}

/* Hace una petición de enviar datos a database y si es exitosa trae los datos y los imprime */
const sendPost = postObject => {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.status)
    console.log(this.readyState)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      getPost()
    }
  }
  xhttp.open(
    'POST',
    'https://practica-1718f.firebaseio.com/test/Naomi/.json',
    true
  )
  xhttp.send(JSON.stringify(postObject))
}

/* Add event y llamando funncion donde guarda Datos */
let btnSend = document.getElementById('send')
btnSend.addEventListener('click', getPostData)

/* bajando los datos from database */
const getPost = () => {
  let postWrapper = document.getElementsByid('post-section')
  postWrapper.innerHTML = ''
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    console.log(this.status)
    console.log(this.readyState)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)

      for (const post in response) {
        printPost({ ...response[post], postKey: post })
        addDeleteListenersBtn()
      }
    }
  }
  xhttp.open(
    'GET',
    'https://practica-1718f.firebaseio.com/test/Naomi/.json',
    true
  )
  xhttp.send()
}

/* Imprimir funcion  */
const printPost = postObject => {
  event.defaultPrevented()
  let { name, date, text, postKey } = postObject

  let postSection = document.getElementById('post-section')
  let currentPosts = postSection.innerHTML
  let newPost = `
    <div class="col-6 my-2">
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">
          ${text}
          </p>
          <p class="card-text">
            <small class="text-muted">${date}</small>
          </p>
        </div>
        <button  class="delete-btn btn btn-danger" data-post-key= "${postKey}">Borrar</button>
      </div>
    </div>`
  postSection.innerHTML = currentPosts + newPost
}

/* borrar de la database */
const deletePost = event => {
  let postWrapper = document.getElementsByid('post-section')
  postWrapper.innerHTML = ''
  let selectedPost = event.target
  let postKey = selectedPost.dataset.postKey
  let xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function () {
    console.log(this.status)
    console.log(this.readyState)
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response)
      getPost()
    }
  }
  xhttp.open(
    'DELETE',
    `https://practica-1718f.firebaseio.com/test/Naomi/${postKey}.json`,
    true
  )
  xhttp.send()
}

/* funcion que agrega un evento a cada boton de los post bajados de database */
const addDeleteListenersBtn = () => {
  let deleteBtn = document.querySelector('.delete-btn')
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', deletePsot)
  })
}
