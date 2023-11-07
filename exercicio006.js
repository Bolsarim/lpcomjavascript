/* Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, 
sabendo que a decisão é sempre pelo mais barato. */



let produto1 = 60, produto2 = 110, produto3 = 50

if(produto1 < produto2 && produto1 < produto3){
    console.log("produto 1 é menor")
}else if(produto2 < produto1 && produto2 < produto3){
    console.log("Produto 2 é menor")
}else if(produto3 < produto1 && produto3 < produto2){
    console.log("Produto 3 é menor")
}