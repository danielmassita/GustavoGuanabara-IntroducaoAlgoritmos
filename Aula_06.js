// Exercícios de Algoritmo Resolvidos - Curso de Algoritmos #06 - Gustavo Guanabara
// https://youtu.be/v2nCgGSVCeE

/*
Vamos iniciar agora uma seqüência de exercícios, usando uma personagem fictícia pra resolver tanto no VisuAlg e no Scratch os resultados dos scripts. 
Exercícios de Algoritmos Resolvidos no VisuAlg e no Scratch (6 exercícios)

Problemas propostos:

SITUAÇÃO 1 
Creuza fará aniversário, mas não sabe quantas velas utilizar no bolo. Vamos começar no SCRATCH. Vamos fazer uma interação entre a Creuza e o nosso programa (script).

SCRATCH > Remover Sprite1
New Sprite > Choose a sprite > Avery
Backdrop > Choose a Backdrop > Room 1
Avery > Code
  - Events > When Flag Clicked
    - Sensing > Ask > "Em que ano nós estamos? "
    - Answer
    - Sensing > Ask > "Em que ano eu nasci? "
    - Answer
    
// Vamos atribuir para as respostas novas variáveis ("ano_atual" e "ano_nasc").     
  
  - Variables > Make a Variable
    - "ano_atual"
    - "ano_nasc"
    - Change "ano_atual" by "Answer"
    - Change "ano_nasc" by "Answer"
  
  - Variables > Make a Variable > "idade"
    - Change "idade" by (Operator > ( ) - ( ) > (ano_atual) - (ano_nasc)
    - Looks > Think > "Hmm..." for 2 secs > Operators > ( ) + ( ) > ("Minha idade é ") + (idade)

// Final do código Creuza01 -> https://raw.githubusercontent.com/danielmassita/GustavoGuanabara-IntroducaoAlgoritmos/main/Algoritmos-Aula06-Creuza01.png

VISUALG

! (Ctrl) + (Space)
algoritmo "Creuza01"
var
   ano_atual, ano_nasc, idade: Inteiro

inicio
      Escreva("Em que ano nós estamos? ")
      Leia(ano_atual)
      Escreva("Em que ano eu nasci? ")
      Leia(ano_nasc)
      idade <- (ano_atual) - (ano_nasc)
      Escreva("Esse ano, minha idade será ", idade)
fimalgoritmo

// (----- Fim da SITUAÇÃO 1 -----) 

SITUAÇÃO 2
Creuza fez aniversário e quer se dar um presente de aniversário - uma viagem aos EUA. "Creuza vai viajar e precisa comprar dólares."
Google: Hoje 09/04/2023 1 USD = 5,06 BRL. No exemplo USD 1 : 2,22 BRL.

SCRATCH

- Stage > Backdrop > Select > Urban
- Sprite1 > Delete
- New Sprite > Choose a Sprite > Avery

- Control > When Flag Clicked
- Sensing > Ask "Quantos reais (BRL) eu tenho? ") and Wait...
  - Answer > 
- Variable > Make a Variable > "reais"
- Variable > Make a Variable > "dolares"
  - Change "reais" by (Answer)
  - Change "dolares" by > Operator ( )/( ) > (reais)/(5.06)
- Looks > Say > Operator > Join ( )+( ) > ("Na cotação, posso ter US$ ") + (dolares)

// Final do código "Creuza02" -> https://raw.githubusercontent.com/danielmassita/GustavoGuanabara-IntroducaoAlgoritmos/main/Algoritmos-Aula06-Creuza02.png

VISUALG 

algoritmo "Creuza02"
var
   reais, dolares: Real
inicio
      Escreva("Quantos reais (BRL) eu tenho? R$ ")
      Leia(reais)
      dolares <- reais / (5.06)
      Escreva("Na cotação, posso ter US$ ", dolares)

fimalgoritmo

// (----- Fim da SITUAÇÃO 2 -----) 

*/

/*
TRANSCRIÇÃO
0:04
♫ Música de Abertura ♫
0:21
Olá! Seja bem-vindo a mais uma aula do seu curso de Algoritmo.
0:25
O meu nome é Gustavo Guanabara, eu sou seu professor...
0:27
...e agora, depois daquelas aulas todas que a gente viu.
0:30
Finalmente, nós chegamos a nossa primeira aula exercícios!
0:33
Nós vamos exercitar as estruturas sequenciais na hora de criar nossos algoritmos.
0:38
Então, eu criei algumas situações aqui. Nós vamos tentar resolver esses problemas,
0:44
tanto no "Scratch", quanto no "Visualg".
0:46
Inicialmente, nós vamos utilizar as duas ferramentas, mas foque os seus estudos no "Visualg".
0:51
Pois, é com ele que você vai partir para outras linguagens de programação, como:
0:54
Java, PHP e outras linguagens que você queira aprender.
0:58
Então, vamos começar a nossa aula de exercícios resolvidos...
1:01
...conhecendo uma personagem importante, que vai ajudar bastante a gente, hoje.
1:05
Então, vamos partir para a nossa aula de exercícios, apresentando uma pessoa muito importante: a "Creuza"!
1:12
A Creuza, essa figura que faz parte do pacote do "Scratch".
1:16
Então, nós vamos utilizar ela na nossa programação.
1:18
A Creuza é gente boa pra caramba e está precisando de ajuda.
1:21
Na verdade, ela está precisando de seis ajudas!
1:24
E nós, vamos começar a ajudar a Creuza, resolvendo esses pequenos problemas que ela tem.
1:28
O primeiro problema é que está para acontecer o aniversário dela e ela não sabe quantas velinhas colocar no bolo.
1:34
Então, como eu disse...
1:35
...está para acontecer o aniversário da Creuza...
1:37
...e ela não saber quantas velinhas colocar em cima do bolo.
1:40
Deu um problema na cabeça dela.
1:42
Ela sabe o ano em que nasceu, mas não lembra sua idade.
1:45
E nós vamos fazer um programa para resolver este problema simples, que a Creuza está tendo.
1:50
E vamos, logo de cara, usando o "Scratch", que é mais simples e a gente pode colocar a Creuza, na tela.
1:55
É importante dizer que neste primeiro exercício, eu vou mostrar o passo-a-passo para criação da Creuza,
1:59
colocar ela na mesa e tal.
2:01
Depois, nos próximos exercícios, eu já vou aparecer com tudo isso pronto!
2:04
Então, caso você tenha alguma dúvida à frente, volte à aula cinco, pois, só vou mostrar isso uma vez!
2:10
Então, você vai abrir o "Scratch". Ele vai aparecer com um gatinho...
2:13
...e eu vou remover este objeto.
2:15
Para isso, eu vou clicar com o botão direito e vou escolher "apagar".
2:19
Agora, eu estou sem objeto nenhum.
2:21
Vamos adicionar a Creuza, clicando sobre este botão aqui do meio.
2:24
Que é "Escolha um sprite do arquivo".
2:27
Clicando sobre ele, nós vamos entrar na área "People" e a Creuza...
2:32
...está em algum lugar, por aqui.
2:33
Aqui!
2:34
Vou colocar...
2:37
...ela paradinha, lá!
2:38
Posso vir, aqui, ao palco...
2:40
vir aqui em fundo de tela...
2:42
importar um fundo.
2:44
Vamos colocar a Creusa na casa dela.
2:46
Será que tem a casa?
2:51
A Creuza.
2:53
Tá lá na casa dela.
2:54
Está prestes a fazer aniversário.
2:56
E está com algum problema.
2:57
Vamos clicar aqui no objeto.
2:59
O objeto tem que estar selecionado.
3:01
Vamos ver os comandos pra ela.
3:03
Então meu comando vai ser...
3:04
quando eu clicar na bandeira...
3:06
vai acontecer algo.
3:07
Então como eu disse antes, apenas recapitulando,
3:09
a Creuza tá com um problema...
3:11
ela sabe quando nasceu
3:12
mas ela não sabe quantas velinha tem que colocar no bolo.
3:15
Então o que vamos fazer, é criar uma interação entre a Creuza e o nosso programa.
3:19
Vamos ver como a gente faz isso!
3:20
Então coloquei lá
3:22
na minha seção de controle: quando a bandeira for clicada.
3:24
Vamos criar aqui um sensor.
3:26
Onde a Creuza pergunte: - Em que ano nós estamos?
3:30
E a depois espere a resposta.
3:31
Vou colocar a resposta aqui em baixo.
3:33
Mais tarde ela vai fazer outra pergunta.
3:35
Que vai ser
3:37
Em que ano eu nasci?
3:39
E também vai aguardar a resposta.
3:41
E as respostas não podem ficar aí soltas, elas tem que ser guardadas
3:45
Vimos nas aulas anteriores que existem as variáveis. Então temos que criar variáveis
3:50
para o ano atual e para o ano em que ela nasceu.
3:53
Então vamos aqui em variáveis.
3:55
vamos criar uma variável
3:57
para o ano atual
4:01
e outra variável para ano de nascimento
4:04
E não se esqueça das regras de nomeação de identificadores
4:07
que vimos na aula 2 de algoritmos.
4:09
Então se você ainda tem dúvida
4:10
Vai lá pra aula 2 e vê quais são as 6 regras.
4:13
Tem que começar com letra, depois pode ser letra ou número, não pode conter espaço
4:17
não pode ter acentuação, não pode ser palavras reservadas e nem conter simbolos
4:22
então essas são as 6 regras de nomeação de identificadores
4:25
que a gente tem dentro das linguagens de programação, então...
4:27
a gente utilizou o underline "_" para separar duas palavras, então, esses são os nomes válidos
4:33
então, agora vou ter que colocar cada uma destas respostas dentro das variáveis
4:37
então eu vou colocar aqui, mude o "ano_atual" para "resposta", no que eu der no primeiro
4:43
depois faz a segunda pergunta, depois eu vou mudar o ano de nascimento "ano_nasc" para "resposta"
4:50
cuidado para você não selecionar o "mude por", que ele vai adicionar valores
4:55
aqui tem que ser "mude para" e "mude para"
4:57
então agora ele solicitou "Em que anos nós estamos?"
5:00
Na variável "ano_atual" perguntou em que ela nasceu
5:03
e guardou na variável de ano nascimento "ano_nasc"
5:05
e agora ficou simples né? Para você saber a idade de uma pessoa basta saber o ano que nós estamos
5:11
e o ano que ela nasceu, basta subtrair esses dois valores...
5:14
e aí nós chegamos na idade da pessoa.
5:17
Para fazer essa conta, vamos criar mais uma variável, que é a idade da Creuza.
5:21
Então, aqui na área de variáveis, vou criar mais uma, chamada idade
5:27
e eu vou mudar a idade para uma fórmula
5:30
Para isso eu vou utilizar os operadores que nós já vimos
5:32
é um operador de subtração
5:34
Que vai conter o ano atual
5:37
Menos o ano de nascimento da Creuza.
5:40
Então nós vamos mudar a idade para "ano_atual" menos ano de nascimento "ano_nasc"
5:45
Agora eu vou fazer com que a Creuza descubra qual é a idade dela.
5:49
Para isso eu vou clicar em "Aparência" e mandar ela pensar a idade dela
5:54
Vou vir aqui em variável, pegar a idade e soltar nesta caixa
6:00
Cuidado para não soltar nesta caixa que é o tempo em segundos que ela vai pensar.
6:03
Vamos clicar na bandeira e ver o resultado.
6:06
A primeira coisa que a Creuza fez foi perguntar "Em que anos nós estamos?"
6:10
Nós estamos em 2014. Em que ano ela nasceu?
6:14
Você nasceu, Creuza, em 1999.
6:18
Pressionando "Enter"
6:20
Ela vai pensar que tem quinze anos.
6:23
Viu como foi simples a linha de raciocínio?
6:25
Uma coisa que ficou esquisita foi ela pensar só em um número
6:28
Vamos colocar uma mensagem para ela pensar.
6:30
Para isso vou vir em "Operadores", e usar o "junte"
6:35
Então ele vai juntar alguma coisa com outra.
6:39
Vou colocar "Minha idade será" e depois a idade.
6:45
Vou arrastar esse "junte" para cá.
6:47
Executando mais uma vez...
6:49
"Em que ano nós estamos?", 2014. Em que ano nasceu: 1999.
6:54
Agora ela vai pensar "Minha idade será 15."
6:57
Fazendo desse jeito fica muito fácil, não é isso?
7:00
Agora vamos partir para o "Visualg"
7:02
E vamos ver como seria essa mesma solução utilizando a primeira ferramenta...
7:05
para construção de algoritmos que nós apresentamos nesse curso.
7:08
Passando aqui para o "Visualg"
7:10
Nós vamos fazer o programa "Creuza01"
7:13
No início do programa...
7:15
Nós vamos fazer a mesma coisa aqui, vamos fazer com que ela pergunte em que ano nós estamos
7:19
E espere uma resposta.
7:21
Vamos colocar aqui Escreva("Em que ano nos estamos? ")
7:28
Lembrando que você pode utilizar acentuação aqui...
7:31
Eu só não estou utilizando por conta da incompatibilidade do meu teclado
7:35
com essa máquina virtual do windows.
7:37
Vamos colocar Leia e entre parênteses "()", vamos colocar a variável que será armazenado
7:42
No caso aqui, vou utilizar o mesmo nome, ano underline atual "ano_atual"
7:45
Vamos colocar ano underline atual "(ano_atual)"
7:50
Vamos ter que colocar a variável aqui em cima
7:53
"ano_atual" do tipo "Inteiro"
7:56
Vamos fazer a segunda pergunta:
7:59
Escreva("Em que ano eu nasci? ")
8:06
e vamos colocar Leia(ano_nasc)
8:11
Vamos declarar também ano_nasc
8:15
E é importantíssimo que eu dê duas dicas aqui:
8:18
a primeira, você já deve está percebendo, que eu não crio o algoritmo de cima pra baixo,
8:22
eu não começo, como alguns professores pedem em universidades e colégios,
8:26
que logo no início perguntam "quantas variáveis vão ter?"
8:28
eu não sei quantas variáveis vão ter!
8:30
Começa a fazer o programa, precisou da variável, vai lá em cima e declara.
8:33
E a segunda dica, é a indentação
8:35
Indentação indica quais comandos estão dentro de outras estruturas.
8:40
Então, dá uma olhada aqui comigo, que você vai entender o que é indentação.
8:43
Então se você perceber aqui, as minhas variáveis estão um pouco pra dentro.
8:48
Eu simplesmente utilizo a tecla TAB do teclado pra criar essa tabulação.
8:53
Isso indica que as variáveis estão dentro da área "var".
8:56
A mesma coisa aconteceu aqui pro "Escreva",
8:59
onde, quando eu uso uma tabulação, e o "Escreva" vai pra dentro,
9:02
o "inicio" se alinha automaticamente com o "fimalgoritmo".
9:05
Isso não é uma obrigação, mas isso é uma boa prática de programação.
9:09
Seu programa vai funcionar normalmente sem a indentação,
9:12
Mas isso não significa que ela não deva existir.
9:14
Códigos bem indentados são características básicas de um bom programador.
9:19
À partir de agora, eu vou fazer o seguinte: meu ano atual menos o ano de nascimento,
9:24
é a fórmula que eu vou utilizar
9:26
e vou jogar esse resultado dentro da variável idade.
9:30
Eu vou declarar aqui em cima
9:32
e, por fim vamos escrever o resultado
9:37
que é:
9:39
Minha idade será
9:43
e a idade
9:44
Lembrando que essa palavra "idade" está em vermelho porque ela está entre aspas,
9:48
vai aparecer a palavra "idade".
9:50
Essa palavra "idade" está em preto,
9:52
e ela vai aparecer o conteúdo da variável idade,
9:55
nós já vimos isso anteriormente.
9:57
Vamos executar o programa:
9:59
Em que ano nós estamos? 2014.
10:02
Em que ano eu nasci? 1999.
10:05
Ele vai mostrar: "Minha idade será 15."
10:08
Perfeito? Então nós fizemos o mesmo problema resolvido em duas situações diferentes:
10:14
uma utilizando o Scratch e outra utilizando o VisuAlg.
10:17
Inicialmente eu recomendo que você pratique nos dois, pois a prática leva à perfeição.
10:22
E a ferramenta independe disso.
10:24
A qualquer momento, lembre-se que você pode pausar esse vídeo, clicando aqui, e olhar o código,
10:28
fazendo ele no VisuAlg.
10:30
Nunca se esqueça: a melhor maneira de praticar é fazendo.
10:34
Somente assistir a aula não adianta muita coisa.
10:36
Vamos agora partir pra segunda situação onde Creuza vai estrelar aqui mostrar seus problemas.
10:42
O segundo problema que a Creuza vai passar é o seguinte:
10:44
Ela fez aniversário, e ela quer se dar de presente uma viagem pros Estados Unidos.
10:49
E a primeira coisa que tem que se fazer, depois de se comprar a passagem, é óbvio,
10:52
é comprar Dólares.
10:54
E aí a Creuza tá com problema com isso.
10:56
Então, pra comemorar o aniversário, ela vai viajar e precisa comprar Dólares.
11:00
E aí vem o primeiro problema: ela tem o dinheiro dela, que é em Real,
11:03
E ela vai precisar saber quantos Dólares ela vai poder comprar, ou trocar, chame do que quiser.
11:08
E aí eu vou fazer o seguinte: eu tô aqui com o meu navegador num conversor de moedas
11:12
Eu vou colocar aqui, pra eu saber quanto que 1 Dólar ta custando,
11:16
Então 1 Dólar tá custando 2,22.
11:19
Então, pro nosso exercício, vamos considerar 1 Dólar sendo igual a 2 reais e 22 centavos.
11:26
Então eu já criei aqui o Scratch, com a Creuza parada agora no gramado,
11:30
E nós vamos fazer os comandos aqui.
11:32
Vamos criar um controle: "Quando for clicado"
11:35
Nós vamos perguntar: "Quantos reais eu tenho?"
11:41
E vamos aguardar a resposta.
11:43
Essa resposta vai ser guardada numa variável,
11:46
vou criar aqui uma variável, que se chama "reais".
11:51
E nós vamos mudar os reais para a resposta que foi dada.
11:56
Agora nós vamos mudar o dólar,
11:58
para alguma coisa.
12:00
Vamos usar um operador, que é o operador de divisão,
12:05
E nós vamos colocar aqui:
12:06
pra converter, a variável "reais" dividida pela cotação, que é 2,22, como nós vimos anteriormente.
12:16
Vamos fazer agora na aparência ela dizer alguma coisa.
12:21
Vamos criar uma junção.
12:25
Pra ela mostrar: "Posso ter US$", e o valor em Dólar.
12:32
Vamos executar:
12:34
Ela vai perguntar: "Quantos reais eu tenho?" Vou botar 100 reais.
12:38
100 reais dá pra comprar 45,04 dólares.
12:43
Vamos verificar se isso é certo:
12:47
se eu tenho Real, vou converter pra Dólar,
12:51
foram 100.
12:54
Dá 45,05. Né? Arredondando aqui, dá 45,05.
13:00
Vamos fazer um outro exemplo:
13:02
Vamos supor que ela tenha, sei lá, 428 reais.
13:06
428 reais daria 192 dólares, aproximadamente.
13:12
Voltando aqui no meu conversor: 428, daria 192, aproximadamente.
13:21
E vamos agora diretamente pro Visualg.
13:24
No VisuAlg, nós vamos ter o programa "Creuza02"
13:27
E já vou declarar aqui, já que eu já sei as variáveis: reais e dólares, do tipo Real, já que ele tem a parte decimal.
13:37
Vamos escrever: "Quantos Reais eu tenho?"
13:41
Vou botar um R$ do lado só pra facilitar a digitação.
13:45
Vou ler a quantidade de reais.
13:47
Note que a minha variável se chama reais, mas eu não posso declarar uma variável chamada real,
13:51
porque "real" é uma palavra reservada,
13:53
E nós vamos fazer a conversão, que é a quantidade de reais dividida por 2.20,
13:59
que aqui não é 2 vírgula 20. É 2 ponto 20.
14:03
E vamos jogar esse resultado dentro da variável dolares.
14:07
Por fim, vamos escrever o resultado, que é: "Posso ter US$", dolares.
14:15
vamos executar, vamos fazer o mesmo exemplo com 100 (cem). daria 45,45 (quarenta e cinco virgula quarenta e cinco)
14:23
e o mesmo exemplo com 428 reais(R$) que daria 194 dólares(US$)
14:30
e ai, viu como é que é simples?! vamos a mais um problema que a creuza esta passando, por que
14:35
ela já viajou, já chegou noas Estado Unidos, e teve um grande problema
14:39
Chegando nos EUA ela ta enfrentando um grande problema, que é o da temperatura.
14:43
Se você nao sabe, nos EUA a medida de temperatura utilizada não é Celcius(C) é o fahrenheit(F)
14:49
Então quando a creuza chegou no aeroporto ela olhou á que estava 100 graus
14:53
e ela pensou: "caramba, 100 graus?! no rio de janeiro com 40º(quarenta graus) eu já fico desesperada, imagina com 100!! eu vou derreter aqui!"
15:00
e na verdade ele não sabia que era uma outra forma de medida. Então nos vamos criar aqui um programa que faça a conversão da temperatura que a creuza ta vendo la, para a temperatura que ela veria aqui no brasil.
15:10
a conversão entre fahrenheit e Celsius é feita através dessa formula,
15:15
onde a temperatura em celsius é a temperatura em fahrenheit menos 32(trinta e dois) dividido por 1,8 (um virgula oito)
15:21
vamos diretamente para o scratch e ver com isso funciona
15:24
Então no Scracht, já preparei ela aqui ele está nos Estados Unidos
15:27
Então nós vamos criar um controle aqui, quando a bandeira for clicada
15:32
Eu vou fazer um sensor para perguntar qual a temperatura atual?
15:36
Qual é a temperatura aqui? Vou colocar a resposta, vou guardar essa resposta
15:43
em uma variável chamada "F" de Fahrenheit, importante que você use nomes claros para variáves
15:51
vou fazer com que "F" passe para resposta e agora nós vamos fazer mais uma variável
15:57
que é a variável "C" que é a temperatura em Celsius, então nós vamos mudar "C"
16:02
Para aquela nossa fórmula que é calculada através de uma divisão onde numerador eu tenho uma subtração
16:10
Importante que se crie dessa maneira, essa subtração é feita a quantidade de Fahrenheit
16:16
menos 32 dividido por 1,8. Então vamos mudar "C" para isso tudo
16:24
Por fim vamos colocar na aparência, para ela pensar uma junção "no Brasil estaria?"
16:34
e vamos mostrar a temperatura em Celsius
16:38
Vamos executar. Qual a temperatura aqui? Vamos dar o exemplo dos 100 graus
16:43
No Brasil estaria 37.7 que é uma temperatura normal principalmente aqui no Rio de Janeiro
16:49
Vamos passar diretamente para o Visualg e fazer o mesmo problema.
16:53
Vamos criar as duas variáveis Fahrenheit e Celsius do tipo real
16:58
Vamos solicitar a temperatura lá. Qual é a temperatura aqui?
17:06
Usando as mesmas perguntas que eu usei lá no Scratch. Leia "F"
17:11
"C" vai valer a variável "F" menos 32 dividido por 1.8
17:18
E é importante aqui já que "F" está no numerador que você coloque entre parênteses
17:24
Caso contrário você vai lembrar que ele vai pegar 32 dividir por 1.8 e resultado subtrair de "F"
17:30
Pois a ordem de precedência que nós vimos nas primeiras aulas de algoritmo dizem que primeiro
17:33
é feito multiplicação e divisão e depois somas e subtrações
17:38
Vamos mostrar o resultado "No Brasil estaria e a variável "C""
17:45
Vamos ver se funciona, usando 100
17:48
37.7. Lembrando que nós podemos formatar isso, colocando, por exemplo, com 1, 2, 3, 4 casas ao todo
17:57
Quatro casas sendo uma após a vírgula. Executando nós temos
18:04
aqui no caso quatro casas, no caso ele usou somente 3 e uma após a virgula
18:10
Então no Brasil estaria 37.8, ficou claro. Então agora nós vamos a nossa última situação
18:16
Que a Creuza está passando, pois ela voltou de viagem
18:19
E comprou muita muamba, comprou muitos equipamentos eletrônicos
18:22
E agora ela vai ter que pagar os impostos por isso
18:25
Então como eu disse ela voltou de viagem e comprou muita muamba
18:28
E equipamentos eletrônicos tem uma taxação assim que você chega no Brasil
18:32
Essa taxação é variável, mas nós vamos considerar, sempre 60% porque nós estamos em exercícios iniciais
18:39
E aí vem um grande problema que muita gente tem quando diz respeito
18:43
a cálculos, que é o cálculo de porcentagem
18:46
Calcular a porcentagem de alguma coisa é muito simples
18:49
e eu vou mostrar pra você, vamos usar como exemplo aqui o cálculo que eu falei
18:52
como eu disse o imposto é de 60%
18:54
calcular 60% de alguma coisa é bem simples
18:57
Eu pego essa alguma coisa multiplico por 60 e divido por 100
19:02
e até o próprio nome já diz sessenta por cento
19:05
Você pega o valor multiplica por 60 e dividi por 100
19:08
sessenta por cento
19:11
E eu sei que o seu professor de algoritmo ou a pessoa que te ensinou a programar
19:15
pode ter te ensinado um monte de macete um monte de formulazinha
19:18
um monte de coisinha mais simples
19:20
mas nada mais simples que pegar essa coisa multiplicar por 60 e dividir por 100
19:25
então de forma análogo se eu quiser 10% de alguma coisa
19:28
eu pego essa alguma coisa multiplico por 10 e divido por 100
19:32
Vamos ver como isso funciona
19:33
Então já ta lá a Creuza já voltou para o Rio de Janeiro naquele calorzinho
19:37
e ela tá com problema que tem que pagar imposto
19:39
Então quando a bandeira for clicada vamos fazer ela digitar
19:45
Qual o valor do produto?
19:50
e vai aguardar a resposta essa resposta
19:53
vai para variável preço. Eu não posso usar ç por isso fica preco
19:59
vamos mudar o preço para resposta
20:02
Vamos criar também uma varável imposto e essa variável imposto
20:07
vai receber um valor
20:09
que é 60% do valor do preço
20:12
pra isso nós vamos pegar uma divisão e no numerador vamos colocar uma multiplicação
20:19
que é feita pelo asterisco então nós vamos colocar
20:23
o preço do produto, como eu quero 60% vou botar 60 e vou dividir por 100
20:32
se eu quiser 20% eu boto 20 aqui, se eu quiser 40 boto 40 e assim sucessivamente
20:37
então meu imposto vai ser 60% do preço vamos mostrar na aparência
20:45
para ele dizer uma junção de um imposto será de, vamos colocar
20:56
o valor do imposto aqui. Vamos executar!
21:00
se eu comprei um coisa de mil dólares, eu tenho seiscentos dólares de imposto
21:05
vamos colocar apenas o símbolo da moeda pra ficar bonitinho
21:11
o valor do produto 980 US$, terá um imposto de 588 US$
21:19
Vamos ver no Visualg, então nós vamos colocar aqui, para ele solicitar
21:26
Qual o preço do produto? botar aqui, Leia preço
21:34
vou ter aqui a variável preço, nós vamos ter o imposto, que nós vamos declarar aqui em cima
21:42
ambos do tipo real e meu imposto vai receber o preço
21:48
vezes 60 dividido por 100
21:53
nesse caso nem é necessário parênteses, mas já que preço vezes 60 está no numerador
21:58
vou utilizar o parênteses para forçar e deixar bem claro que isso vai acontecer primeiro
22:02
mas lembrando esse parênteses nesse caso ficou como opcional, vamos mostrar
22:09
o imposto será de imposto, vamos executar.
22:17
comprei uma coisa de mil dólares o imposto será de 600
22:22
vamos formatar ele aqui dois pontos cinco casas ao todo duas decimais
22:29
987 ficaria com 592,20
22:35
então aqui tenho três mais dois cinco, eu tenho cinco números ao todo, sendo que dois estão no final
22:42
então eu tenho cinco números ao todo sendo que dois estão no final
22:46
e aí deu para entender os problemas que a Creuza teve e que são cálculos matemáticos simples
22:51
são situações do dia a dia
22:53
e foram situações que eu apliquei aqui criando historinha pra você
22:56
Então é isso agora chegou a sua hora de praticar
22:58
Pois a Creuza tá com mais um problema e esse eu não vou resolver
23:02
Esse fica pra você
23:03
Então depois de comprar a muamba e ter o 60% pra pagar de imposto a Creuza ficou sem grana
23:09
E teve que pegar um empréstimo no banco
23:10
eu sei que essa coisa de empréstimo é meio complicada
23:12
mas nós vamos simplificar pra essa sua situação
23:15
e você vai entender o que eu quero fazer
23:17
então conversando com o gerente a Creuza fez o seguinte
23:20
pegando um empréstimo ela vai ter 20% de juros e vai poder parcelar
23:25
Então o que proponho pra você é o seguinte, você vai fazer um programa para ajudar a Creuza
23:29
Ela vai dizer quanto ela quer pegar de empréstimo, por exemplo R$ 1.000,00
23:32
por conta do empréstimo vai ter 20% de acréscimo por causa de juros
23:36
Então por exemplo pegando R$ 1.000,00 emprestado ela vai ter que pagar R$ 1.200,00
23:40
isso é uma situação hipotética
23:42
e ela vai poder parcelar então ela vai poder dizer em quantas vezes ela vai ter que dividir
23:47
esse R$ 1.200,00 pra pegar R$ 1.000,00 emprestado
23:51
eu criei essa situação ela já está resolvida
23:53
e eu vou mostrar pra você como eu quero que isso aconteça
23:56
mas eu não vou te mostrar o código
23:57
então a situação é a seguinte, vou clicar na bandeira
24:01
Qual o valor do empréstimo, vamos colocar R$ 1.000,00
24:04
R$ 1.000,00 com 20% de aumento daria R$ 1.200,00
24:09
Quantas parcelas? 10
24:12
Se eu pego R$ 1.200,00 e divido em 10 parcelas, cada parcela será de R$ 120,00
24:17
Então vou pagar 10 parcelas de R$ 120,00
24:20
Deu para entender o que que eu quero, então isso tudo vai precisar do seu raciocínio
24:24
o cálculo matemático é a base que nós fizemos anteriormente
24:28
Então você vai ter o cálculo de porcentagem e você vai ter a divisão pelo número de parcelas
24:32
tente aprimorar esse teu algoritmo pra ele mostrar qual o valor total, qual o valor total com juros
24:38
Qual o valor total de cada parcela
24:40
Então faça programas, crie programas
24:43
Então essa solução é você que tem que criar
24:46
É você que tem que estudar o suficiente praticando
24:49
para poder criar esse algoritmo
24:50
então eu queria mais uma vez, agradecer a presença de todo mundo
24:54
Agradecer pelo sucesso que tá sendo esse curso de algoritmo
24:57
e convidar vocês como sempre clicando aqui
24:59
Você vai assinar o canal do Curso em Video
25:02
Então todas as aulas que saírem você vai receber diretamente no seu feed
25:05
e eu dou sempre a recomendação vai lá
25:08
clica na engrenagenzinha do lado do inscreva-se
25:10
e diz, olha eu quero receber e-mail dizendo toda vez que sair uma aula
25:14
sempre que sair uma aula você vai ser avisado, você não vai perder nenhuma
25:17
Clicando aqui você vai ver toda as aulas do curso
25:20
Então desde a primeira aula desde do inicioziinho
25:23
Você tá chegando agora tá vendo só exercício, tem um curso inteiro pra você aprender isso
25:27
então clicando aqui você vai ter acesso a todas as aulas
25:30
e não se esqueça de acessar sempre o www.cursoemvideo.com , pois lá você tem os pacotes para baixar
25:35
tem exercícios, tem uma série de coisas lá
25:38
o site tá sempre passando por alterações
25:40
a gente no momento que tá lançando esse video
25:42
tá passando por algumas alterações, então
25:44
muito obrigado pela paciência de todos
25:46
o material que tá chegando lá tá sendo muito importante
25:49
para que você possa aprender algoritmo, aprender a programar
25:52
utilizando o Curso em Vídeo, então passe essa ideia pra frente mostre para as pessoas
25:57
curta o vídeo, mostre nas redes sociais, mostre no Facebook
26:00
então é assim que o curso vai crescer, e assim que vocês vão me incentivar
26:04
a fazer sempre novas aulas
26:06
então um grande abraço bons estudos e até a próxima
26:10
oi, oi, oi, oi
26:12
oi
26:13
tá difícil hoje
26:15
Música
26:26
he, he , he, voltamos calma ae.
*/
