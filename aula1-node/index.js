import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync();
// const nome = prompt("Digite o seu nome: ");
// console.log(`Olá ${nome}!`);
// //console.log("Olá " + nome + "!");

// const temp = Number(prompt("Digite a temperatura: "))
// if(temp>=38){
//     console.log("Febre se fudeu")
// }
// else if (temp < 26){
//     console.log("morreu fi ja era kkkkkkkk")
// }
// else {
//     console.log("Tudo ok")
// }


//Exercicio 1 - receba o salario e o reajuste
const salario = Number(prompt("Digite seu salário: "))
const reajuste = Number(prompt("Digite o reajuste: "))

let novoSalario = 0
novoSalario = salario + salario * (reajuste / 100)
console.log("Seu novo salário: " + novoSalario)
console.log(chalk.blue(`Seu novo salário : ${novoSalario}`))

console.log("-------------------------------------------------------------------")

//Exercicio 2 - receba o ano de nascimento para descobrir se pode dirigir
const nascimento = Number(prompt("Digite o ano que tu nasceu: "))

let today = new Date();
let ano = today.getFullYear()
console.log(ano)
if(ano-nascimento<18){
    console.log(chalk.bgCyan("pode dirigi"))
}
else{
    console.log(chalk.bgGray("num pode dirigi"))
}