var nome = "João Santiago!"
var notaPrimeiroBi = 9
var notaSegundoBi = 8.3
var notaTerceiroBi = 6.1
var notaQuartoBi = 4.5
var somasNotas = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)
var notaFinal = somasNotas / 4
var notaFixada = notaFinal.toFixed(1)
console.log("Seja bem vindo "+ nome)
console.log("Sua média final é "+notaFixada)
if (notaFixada >= 7.00)
  console.log("Você passou de ano!")
else
  console.log ("Você foi reprovado!")


/*
Revisão
variárveis, string, console.log, toFixed, operações matemáticas, concatenação.

Desafios
Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não {OK}
Alterar o fundo da tela da maneira que achar mais legal {OK}
Imprimir na própria página o resultado, ao invés do console
Criar um conversor de temperaturas entre farenheit e celcius
Colocar a conta inteira da média em apenas uma linha {OK}
*/
