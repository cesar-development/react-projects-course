// manipular elementos HTML con JS

const heading = document.querySelector('.heading')
heading.textContent = 'Un Nuevo Heading'
console.log(heading.textContent)

const inputName = document.querySelector('#nombre')
inputName.value = 'Un valor por default'

const links = document.querySelectorAll('.navegacion a')
links.forEach((link) => {
  link.textContent = 'Nuevo enlace'
})
