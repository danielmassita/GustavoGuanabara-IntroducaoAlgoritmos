// Estruturas Condicionais 2 - Curso de Algoritmos #08 - Gustavo Guanabara
// https://youtu.be/7gGFHzqh4d8

/*
Estruturas Condicionais - Parte 2
Na aula passado nós vimos Condicional Simples e Composta. Hoje vamos ver as Condicionais Aninhadas e as Estruturas de Escolha. 

Por exemplo:
Se (eu tiver muito dinheiro) então
  eu vou fazer uma viagem pra Disney
Senao 
  Eu vou ficar em casa
FimSe

Podemos imcrementar essa estrutura simples, com um meio termo. Se não tiver muito dinheiro, mas sim uma graninha, posso visitar minha cidade natal.
Por exemplo:

Se (eu tiver muito dinheiro) então
  eu vou fazer uma viagem pra Disney
Senão Se (eu tiver uma graninha) então
  vou visitar minha cidade natal
Senao 
  Eu vou ficar em casa
FimSe

// Definição mais formal da estrutura CONDICIONAL COMPOSTA ou ANINHADA (note-se as estruturas umas dentro das outras):

Se (situação 1) entao
  Bloco A
Senao
  Se (situação 2) entao
    Bloco B
  Senao 
    Bloco C
  Fimse
FimSe

Se (dinheiro >= 10000)
  Escreva("Partiu Disney!")
Senao
  Se (dinheiro >= 5000) e (dinheiro < 10000) entao
    Escreva("Visitar família.")
  Senao
    Escreva("#chateado")
  FimSe
FimSe

// Exercício 02 
No exemplo do Aluno Aprovado ou Reprovado (Exercício 2).
Média >= 7 aprovado.
7 < Média <= 5 recuperação.
Média < 5 reprovado.

algoritmo "Aluno"
var
   N1, N2, M: Real
inicio
      Escreva("Primeira nota: ")
      Leia(N1)
      Escreva("Segunda nota: ")
      Leia(N2)
      M <- (N1 + N2) / 2
      Escreval("")
      Escreval("A média do aluno foi ", M:4:2)
      Escreva("")

      Se (media >= 7) ENTAO
         Escreval("Aluno APROVADO.")
      senao
           Se (M >= 5) e (M < 7) entao
              Escreval("Aluno em RECUPERAÇÃO.")
           Senao
                Escreval("Aluno REPROVADO.")
           FimSe
      FimSe

fimalgoritmo


// Prática 02 - Cálculo do IMC
IMC = (massa)/(altura^2)
Faixas do IMC 
- abaixo de 17 -> Muito abaixo do peso
- entre 17 e 18,5 -> Abaixo do peso
- de 18,5 a 25 -> Peso ideal
- de 25 a 30 -> Sobrepeso
- de 30 a 35 -> Obesidade
- de 35 a 40 -> Obesidade severa
- 40 ou mais -> Obesidade mórbida

algoritmo "CalculoIMC"
var
   M, A, IMC: Real
inicio
      Escreva("Massa (kg): ")
      Leia(M)
      Escreva("Altura (m): ")
      Leia(A)
      IMC <- M / (A^2)
      Escreval("IMC: ", IMC:5:2)

      Se (IMC < 17) entao
         Escreval("Muito abaixo do peso.")
      Senao
           Se (IMC >= 17) e (IMC < 18.5) entao
              Escreval("Abaixo do peso.")
           Senao
                Se (IMC >= 18.5) e (IMC < 25) entao
                   Escreval("Peso ideal.")
                Senao
                     Se (IMC >= 25) e (IMC < 30) entao
                        Escreval("Sobrepeso.")
                     Senao
                          Se (IMC >= 30) e (IMC < 35) entao
                             Escreval("Obesidade.")
                          Senao
                               Se (IMC >= 35) e (IMC < 40) entao
                                  Escreval("Obesidade severa.")
                               Senao
                                    Escreval("Obesidade mórbida.")
                               FimSe
                          FimSe
                     FimSe
                FimSe
           FimSe
      
      FimSe
fimalgoritmo

// Podemos trabalhar também no casos numéricos simples (mas com muitos casos), podemos usar a Estrutura CONDICIONAL ESTRUTURA-CASO. E ao final, acaso nenhum dos valores acimas foram atingidos, então OutroCaso que pode ser usada ou omitida.
// Porém a estrutura-caso não serve pra testar faixas de valores ( < ou > ou igual ) então é basicamente valores específicos.


Escolha (variável)
	Caso valor
		Bloco A
	Caso valor
		Bloco B
	Caso valor
		Bloco C
	OutroCaso
		Bloco D
FimEscolha


algoritmo "DependentesFuncionario"
var
   Nome: Caractere
   Sal, NSal: Real
   Dep: Inteiro

inicio
      Escreva("Qual o nome do funcionário? ")
      Leia(Nome)
      Escreva("Qual o salário do funcionário? R$ ")
      Leia(Sal)
      Escreva("Qual é a quantidade de dependentes? ")
      Leia(Dep)
      
      Escolha Dep
              Caso 0
                   NSal <- Sal + (Sal*5/100)
              Caso 1, 2, 3
                   NSal <- Sal + (Sal*10/100)
              Caso 4, 5, 6
                   NSal <- Sal + (Sal*15/100)
              OutroCaso
                       NSal <- Sal + (Sal*18/100)
      FimEscolha
      Escreval("O novo salário de ", Nome, " será de R$: ", NSal:5:2)
      Escreval("---------------------------")
fimalgoritmo
*/

/*
Exercício 01: Aproveitamento de um aluno
Aproveitamento
A (10 - 9.0)
B (8.9 - 8.0)
C (7.9 - 7.0)
D (6.9 - 6.0)
E (5.9 - 5.0)
F (abaixo 5)

Exemplo: 

--------------------------
Escola Javali Cansado D+
--------------------------
Primeira Nota: 
Segunda Nota: 
--------------------------
 MEDIA: 
 Aproveitamento: 
--------------------------

Resposta:

algoritmo "SituacaoAluno"
var
   nota1, nota2, media: Real
inicio
      EscrevaL("-----------------------")
      EscrevaL(" ESCOLA JAVALI CANSADO ")
      EscrevaL("-----------------------")
      Escreva("Primeira Nota: ")
      Leia(nota1)
      Escreva("Segunda Nota: ")
      Leia(nota2)
      media <- (nota1 + nota2)/2
      EscrevaL("-----------------------")
      EscrevaL(" MEDIA: ", media:3:1)
      Se (media >=9) e (media <= 10) entao
         EscrevaL(" APROVEITAMENTO: A ")
      senao
           Se (media >= 8) e (media < 9) entao
              EscrevaL (" APROVEITAMENTO: B ")
           senao
                Se (media >= 7) e (media < 8) entao
                   EscrevaL (" APROVEITAMENTO: C ")
                senao
                     Se (media >= 6) e (media < 7) entao
                        EscrevaL (" APROVEITAMENTO: D ")
                     senao
                          Se (media >= 5) e (media < 6) entao
                             EscrevaL (" APROVEITAMENTO: E ")
                          senao
                             EscrevaL(" APROVEITAMENTO: F ")
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe
      EscrevaL("-----------------------")
fimalgoritmo


Exercício 02: Partida de Futebol - Poderemos usar o método Escolha-Caso

Exemplo:

--------------------------
     BANGU X MADUREIRA
--------------------------
Quantos gols do Bangu? 
Quantos gols do Madureira? 
--------------------------
 DIFERENÇA: 1-3, >3, 0
 STATUS: Partida Normal, Goleada, Empate
--------------------------

Resposta:

algoritmo "PartidaFutebol"
var
   gols1, gols2, dif: Real
inicio
      EscrevaL("-----------------------")
      EscrevaL("   BANGU x MADUREIRA   ")
      EscrevaL("-----------------------")
      Escreva("Quantos gols do BANGU? ")
      Leia(gols1)
      Escreva("Quantos gols do MADUREIRA? ")
      Leia(gols2)
      Se (gols1 > gols2) entao
         dif <- gols1 - gols2
      senao
         dif <- gols2 - gols1
      FimSe
      EscrevaL("-----------------------")
      EscrevaL(" DIFERENCA: ", dif)
      Escolha dif
         Caso 0
              EscrevaL(" STATUS: EMPATE ")
         Caso 1, 2, 3
              EscrevaL(" STATUS: PARTIDA NORMAL ")
         Caso 4,5, 6, 7
              EscrevaL(" STATUS: GOLEADA ")
         OutroCaso
              EscrevaL(" STATUS: ALGO INCOMUM. ")
              EscrevaL(" Voce digitou os dados corretos? ")
      FimEscolha
      EscrevaL("-----------------------")
fimalgoritmo

*/

/*
TRANSCRIÇÃO

*/
