dados = [
	{
		"dia": "1",
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

//variaveis utilizadas, atribuindo os dados do primeiro dia do mês ao menor e maior faturamento para calculo posterior
var menorFaturamento = dados[0].valor
var maiorFaturamento = dados[0].valor
var totalFaturamento = 0
var diasFaturados = 0
var mediaFaturamento = 0
var diasComFaturamentoSuperiorMédia = 0

//laço de repetição para verificar o maior e o menor faturamento, além de coletar os dados para calculo da média mensal
for(let i = 0; i < dados.length; i++){
    //verifica o menor faturamento
    if(dados[i].valor < menorFaturamento){
        menorFaturamento = dados[i].valor
    }
    //verifica o maior faturamento
    if(dados[i].valor > maiorFaturamento){
        maiorFaturamento = dados[i].valor
    }
    //verifica se houve faturamento e se sim soma aos dias faturados
    if(dados[i].valor > 0){
        diasFaturados+= 1
    }
    //soma o faturamento
    totalFaturamento += dados[i].valor
}

//calculo da média
mediaFaturamento = totalFaturamento/diasFaturados

//verificação do número de dias em que o faturamento diario foi superior a média mensal
for(let i = 0; i < dados.length; i++){
    if(dados[i].valor > mediaFaturamento){
        diasComFaturamentoSuperiorMédia += 1
    }
}

//exibição dos resultados
console.log("Menor faturamento: " + menorFaturamento)
console.log("Maior faturamento: " + maiorFaturamento)
console.log(diasComFaturamentoSuperiorMédia + " dias com faturamento acima da média mensal")