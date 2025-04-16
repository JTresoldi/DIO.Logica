// Lista dos Herois escolhidos:
let listaDeHerois = [
    { nome: "Guts", xp: 8090},
    { nome: "Musashi", xp: 4590 },
    { nome: "Goku", xp: 9600 },
    { nome: "Gojo", xp: 9999 },
    { nome: "Sung Jin-woo", xp: 12000 }
];

// Laço de repetição para rodar a lista de herois:
for (const heroi of listaDeHerois){
    let nomeHeroi = heroi.nome;
    let xp = heroi.xp;
    let rank;

// Estrutura de decisão para determinar o nível do heroi:
if (xp <= 1000) {
    rank = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    rank = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    rank = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    rank = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    rank = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    rank = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    rank = "Imortal";
} else if (xp >= 10001) {
    rank = "Radiante";
} 

// Saída da mensagem.
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xp} e está no rank de ${rank}!`);
}