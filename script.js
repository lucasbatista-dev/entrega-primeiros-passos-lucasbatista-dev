let nomeAluno = prompt("Digite o seu nome completo");

if (nomeAluno.length <= 5) {
  alert("Nome deve ter no mínimo 5 caracteres");
}

let materias = {
  matematica: "Matemática",
  portugues: "Português",
  informatica: "Informática",
  geografia: "Geografia",
  ingles: "Inglês",
  historia: "História",
  filosofia: "Filosofia",
  sociologia: "Sociologia",
  literatura: "Literatura",
  educacaoFisica: "Educação Física"
};

function validarValor(valor) {
  return valor >= 0 && valor <= 10;
}

function solicitarValor(materia, tipo) {
  let valor = parseInt(prompt(`Digite a sua ${tipo} em ${materia}`));

  if (!validarValor(valor)) {
    alert("Valor inválido - digite um novo valor de 0 a 10");
    valor = solicitarValor(materia, tipo);
  }

  return valor;
}

let notas = {};
let presencas = {};

alert("Agora digite apenas as notas e presenças para as respectivas disciplinas");

for (let materia in materias) {
  notas[materia] = solicitarValor(materias[materia], "nota");
  presencas[materia] = solicitarValor(materias[materia], "presença");
}

let somaNota = 0;
let somaPresenca = 0;

for (let materia in notas) {
  somaNota += notas[materia];
  somaPresenca += presencas[materia];
}

let mediaNota = somaNota / Object.keys(notas).length;
let mediaPresenca = somaPresenca / Object.keys(presencas).length;

if (mediaNota >= 8 && mediaPresenca >= 6) {
  alert(`A média de notas do aluno ${nomeAluno} é de ${mediaNota} pontos e a sua presença é de ${mediaPresenca} pontos: Aluno Aprovado!`);
} else {
  alert(`A média de notas do aluno ${nomeAluno} é de ${mediaNota} pontos e a sua presença é de ${mediaPresenca} pontos: Aluno Reprovado!`);
}
