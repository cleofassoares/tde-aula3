function filtrarArray(funcaoFiltro, array){
    const novoArray = []
    for(let i = 0; i < array.lenght; i++){
        if(funcaoFiltro(array[i])) {
            novoArray.push(array[i])
        }
    }
    return novoArray

}

function filtroPar(numero){
    return numero % 2 === 0
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosPares = filtrarArray(filtroPar,numeros)
console.log(numerosPares)