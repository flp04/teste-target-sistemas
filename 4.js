faturamento = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    }
]

var faturamentoTotal = 0

//calcula o faturamento total
for(let i = 0; i < faturamento.length; i++){
        faturamentoTotal += faturamento[i].valor
    }

//calcula o percentual de cada estado
for(let i = 0; i < faturamento.length; i++){
    console.log("O estado " + faturamento[i].estado + " representa " + faturamento[i].valor*100/faturamentoTotal + "% do valor total mensal")
}
//console.log(faturamentoTotal)