//o número a ser verificado será incluido no parametro da função fibonacci 
function fibonacci(num){
    //cria um array sequencia com os números iniciais x e y
    x = 0, y = 1
    var sequencia = [] 
    sequencia.push(x)
    sequencia.push(y)
    //cria a sequência de Fibonacci até chegar no número informado pelo usuario
    while(sequencia[sequencia.length-1] < num){
        let soma = x + y 
        sequencia.push(soma)
        x = y
        y = soma
    }
    //verifica se o número informado pelo usuario está ou não na sequência
    if(sequencia.includes(num)){
        console.log("tem o número")
    }else{
        console.log("não tem o número")
    }
    console.log(sequencia)
}