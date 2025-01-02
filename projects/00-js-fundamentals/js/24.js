// Eventos del DOM - Clicks

const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
  heading.textContent = 'Nuevo Heading al dar click'
})

const links = document.querySelectorAll('.navegacion a')
links.forEach((link) => {
  link.addEventListener('click', () => {
    console.log('Diste click en un enlace')
  })
})
