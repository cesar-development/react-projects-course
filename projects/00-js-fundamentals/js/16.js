const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
// const numbers = [10, 20, 30]

// Filter
// nuevoArray = technologies.filter(tech => tech !== 'React')

// Comprobar si un elemento existe en el array
// const resultado = technologies.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numbers.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numbers.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numbers.every( numero => numero > 9)

// Reduce - Acumulando en el total
// const resultado = numbers.reduce( (total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
// const resultado = technologies.filter( tech => tech === 'Node.js')
// const resultado = numbers.filter( numero => numero !== 10)

technologies.forEach((tech, index) => console.log(index))

// Crear un nuevo array
const arrayMap = technologies.map(tech => tech)

console.log(arrayMap)
