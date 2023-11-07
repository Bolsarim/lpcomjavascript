//Estruturas de decisão
/* 
if --> se
if(condição){
    resposta verdadeira
}

if...else --> se senão
if(condição){
    resposta verdadeira
}else{
    resposta falsa
}
*/ 
let idade = 16
if(idade >=18){
        console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

console.log("Escolha o suco:\n1 - Laranja\n2 - Uva\n3 - Abacaxi")
let suco = 3
if(suco == 1){
    console.log("🍊")
}else if(suco == 2){
    console.log("🍇")
}else if(suco == 3){
    console.log("🍍")
}else{
    console.log("Opção inválida")
}

switch(suco){
    case 1:
        console.log("🍊")
        break
    case 2:
            console.log("🍇")
         break
    case 3:
                console.log("suco de 🍍")
         break
  default:
                    console.log("Opção inválida")
         break
}




