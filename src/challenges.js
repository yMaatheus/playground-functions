// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 === true && arg2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3; //Cada vitória vale 3 pontos
  return wins + ties;
}

// Desafio 6
/*
Nessa função foi utilizado o 'spred operator' consultado no artigo abaixo:
Link: https://www.horadecodar.com.br/2021/06/29/encontrar-maior-e-menor-numero-de-array-em-javascript
*/
function highestCount(array) {
  let higherNumber = Math.max(...array);
  let count = 0;
  for (let index of array) {
    if (index === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  } else if (distanceMouseCat2 < distanceMouseCat1) {
    return 'cat2';
  } else if (distanceMouseCat1 === distanceMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let exit = [];
  for (let index of array) {
    if (isDivisivel(index, 3) && isDivisivel(index, 5)) {
      exit.push("fizzBuzz");
      continue;
    } else if (isDivisivel(index, 3)) {
      exit.push("fizz");
      continue;
    } else if (isDivisivel(index, 5)) {
      exit.push("buzz");
      continue;
    }
    exit.push("bug!");
  }
  return exit;
}

function isDivisivel(dividendo, divisor) {
  return (dividendo % divisor === 0);
}

// Desafio 9
function encode(text) {
  let exit = "";
  for (let index of text) {
    if (index === "a") {
      exit += "1";
      continue;
    } else if (index === "e") {
      exit += "2";
      continue;
    } else if (index === "i") {
      exit += "3";
      continue;
    } else if (index === "o") {
      exit += "4";
      continue;
    } else if (index === "u") {
      exit += "5";
      continue;
    }
    exit += index;
  }
  return exit;
}

function decode(text) {
  let exit = "";
  for (let index of text) {
    if (index === "1") {
      exit += "a";
      continue;
    } else if (index === "2") {
      exit += "e";
      continue;
    } else if (index === "3") {
      exit += "i";
      continue;
    } else if (index === "4") {
      exit += "o";
      continue;
    } else if (index === "5") {
      exit += "u";
      continue;
    }
    exit += index;
  }
  return exit;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
