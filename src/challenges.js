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
function fizzBuzz(array) {
  // seu código aqui
  return array.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return 'bug!';
  });
}

// Desafio 9
function encode(encriptacao) {
  // seu código aqui
  let codifica = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let entrada = encriptacao;
  entrada = entrada.replace(/[aeiou]/g, (m) => codifica[m]);
  return entrada;
}
function decode(decriptacao) {
  // seu código aqui
  let decodifica = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let saida = decriptacao;
  saida = saida.replace(/[12345]/g, (m) => decodifica[m]);
  return saida;
}

// Desafio 10
function techList(tech, names) {
  // seu código aqui
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newArray = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    const newObj = {
      name: names,
      tech: tech[index],
    };
    newArray.push(newObj);
  }
  return newArray;
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
