let nomeAluno = prompt("Digite o seu nome completo");
if(nomeAluno.length <= 5){
    alert("Nome deve ter no mínimo 5 caracteres")
}
let materia1Matematica = "Matemática";
let materia2Portugues = "Português";
let materia3Informatica = "Informática";
let materia4Geografia = "Geografia";
let materia5Ingles = "Inglês";
let materia6Historia = "História";
let materia7FIlosofia = "FIlosofia";
let materia8Sociologia = "Sociologia";
let materia9Literatura = "Literatura";
let materia10EducacaoFisica = "Educação Física";

alert("Agora digite apenas as notas para as respectivas disciplinas");
let nota1Matematica = parseInt(prompt("Digite a sua nota em Matematica"));
if(nota1Matematica < 0 || nota1Matematica > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota2Portugues = parseInt(prompt("Digite a sua nota em Português"));
if(nota2Portugues < 0 || nota2Portugues > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota3Informatica = parseInt(prompt("Digite a sua nota em Informática"));
if(nota3Informatica < 0 || nota3Informatica > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}    
let nota4Geografia = parseInt(prompt("Digite a sua nota em Geografia"));
if(nota4Geografia < 0 || nota4Geografia > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota5Ingles = parseInt(prompt("Digite a sua nota em Inglês"));
if(nota5Ingles < 0 || nota1Matematica > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota6Historia= parseInt(prompt("Digite a sua nota em História"));
if(nota6Historia < 0 || nota6Historia > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota7FIlosofia = parseInt(prompt("Digite a sua nota em Filosofia"));
if(nota7FIlosofia < 0 || nota7FIlosofia > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota8Sociologia = parseInt(prompt("Digite a sua nota em Sociologia"));
if(nota8Sociologia < 0 || nota8Sociologia > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota9Literatura= parseInt(prompt("Digite a sua nota em Literatura"));
if(nota9Literatura < 0 || nota9Literatura > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let nota10EducacaoFisica  = parseInt(prompt("Digite a sua nota em Educação Física"));
if(nota10EducacaoFisica < 0 || nota10EducacaoFisica > 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}

alert("Agora digite apenas as presenças");
let presenca1Matematica = parseInt(prompt("Digite a sua presença em Matematica"));
if(presenca1Matematica< 0 || presenca1Matematica> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca2Portugues = parseInt(prompt("Digite a sua presença em Português"));
if(presenca2Portugues< 0 || presenca2Portugues> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca3Informatica = parseInt(prompt("Digite a sua presença em Informática"));
if(presenca3Informatica< 0 || presenca3Informatica> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca4Geografia = parseInt(prompt("Digite a sua presença em Geografia"));
if(presenca4Geografia< 0 || presenca4Geografia> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca5Ingles = parseInt(prompt("Digite a sua presença em Inglês"));
if(presenca5Ingles< 0 || presenca5Ingles> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca6Historia= parseInt(prompt("Digite a sua presença em História"));
if(presenca6Historia< 0 || presenca6Historia> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca7FIlosofia = parseInt(prompt("Digite a sua presença em Filosofia"));
if(presenca7FIlosofia< 0 || presenca7FIlosofia> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca8Sociologia = parseInt(prompt("Digite a sua presença em Sociologia"));
if(presenca8Sociologia< 0 || presenca8Sociologia> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca9Literatura= parseInt(prompt("Digite a sua presença em Literatura"));
if(presenca9Literatura< 0 || presenca9Literatura> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
let presenca10EducacaoFisica  = parseInt(prompt("Digite a sua presença em Educação Física"));
if(presenca10EducacaoFisica< 0 || presenca10EducacaoFisica> 10){
    alert("Valor inválido - digite uma nova de 0 a 10")
}
var somaNota = (nota1Matematica) + (nota2Portugues) + (nota3Informatica) + (nota4Geografia) + (nota5Ingles) + (nota6Historia) + (nota7FIlosofia) + 
(nota8Sociologia) + (nota9Literatura) + (nota10EducacaoFisica);
var mediaNota = (somaNota) / 10;
var somaPresenca = (presenca1Matematica) + (presenca2Portugues) + (presenca3Informatica) + (presenca4Geografia) + (presenca5Ingles) + (presenca6Historia) + (presenca7FIlosofia) + (presenca8Sociologia) + (presenca9Literatura) + (presenca10EducacaoFisica);
var mediaPresenca = (somaPresenca) / 10;
if((mediaNota) >= 8 && (mediaPresenca) >= 6){
    alert(`A média de notas do aluno ${nomeAluno} é de ${mediaNota} pontos e a sua presença de ${mediaPresenca} pontos: Aluno Aprovado!`)
}else{
    alert(`A média de notas do aluno ${nomeAluno} é de ${mediaNota} pontos e a sua presença de ${mediaPresenca} pontos: Aluno Reprovado!`)
}

