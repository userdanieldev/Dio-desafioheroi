// Variáveis tag e Xp:

let tagDoHeroi = "Ragnar"
let xpDoHeroi = 9857

// Estrutura de processamento para determinar o nível do Herói: 

if (xpDoHeroi < 1000) {
Nivel = "Ferro"
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    Nivel = "Bronze"
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    Nivel = "Prata"
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    Nivel = "Ouro"
}else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    Nivel = "Platina"
}else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    Nivel = "Ascendente"
}else if (xpDoHeroi >=9001 && xpDoHeroi <= 10000) {
    Nivel = "imortal"
}else {
    Nivel = "Radiante"
}

// Saída:

console.log(`O Herói de nome ${tagDoHeroi} está no nível de ${Nivel}`);