const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// const nuevoArray = technologies.map( tech => {
//     if(tech === 'HTML') {
//         return 'GraphQL'
//     } else {
//         return tech
//     }
// })

const newArray = technologies.filter((tech) => tech !== 'React')

// console.log(nuevoArray)
console.log(newArray)
