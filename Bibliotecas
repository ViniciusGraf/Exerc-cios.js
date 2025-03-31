# Bibliotecas

// Importação de bibliotecas
import java.util.Scanner; // Para entrada de dados pelo teclado
import java.util.Date; // Para manipulação de datas e horas
import javax.swing.JOptionPane; // Para exibir janelas de diálogo

public class BibliotecaJava {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Uso da biblioteca java.lang.Math
        System.out.print("Digite um número para operações matemáticas: ");
        double num = scanner.nextDouble();
        System.out.println("Potência (num^2): " + Math.pow(num, 2)); // Eleva o número ao quadrado
        System.out.println("Raiz quadrada: " + Math.sqrt(num)); // Calcula a raiz quadrada do número
        System.out.println("Valor absoluto: " + Math.abs(num)); // Retorna o valor absoluto do número
        System.out.println("Seno (radianos): " + Math.sin(num)); // Calcula o seno do número em radianos
        
        // Uso da biblioteca java.lang.String
        scanner.nextLine(); // Limpar buffer após a entrada de número
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();
        System.out.println("Tamanho da palavra: " + palavra.length()); // Retorna o número de caracteres na palavra
        System.out.println("Primeira letra: " + palavra.charAt(0)); // Retorna o primeiro caractere da palavra
        System.out.println("Comparação com 'Java': " + palavra.equals("Java")); // Verifica se a palavra digitada é "Java"
        
        // Uso da biblioteca java.lang.Character
        System.out.print("Digite um único caractere: ");
        char c = scanner.next().charAt(0);
        System.out.println("É alfabético? " + Character.isAlphabetic(c)); // Verifica se o caractere é uma letra
        System.out.println("É numérico? " + Character.isDigit(c)); // Verifica se o caractere é um número
        System.out.println("Maiúscula: " + Character.toUpperCase(c)); // Converte o caractere para maiúscula
        System.out.println("Minúscula: " + Character.toLowerCase(c)); // Converte o caractere para minúscula
        
        // Uso da biblioteca java.util.Date
        Date dataAtual = new Date(); // Obtém a data e hora atuais
        System.out.println("Data atual: " + dataAtual);
        
        // Uso da biblioteca javax.swing.JOptionPane
        JOptionPane.showMessageDialog(null, "Exemplo de interface gráfica com JOptionPane!"); // Exibe um pop-up com uma mensagem
        
        scanner.close(); // Fecha o scanner para evitar vazamento de recursos
    }
}
