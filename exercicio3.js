function mapearArray(funcao, array){
    return array.map(funcao)
}

function dobrar(numero){
    return numero * 2
}

const numeros = [1,2,3,4,5]
const numerosDobrados = mapearArray(dobrar, numeros);
console.log(numerosDobrados)