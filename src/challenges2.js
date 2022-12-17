// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (
    numbers.some(
      (n) => n < 0 || n > 9 || numbers.filter((num) => num === n).length >= 3,
    )
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const phone = numbers.join('');
  return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(
    7,
  )}`;
}

// Desafio 12

function SumCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

function absolutCheck(lineA, lineB, lineC) {
  if (
    lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineA - lineB)
  ) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  // Verificar se é possível formar um triângulo com os comprimentos das três linhas
  return (
    SumCheck(lineA, lineB, lineC)
    && absolutCheck(lineA, lineB, lineC)
  );
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
