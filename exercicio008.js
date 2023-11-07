/*Faça um Programa que leia um número e exiba o dia correspondente da semana. 
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido. */

console.log("Escreva um numero de 1 ao 7 para ser exibida um dia da semana")

let dia_da_semana = 7
if(dia_da_semana == 1){
    console.log("domingo")
}else if(dia_da_semana == 2){
    console.log("segunda")
}else if(dia_da_semana == 3){
    console.log("terça")
}else if(dia_da_semana == 4){
    console.log("quarta")
}else if(dia_da_semana == 5){
    console.log("quinta")
}else if(dia_da_semana == 6){
    console.log("sexta")
}else if(dia_da_semana == 7){
    console.log("sábado")
}else{
    console.log("Opção inválida")
}