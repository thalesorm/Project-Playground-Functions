// Desafio 1
function compareTrue(girafa, elefante) {
  // seu código aqui
  return girafa && elefante;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  const areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  const divideFrase = string.split(' ');
  return divideFrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  const concatUltimo = array[array.length - 1];
  const concatArray = array.shift();
  return `${concatUltimo}, ${concatArray}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const vitoria = wins * 3;
  const empate = ties * 1;
  const resultado = vitoria + empate;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  const maiorDoArray = Math.max(...array);
  let repetidosDoArray = 0;

  for (let index of array) {
    if (maiorDoArray === index) {
      repetidosDoArray += 1;
    }
  }
  return repetidosDoArray;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = '';
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 === dist2) {
    result = 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
  techList,
};
