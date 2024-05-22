var qg = prompt("Digite a qtd de gols")
var qc = prompt("Digite a Qtd de Passes Certos")
var qe = prompt("Digite a Qtd de Passes Errados")

var pontos = (qg * 50) + (qe * 10) + (qc * - 5);
    alert("Total de Pontuação: " + pontos)
if(pontos <50){
    alert("Péssima Partida");
}else if(pontos>= 50 && pontos <100){
    alert("Partida Ruim");
}else if(pontos>= 100 && pontos < 150){
    alert("Fez o Básico");
}else if(pontos >= 150 && pontos < 200){
    alert("Foi bem na Partida");
}else{
    alert("Jogou Demais");
}