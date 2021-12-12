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
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  function numberIsInvalid(n) {
    return n < 0 || n > 9;
  }
  if (array.filter(numberIsInvalid).length > 0) {
    return "não é possível gerar um número de telefone com esses valores";
  }
  let number = "(" + array[0] + array[1] + ") ";
  for (let index = 2; index < array.length; index += 1) {
    if (index >= 2) {
      if (index === 7) {
        number += "-";
      }
      number += array[index];
    }
    function numberRepeat(n) {
      return n === array[index];
    }
    if (array.filter(numberRepeat).length >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return number;
}

// Desafio 12
function triangleCheck(LineA, LineB, LineC) {
  if (LineA < (LineB + LineC) && LineA > Math.abs(LineB - LineC)) {
    return true;
  } else if (LineB < (LineA + LineC) && LineB > Math.abs(LineA - LineC)) {
    return true;
  } else if (LineC < (LineA + LineB) && LineC > Math.abs(LineA - LineB)) {
    return true
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  if (string.includes(",") || string.includes(" e ")) {
    let array = string.split(",");
    // let numbers = [];
    if (string.includes(" e ")) {
      let last = string.split(" e ")[1];
      soma += parseInt(last);
      // numbers.push(parseInt(last));
    }
    for (let value of array) {
      const number = parseInt(value);
      soma += number;
      // numbers.push(number);
    }
    // console.log(numbers);
  } else {
    soma += parseInt(string);
  }
  if (soma <= 1) {
    return soma + " copo de água";
  }
  return soma + " copos de água";
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
