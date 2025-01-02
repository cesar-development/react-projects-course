const money = 600
const pay = 500
const card = true

/*
    || - Al menos una debe cumplirse
    && - Todas deben cumplirse
*/

if (money > pay && card) {
  console.log('puedes pay')
} else {
  console.log('No, no puedes pay')
}
