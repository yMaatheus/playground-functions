// Desafio 10
function techList(array, name) {
  if (array.length <= 0) {
    return 'Vazio!';
  }
  array.sort();
  let exit = [];
  for (let index of array) {
    exit.push({ tech: index, name: name });
  }
  return exit;
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
