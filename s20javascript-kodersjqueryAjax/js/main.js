//https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/.json
var kodersToAdd = []
/*[
    {
        koderKey:"asdf",
        name:"asdaaaa",
        age:30
    }
]*/
var kodersToDelete = []

const getFormData = () => {
  let koderObject = {}
  $('input').each(function (index) {
    let objectKey = $(this).data('points-to')
    let value = $(this).val()
    koderObject[objectKey] = value
  })
  kodersToAdd.push(koderObject)
  console.log(koderObject)
  console.log(kodersToAdd)
  printTableRows(kodersToAdd)
}

const printTableRows = dataToPrint => {
  $('#koders-table').find('tbody').empty()
  dataToPrint.forEach(koder => {
    let { name, lastName, age, email } = koder
    $('#koders-table').find('tbody').append(`
      <tr>
        <td class="firstName" data-name="${name}" >${name}</td>
        <td class="lastName" data-last="${lastName}">${lastName}</td>
        <td class="age">${age}</td>
        <td class="email">${email}</td>
        <td class="delete">
          <svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
            <path fill-rule="evenodd"d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
          </svg>
        </td>
      </tr>
    `)
  })

  $('.delete').click(deleteTableRow)
}

const saveKoder = koderObject => {
  let url = ''
  let method = ''
  koderObject.key
    ? ((url = `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/${koderObject.key}.json`),
      (method = 'PATCH'))
    : ((url = `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/.json`),
      (method = 'POST'))
  $.ajax({
    url: url,
    method: method,
    data: JSON.stringify(koderObject),
    success: response => {
      console.log(response)
    },
  })
}

const getKodersFromDb = () => {
  $.get(
    'https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/.json',
    function (response) {
      $.each(response, (key, value) => {
        console.log('key ', key)
        console.log('value ', value)
        kodersToAdd.push({ ...value, key })
        let { name, lastName, age, email } = value
        $('#koders-table').find('tbody').append(`
          <tr data-koder-key='${key}'>
            <td class="firstName" data-name="${name}" >${name}</td>
            <td class="lastName" data-last="${lastName}">${lastName}</td>              
            <td class="age">${age}</td>
            <td class="email">${email}</td>
            <td class="delete">
            <svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
              <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
            </svg>
            </td>
          </tr>
        `)
      })
      $('.delete').click(deleteTableRow)
    }
  )
}

const deleteTableRow = event => {
  let selectedRow = $(event.target)
  let koderKey = $(event.target).closest('tr').data('koder-key')
  koderKey ? kodersToDelete.push(koderKey) : null
  console.log(kodersToDelete)
  let koderIndex = kodersToAdd.findIndex(koder => koder.key === koderKey)
  console.log(koderIndex)
  kodersToAdd.splice(koderIndex, 1)
  console.log(kodersToAdd)

  $(event.target).closest('tr').remove()
}

const deleteKoder = koderKey => {
  $.ajax({
    url: `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/${koderKey}.json`,
    method: 'DELETE',
    success: response => {
      console.log(response)
    },
  })
}

$('#saveData').click(() => {
  kodersToAdd.forEach(koder => {
    saveKoder(koder)
  })
  kodersToDelete.forEach(koder => {
    deleteKoder(koder)
  })
})

$('#submit').click(getFormData)
getKodersFromDb()
