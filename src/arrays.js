const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log (`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: "Front-end"
    }
    return itemAtual;
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' //true or false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' //true or false
})

console.log(indiceDaPaula)