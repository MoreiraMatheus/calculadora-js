var tela = document.getElementById('tela-de-resultados')
var conta = document.getElementById('conta')

function clicar(numero){
    if(tela.innerHTML.length >= 15){
        window.alert('tamanho máximo de caracteres atingido')
    }
    else{
        tela.innerHTML += numero
    }
}

function limpar(){
    tela.innerHTML = ''
    conta.innerHTML = 'calculadora JS'
}

function del(){
    var conta_montada = tela.innerHTML
    let conta_nova = conta_montada.substring(0, conta_montada.length - 1)
    tela.innerHTML = conta_nova    
}

function resultado(){
    var resultado = tela.innerHTML
    if(resultado){
        var conta_montada = tela.innerHTML
        tela.innerHTML = eval(resultado)
        conta.innerHTML = conta_montada + ':'
    }
    else{
        tela.innerHTML = 'nada para calcular'
    }
}