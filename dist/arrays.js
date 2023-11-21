"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Front-end"
  };
  return itemAtual;
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true or false
});

console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //true or false
});

console.log(indiceDaPaula);