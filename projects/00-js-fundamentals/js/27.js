const form = document.querySelector('#formulario')
form.addEventListener('submit', e => {
  e.preventDefault()

  const name = document.querySelector('.nombre').value
  const password = document.querySelector('.password').value

  const previousAlert = document.querySelector('.alerta')
  if (previousAlert) {
    previousAlert.remove()
  }

  const alert = document.createElement('DIV')
  alert.classList.add('alerta')

  if (name === '' || password === '') {
    alert.textContent = 'Todos los campos son obligatorios'
    alert.classList.add('error')
  } else {
    alert.textContent = 'Todo bien..'
    alert.classList.add('exito')
  }

  form.appendChild(alert)
})
