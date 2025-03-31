# Consulta Prova

import java.util.Scanner;

public class JavaBasico {
    public static void main(String[] args) {
        // Criando um Scanner para entrada de dados
        Scanner scanner = new Scanner(System.in);

        // 1. Lendo diferentes tipos de dados
        System.out.print("Digite um número inteiro: ");
        int numeroInteiro = scanner.nextInt(); // Lendo um inteiro
        System.out.println("Você digitou: " + numeroInteiro);

        System.out.print("Digite um número decimal: ");
        double numeroDecimal = scanner.nextDouble(); // Lendo um número decimal
        System.out.println("Você digitou: " + numeroDecimal);

        // 2. Lendo uma palavra e uma linha inteira
        scanner.nextLine(); // Limpar o buffer do teclado
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.next(); // Lendo uma única palavra
        System.out.println("Palavra digitada: " + palavra);

        scanner.nextLine(); // Limpar o buffer novamente
        System.out.print("Digite uma frase inteira: ");
        String frase = scanner.nextLine(); // Lendo uma linha completa
        System.out.println("Frase digitada: " + frase);

        // 3. Lendo um único caractere
        System.out.print("Digite um único caractere: ");
        char caractere = scanner.next().charAt(0); // Pegando o primeiro caractere digitado
        System.out.println("Caractere digitado: " + caractere);

        // 4. Convertendo para maiúsculas e minúsculas
        System.out.println("Caractere em maiúsculo: " + Character.toUpperCase(caractere));
        System.out.println("Caractere em minúsculo: " + Character.toLowerCase(caractere));

        // 5. Estruturas de decisão - if/else
        System.out.print("Digite um número para verificar se é positivo ou negativo: ");
        int numero = scanner.nextInt();
        if (numero > 0) {
            System.out.println("O número é positivo.");
        } else if (numero < 0) {
            System.out.println("O número é negativo.");
        } else {
            System.out.println("O número é zero.");
        }

        // 6. Estruturas de decisão - switch
        System.out.print("Digite uma letra (a, b ou c): ");
        char letra = scanner.next().charAt(0);
        switch (letra) {
            case 'a':
                System.out.println("Você digitou a letra A.");
                break;
            case 'b':
                System.out.println("Você digitou a letra B.");
                break;
            case 'c':
                System.out.println("Você digitou a letra C.");
                break;
            default:
                System.out.println("Letra não reconhecida.");
                break;
        }

        // 7. Estruturas de repetição - for
        System.out.println("Contagem de 1 a 5 usando 'for':");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // 8. Estruturas de repetição - while
        System.out.print("Digite um número maior que 0 para contar até ele: ");
        int limite = scanner.nextInt();
        int contador = 1;
        while (contador <= limite) {
            System.out.print(contador + " ");
            contador++;
        }
        System.out.println();

        // Fechando o Scanner
        scanner.close();
    }
}
