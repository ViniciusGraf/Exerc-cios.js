//exercicio 1

let nome = "João"
console.log(nome)

// exercicio 2

let a = 5, b = 10, soma
soma = a + b
console.log(soma)

// excercicio 3

let primeironome = "Josefa", segundonome = "Silva"
console.log(primeironome , segundonome)

// exercicio 4

let pessoa = {
    nome : "Bolsonaro",
    idade : 17,
    endereço : "Beco",
    telefone : 1313131313,
}

console.log(pessoa)

// exercicio 4

let frutas = ["maçã", "banana", "laranja"]
frutas.push ("uva")
frutas.push("melancia") 
console.log(frutas)

// exercicios 5

let numeros = [1, 2, 3, 4, 5]
console.log(numeros[0], numeros[4])

// excercicios 6

let cores = ["vermelho", "verde", "azul"]
for(let i = 0; i <= 2; i++) {  
    console.log(cores[i], "\n")
}

// exercicios 7

let idade = 18

if(idade >= 18) {
    console.log("Maior de Idade, gg pae")
} else {
    console.log("Menor de idade, Saia daqui doidão")
}

// exercicios 8

let nota = 3
if(nota >= 7){
    console.log("\nAprovado, pode descanaçar")
} else {
    if(nota > 5){
        console.log("\nRecuperação, ainda a chance")
    } else {
        console.log("\nReprovado, BURRÃO")
    }
}

// exercicios 9

let diadasemana = 6

switch(diadasemana) {
    case 1: {
        console.log("\nDomingo");
    }
    break
    case 2: {
        console.log("\nSegunda");
    }
    break
    case 3: {
        console.log("\nTerça");
    }
    case 4: {
        console.log("\nQuarta");
    }
    break
    case 5: {
        console.log("\nQuinta");
    }
    break
    case 6: {
        console.log("\nSexta");
    } 
    break
    case 7: {
        console.log("\nSabádo");
    }
}

// exercicios 10

    for(let i = 1; i <= 10; i++) {
        console.log(i,"\n");
    }

// exercicios 11

    let contador = 1

    while(contador <= 5) {
        console.log(contador);
        contador++
    }
console.log("\n");

// exercicios 12

    let numero = 0

    while(numero <= 30){
        console.log(numero);
        numero = numero + 2
    }

// exercicios 13

    let vetor = [10, 20, 30, 40, 50], somaa = 0

    for(i = 0; i < vetor.length; i++) {
        somaa = somaa + vetor[i]
    }
    console.log(somaa);

// exercicios 14

    let numeross = [8,22,15,39,2], maior = 0

    for(let i = 0; i < 5; i++) {
        if(maior < numeross[i]) {
            maior = numeross[i]
        }
    }
    console.log(maior);

// exercicios 15

let numerosss = [8,22,15,39,2], menor = 99

    for(let i = 0; i < 5; i++) {
        if(menor > numerosss[i]) {
            menor = numerosss[i]
        }
    }
    console.log(menor);

// exercicios 16

    let n = 5, resultado

    for(i = 4; i >= 1; i--) {
        resultado = i * n
        n = resultado
    }
    console.log(resultado);

// exercicios 17

    let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for(let i = 0; i < valores.length; i++) {
        if(valores[i] % 2 === 0) {
            console.log("O numero ",valores[i], " é par");
        } else {
            console.log("O numero ",valores[i], " é impar");
        }
    }

// exercicios 18

    let texto = "Salve de Cria total", salve = 0, vogais = ["a","e","i","o","u"]
    
    for(i = 0; i < texto.length; i++) {
        if(vogais.includes(texto[i])) {
            salve++
        }
    }
        console.log(salve)

// exercicios 19

    let teexto = "Mc Minecraft é brabo!", te = ""

    for(i = teexto.length - 1; i >= 0; i--) {
            te += teexto[i]
        } 
        console.log(te);

// exercicios 20

    let inicio = 1, fim = 10

    for(i = inicio; i <= fim; i++) {
        if((i / i === 1) && (i / 1 === i)) {
            console.log(i, " É um numero primo");
        } else {
            if(i / 2 === "") {
            console.log(i, " Não tem numero primo aqui doidão");
            }
        }
    }