const minhaFuncao = () => "Diz Olá";

const retornaUmCarro = () => ({
    modelo: 'ka',
    fabricante: 'ford'
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)