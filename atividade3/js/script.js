// alert("Eae meu fi kkkkkkkk!")
const a = Number(prompt("Digite o seu salário atual: "));
const b = Number(prompt("Digite a porcentagem de aumento: "));


let resultado = a + (a * (b/100));

// console.log(resultado);

document.write("Novo salário: R$" + resultado);