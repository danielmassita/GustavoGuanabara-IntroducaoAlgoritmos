// Comando de Entrada e Operadores - Curso de Algoritmos #03 - Gustavo Guanabara
// https://youtu.be/RDrfZ-7WE8c

/*
- Baixar o pacote de arquivos...

VisuAlg - https://sourceforge.net/projects/visualg30/
Scratch - https://scratch.mit.edu/
"exercicios-algoritmos.pdf"
"visualg.pdf"

- Na aula anterior, vimos os comandos de saída...
- Na aula de hoje, vamos ver os comandos de entrada...

*/

/*
TRANSCRIÇÃO
0:04
♫Musica de abertura♫
0:20
Olá, seja bem vindo a mais uma aula do seu curso em vídeo de algoritmo O meu nome é Gustavo Ganabara, eu sou seu professor
0:26
E essa é a terceira aula do seu curso de algoritmo Na primeira aula nós vimos a evolução, a história, o funcionamento e o que é um algoritmo
0:33
No segundo a gente viu comandos de saída Que são as coisas mais simples E agora a gente vai começar a trabalhar interatividade e operadores aritméticos
0:42
Então, mais uma vez você precisa baixar o pacote Então, acesse a área do curso de algoritmo, baixe o seu pacote
0:49
E você vai ter o VisuAlg, vai ter todas as ferramentas que a gente vai utilizar aqui Então vamos partir logo para o conteúdo que a gente tem programado para hoje
0:55
Então como eu falei, nós vamos começar a trabalhar interatividade Com os nossos comandos de entrada
1:00
Na aula passada, a gente viu os comandos de saída que são o "Escreva" e o "Escreval" A função dos comandos de saída é exatamente, como o próprio nome diz, gerar uma saída
1:10
Mostrar alguma coisa na tela Seguindo esse mesmo raciocínio Um comando de entrada seria uma forma de você entrar com dados no computador
1:18
Então, o comando de saída vai mostrar alguma coisa pra você, vai mostrar uma saída E o comando de entrada vai solicitar alguma coisa ao usuário que está utilizando o sistema
1:27
Vamos começar com um exemplo simples, que você vai conseguir até raciocinar Porque a gente viu isso na aula passada
1:32
Vamos começar com um exemplo simples utilizando apenas atribuições Então eu vou colocar aqui a estrutura básica de um algoritmo que a gente viu na aula passada
1:40
Então começa com a palavra algoritmo, entre aspas coloca o nome do algoritmo Eu vou chamar de MeuNome e nós temos duas áreas
1:45
A área de declaração de variáveis, que fica na parte de cima E o corpo do programa que fica entre Inicio e FimAlgoritmo
1:52
O que nós vamos fazer aqui, é declarar uma variável "nome" do tipo caractere E apenas lembrando, variáveis são espaços na memória que vão guardar valores
2:01
Nesse caso aqui, eu estou criando uma variável chamada nome E que vai guardar um valor do tipo caractere, então tudo o que estiver entre aspas, pode ser guardado nessa variável
2:10
E essa vai ser a única variável que nós vamos trabalhar nesse programa bem simples Logo após o inicio eu vou fazer logo uma atribuição
2:17
Que é "nome" recebe "Gustavo" Apenas lembrando, o símbolo de atribuição é uma representação de uma seta
2:23
Que é feita com um sinal de menor e um sinal menos sem espaço entre eles Essa linha que você está vendo agora vai ser lida da seguinte maneira
2:30
Nome recebe Gustavo E a variável "nome" por ser caractere pode receber o valor "Gustavo" entre aspas
2:37
Em seguida, vou utilizar um comando de saída que é o "escreva" Coloquei lá, escreva, muito prazer, vírgula nome
2:45
E ai você deve lembrar isso da aula passada Quando eu coloco o "Escreva" e coloco dois valores separados por vírgula
2:51
Eu estou solicitando que o VisuAlg me mostre duas coisas Primeiro o "Muito prazer" e logo em seguida o conteúdo da variável Nome
2:57
Então esse é o programa que eu sugeri aqui No meu caso se eu executar esse programa, ele vai escrever "Muito prazer Gustavo" na tela
3:04
Só que ai nós temos um grande problema Esse programa vai funcionar apenas mostrando "Muito prazer Gustavo"
3:10
E não, o nome do usuário que está usando o programa Seria ótimo se a gente tivesse uma maneira de perguntar o nome do usuário logo no início do programa
3:17
Por exemplo, "Qual o seu nome?" ou "Digite aqui seu nome" E ai o usuário digita o nome dele, por exemplo Glaucio, Glaucio o grande amigo Glaucio Cancion
3:24
Né? Que colabora ai pra caramba com o crescimento do Curso em vídeo Um abração Glaucio, brigadão!
3:29
Então Glaucio digita o nome dele e vai aparecer "Muito prazer Glaucio" Então essa é a interatividade que a gente vai criar com os comandos de entrada
3:36
Existe uma maneira de fazer isso, é muito simples e eu vou mostrar pra você como é que se faz agora Então como eu falei, a gente pode ter um comando, sei lá, "Digite seu nome"
3:45
Que vai ser feito pelo "escreva", que nós já vimos E logo em seguida, eu quero esperar que o usuário digite um nome
3:51
Pra isso, eu vou utilizar o comando: Leia E o comando "Leia" é exatamente o motivo dessa aula, são os comandos de entrada
3:57
O Leia é o comando de entrada que a gente vai utilizar por padrão E todas as linguagens de programação possuem comandos de entrada
4:04
Pra você poder criar interatividades com usuários vamos entender como funciona sintaxe do comando "leia" considerando que ainda existe aquela variável nome dentro do nosso programa
4:12
o que eu estou mostrando aqui é apena um trecho Então logo depois do Leia Eu vou colocar entre parenteses a variável "Nome"
4:18
Variável essa que já foi declarada lá em cima no programa vamos entender como funciona esse procedimento do "Leia" voltando pra nossa famosa e conhecida memória
4:26
aquele armário que eu coloquei na última aula pra vocês. Basicamente, eu tenho a declaração e eu tenho uma variável definida
4:32
que é minha variável "Nome" do tipo caractere Quando eu utilizo o comando: Leia(Nome) basicamente o cursor vai começar a piscar na tela
4:40
e o usuário vai poder digitar alguma coisa Por exemplo aqui, vou digitar o nome mais bonito do mundo Gustavo
4:46
Eu não preciso digitar entre aspas As aspas são somente pra mostrar que isso é uma string
4:51
Quando eu digito Gustavo e pressiono "Enter" Automaticamente essa string é colocada na variável Nome
4:58
Deu pra entender ? A instrução "Leia" é muito simples e funciona pra caracteres, pros tipos numéricos de inteiro e real
5:03
pra qualquer tipo de dado primitivo que exista na linguagem então eu tenho aqui o comando "leia" e uma variável
5:08
tudo que for digitado pelo usuário vai ser colocado diretamente na variável referida, dentro dos parenteses
5:14
então agora a gente pode reescrever aquele programa de uma maneira mais interessante vamos colocar aqui
5:20
a estrutura básica de um algoritimo, a mesma estrutura que vimos anteriormente e vamo definir uma variável: Nome
5:26
como fizemos anteriormente também a partir de agora, se você se lembra muito bem a primeira coisa que fizemos no algoritimo anterior
5:32
foi "Nome" recebe "Gustavo" a partir de agora não vai ser isso, porque se não vai funcionar apenas para um nome
5:38
O que eu vou fazer aqui é colocar um: Escreva ("Digite seu nome:") e logo em seguida um: Leia (Nome) e a partir dai o usuário vai poder digitar o que quiser
5:46
Por fim Eu vou utilizar mais um comando escreva pra colocar um ("Muito prazer ", e o nome do usuário
5:51
ficou claro isso, ou ficou um pouco confuso? Se ficou confuso, abra seu VisuAlg pause o vídeo, na tela aonde tem o código que te mostrei
5:59
digite esse código e aperte F9, pra executar o programa e ver como funciona como é a primeira aula, eu vou mostrar pra você de uma forma mais interativa
6:07
como vai funcionar tudo aqui então, acompanha comigo, que agora você vai entender vamos colocar aqui na tela
6:13
um monitor e a memória no canto direito, vamos ver linha a linha como é que o algoritmo funciona
6:19
primeira linha do nosso algoritmo é o "MeuNome" então, nada vai acontecer na tela e nem na memória logo em seguida, teremos a área de declaração de váriaveis
6:27
aonde eu vou ter a variável "Nome" do tipo: Caractere automaticamente, nós vamos ter na memória
6:32
uma definição de uma variável "Nome" do tipo: caractere vamos começar nosso programa e a primeira instrução é: Escreva("Digite seu nome: ")
6:40
Como o "Escreva" é um comando de saída ele vai mostrar "Digite seu nome: " na tela.
6:45
O próximo comando, é o: Leia(Nome) a partir dai, o programa vai ficar parado, esperando que o usuário digite alguma coisa
6:53
vou digitar meu nome: Gustavo e pressionar "Enter". Quando eu pressionar "Enter"
6:59
automaticamente a String Gustavo será colocada dentro da variável caractere Nome.
7:05
Então o que nos temos aqui, é a memória do computador, com uma variável chamada nome e o seu conteúdo, Gustavo.
7:11
O nosso próximo comando, nos vamos ver em duas partes. Primeira parte é: Escreva "Muito prazer "
7:18
isso vai gerar uma saída "Muito prazer" na tela, e em seguida ele solicita que mostre,
7:23
logo após o muito prazer o conteúdo da variável nome. Se você olhar no canto direito da tela, na memória, existe o conteúdo da variável nome.
7:30
Com o conteúdo Gustavo. Logo, ele vai mostrar "Muito prazer Gustavo". Fala a verdade... Ficou fácil agora né?
7:37
Então se você já é um usuário que já teve aula de algoritmo, com certeza você já sabe isso Mais você também deve lembrar que teve dificuldade quando começou estudar essas coisas
7:45
Para exemplificar Nós vamos botar a mão na massa agora e fazer um exercício prático Mais antes de partir pro prático
7:51
Se você percebe ai o meu algoritmo não terminou falta o FIMALGORITMO Agora sim A gente pode partir para prática
7:58
E a pratica que eu vou sugerir é bem simples e todo professor faz logo no inicio das aulas Eu quero solicitar dois número para o usuário
8:04
E eu quero mostrar a soma entre eles Então basicamente o que eu quero é como se eu chegasse pra você e falace assim: Fala dois números pra mim?
8:10
Ai você me fala 3 e 5 Ai eu falo para você: A soma entre 3 e 5 é 8 É exatamente isso o que eu quero que o nosso programa faça
8:17
é bem simples, mais não se esquece a gente está no inicio Então o que nós vamos ter que fazer é partir pro VISUALG
8:23
Vamos lá, então aqui esta o nosso VISUALG aberto Se ele estiver vazio nós vamos colocar exclamação (!) + CONTROL+ ESPAÇO
8:29
ele vai criar a estrutura básica do meu algoritmo Nós vamos colocar aqui basicamente, eu quero dois números, então eu vou ter duas variáveis
8:38
vou chamar de "N1" e "N2" Eu posso fazer a declaração de duas variáveis ao mesmo tempo, fazendo assim(como mostra na 3ª linha)
8:44
Então eu tenho: Variável N1, a variável N2, que são inteiros Primeira coisa que eu vou fazer, é solicitar que o usuário digite os dois números
8:53
Eu não vou pedir pra ele digitar dois números direto, eu vou pedir primeiro que ele digite um número, E depois que ele digite outro.
8:58
Eu vou colocar lá: Escreva("Informe um numero: ")
9:10
Leia(N1) Escreva("Informe outro número: ")
9:19
Leia(N2) Então aqui, eu fiz dois "Leias" , um Leia pra preencher a variável N1, e outro Leia pra preencher a variável N2
9:28
Vamos executar, e ver se até aqui, tudo tá funcionando perfeitamente. Então nós abrimos aqui o programa, e a primeira coisa que ele faz, é solicitar: "Informe um numero:"
9:38
Note aqui, o cursor piscando é efeito do comando Leia, que é exatamente o comando que está sendo executado
9:44
E você pode ver aqui, pela seta azul Vamos digitar um número: 3.
9:49
Vou pressionar "Enter" Quando eu pressionar "Enter", automaticamente você vai ver aqui(onde mostra o cursor),
9:55
Que nós temos a variável N1, do tipo inteiro, com valor 3, a N2 , é do tipo inteiro e ainda está com o valor 0
10:02
Mas agora, a seta azul, está exatamente no Leia N2. Tudo que eu digitar aqui, vai ser colocado diretamente na variável .
10:09
Então se eu digitar aqui: 5, quando eu pressionar "Enter" você vai perceber que esse 5, vai passar pra variável N2.
10:19
Que está na representação da memória aqui(onde mostra o cursor) Vou pressionar "Enter", e ele já mostrou o 5 aqui
10:25
E obviamente, isso acontece por um motivo, você não mandou somar os números, Você não mandou mostrar os números, você simplesmente usou quatro comandos,
10:32
Um Escreva, um Leia, um Escreva, um Leia. O que ele fez foi exatamente os quatro comandos. Apesar de parecer que sim, os computadores não fazem nada automaticamente.
10:40
Ele faz automaticamente pra você que é usuário, pra quem é programador, o computador tem que ser Bem mandado, se você tiver 20 passos pra dar, você tem que especificar claramente quais são
10:49
Esses vinte passos, e cada um dos subpassos dessa rotina. Então vamos completar o nosso programa mandando somar esses dois números e mostrar o resultado
10:58
Pra finalizar a execução, ou você fecha no botão vermelho, ou aperta a tecla Esc do teclado,
11:03
e a gente pode dar continuidade. O que eu vou precisar aqui é somar esses dois números. Eu acho que fica claro que a gente tem que fazer N1 + N2
11:12
E o resultado dessa expressão tem que ser colocado dentro de uma variável. A primeira coisa que eu vou fazer aqui, é colocar uma variável S , pra guardar a soma,
11:20
E vou fazer aqui, com que S receba o resultado de N1 e N2.
11:26
Ficou claro? Eu não vou utilizar o comando leia pra ler a soma. Então se eu solicitei dois números pro usuário, eu não vou precisar solicitar qual é a soma deles
11:33
O computador é capaz de fazer isso. Então, basicamente, duas variáveis vão ser pra ser utilizadas com o comando Leia,
11:39
pro usuário digitar. A soma o usuário não vai precisar digitar, então eu não tenho Leia (S) Eu vou ter S <- N1 + N2.
11:46
Vamos mandar mostrar S. De maneira simples. Da maneira mais simples possível eu vou colocar aqui:
11:53
Escreva (S) Vamos rodar o programa e ver como ele se comporta.
11:59
Vou organizar a tela aqui.
12:04
Pra você conseguir enxergar os dois Então, em primeiro lugar, ele já mostrou "Informe um número".
12:11
Ele está parado no Leia (N1). Vou digitar 7 Pressionando Enter, ele solicita outro numero,
12:17
Eu vou colocar 3 E, logo em seguida, ele vai somar 7 com 3,
12:22
e vai mostrar na tela o valor 10, que é o resultado de 7 + 3.
12:27
Simples, não é mesmo? Então vamos tornar só um pouquinho mais interativo, pra mostrar o que seria aquele 10 pro usuário,
12:33
É a soma entre os valores que ele digitou. Mais uma vez vamos fechar e eu vou alterar aqui esse Escreva
12:40
vou colocar aqui entre aspas: "A soma é" vírgula S. Importante notar que esse espaço que eu boto depois do E
12:47
é muito importante por que senão ele vai colar o número da soma na letra E, e esse espaço tem que ser dado dentro das aspas.
12:54
Vamos executar de novo, Primeiro número, 9. Outro número, 4.
12:59
A soma é 13 E se você quiser criar a coisa mais interativa ainda tendo um pouquinho mais de trabalho,
13:05
esclarecendo mais o usuário, você pode fazer uma coisa muito interessante. Vamos dar uma melhorada aqui
13:11
Vou colocar: A soma entre, fecha aspas, vírgula, N1, vírgula, e, vírgula, N2, abre aspas
13:21
é igual a S. Então percebe o seguinte aqui ó. Esse Escreva ficou gigante.
13:27
Ele vai mostrar: "A soma entre", logo em seguida, vai me mostrar o conteúdo de N1,
13:32
logo em seguida, vai me mostrar mais uma string "e", logo após, o conteúdo de N2,
13:38
em seguida, vai me mostrar, "é igual a", e, por fim, o conteúdo da variável S.
13:44
E você pode fazer isso normalmente, sem problema nenhum. Um Escreva aceita vários valores dentro de um mesmo comando.
13:50
Basta separar eles por vírgula. Vamos ver o funcionamento disso e como ele se comporta. Executando mais uma vez o programa.
13:57
Digite um número: 5 depois: 1 O que ele vai me mostrar é: "A soma entre 5 e 1 é igual a 6".
14:06
E você vai concordar comigo que essa saída é muito mais elegante, é muito mais interativa mesmo te dando mais trabalho.
14:13
Mas o que eu sempre digo pros meus alunos é: Na área de computação, quem tem que ter trabalho é você, programador, e não o usuário.
14:20
O usuário não tem que adivinhar o que é um número que apareceu na tela do nada. Você, quando usa alguma coisa, quando você acessa um site, e aparece um número do nada,
14:27
você fica incomodado, você não sabe o resultado. Então porque você, como programador, não se preocupa com a interatividade do seu programa com os seus usuários?
14:35
Vamos dar continuidade aqui. Então a prática proposta foi essa daqui, o resultado foi alguma coisa semelhante a isso.
14:42
Então nós temos o algoritmo de valores As três variáveis N1 N2 e S Temos, dois grupos de Escreva e Leia
14:49
A soma sendo calculada por uma expressão E por fim um comando pra exibir a soma na tela
14:54
E se você percebeu, nós utilizamos sem eu explicar, o operador mais (+) Esse operador, ele faz a adição entre duas variáveis ou dois valores
15:03
O símbolo de adição é universal, então eu não precisei nem explicar Mas nos algorítimos, existem alguns operadores que não são tão símples
15:12
E por isso nós precisamos estudar os operadores aritiméticos Os operadores suportados pelo visualg e pela maioria das linguagens são:
15:21
O operador de adição e o de subtração são universais Você utiliza a + para adição e o - para subtração
15:30
A multiplicação e a divisão são um pouco diferentes A multiplicação e feita por um *
15:35
E não por um ponto ou por um x A divisão é feita por uma barra inclinada pra direita (/)
15:41
Se fizermos essa barra inclinada pra esquerda teremos a divisão inteira A exponenciação é feita através do circunflexo (^), e por fim o símbolo de porcentagem (%) calcula o módulo
15:52
Pra exemplificar eu criei uma pequena expressão pra cada um dos operadores aritiméticos
15:58
Vamos considerar pra essa terceira coluna da tabela os valores de A para 5 e B para 2
16:05
Então em cada uma delas nós vamos fazer Por exemplo na primeira A + B, sendo A valendo 5 e B valendo 2
16:12
Vamos repetir isso pra todas as linhas dessa tabela A primeira é simples, 5 + 2 = 7
16:18
A segunda também sengue a mesma linha de raciocínio 5 - 2 = 3 Em seguida vamos pra multiplicação, 5 x 2 = 10
16:26
Depois vamos pra divisão, 5 ÷ 2 = 2.5 E aqui cabem duas observações importantes
16:33
2 e 5 são números inteiros, mas dividindo os dois não necessariamente eu vou ter um resultado inteiro
16:39
Por isso existe o operador de divisão inteira E a segunda observação que eu quero fazer é que dois e meio não é 2,5 como agente tá acostumado aqui no brasil
16:48
é 2.5 que é o separador de decimais lá nos Estados Unidos A divisão inteira, ela vai pegar exatamente a divisão de A por B que é 2.5, e pegar apenas a parte inteira
17:00
Isso é A \ B vai dar 2 e note que eu não estou do arredondamento, eu estou falando da parte inteira da divisão
17:08
A exponenciação também é simples o A valendo 5 e o B valendo 2, 5 elevado a 2, da 25
17:15
Por fim temos a linha de módulo e o módulo também é conhecido como o resto da divisão
17:20
Vou montar a divisão aqui pra você ver, se vai entender oque que eu estou falando Vamos montar aqui no cantinho direito 5 dividido por 2
17:27
5 dividido por 2 vai dar 2 e resta 1 Esse 2 que está aparecendo com resultado da divisão
17:34
É exatamente o uso do operador contra barra (\), que é divisão inteira Você pode ver que na coluna da divisão inteira nos temos o 2 como resultado
17:43
O módulo é exatamente o resto da divisão Então logo abaixo do 5 nós temos o resto da divisão que é 1
17:50
Já que 2 x 2 são 4 e pra 5 resta 1 Esse resto da divisão é exatamente oque o operador de % retorna
17:59
E nós vamos fazer o uso desse operador daqui a algumas aulas quando agente for estudar estruturas condicionais
18:04
Então esse são os sete operadores aritméticos que nós temos no visualg e ai vem uma coisa muito importante que você tem que saber
18:11
a ordem de precedência a ordem de precedência, indica a ordem que os operadores serão considerados dentro de uma mesma expressão
18:19
sempre que nós tivermos uma expressão aritmética, oque será considerado em primeiro lugar é os parênteses
18:25
Logo em seguida os operadores de "exponenciação" depois A multiplicação e a divisão
18:30
e por fim As adições e subtrações vamos ver dois exemplos aqui, que parecem ser semelhantes
18:36
mais vão ter resultados diferentes Tanto no exemplo de cima quanto no de baixo nó temos 3 + 2 / 2
18:43
mas no primeiro exercício note que mesmo a "adição" aparecendo antes se você olhar na tabela da esquerda
18:49
A "multiplicação" e a "divisão" tem uma ordem de precedência maior neste primeiro caso nós vamos fazer primeiro: 2 / 2 que dá 1
18:57
e somar esse resultado "1" com "3", o que vai me dar o resultado "4"
19:03
Já no segundo eu tenho os parênteses, indicando que eu quero que a "soma" seja feita primeiro
19:09
e se você olhar também na tabela da esquerda você vai ver que os "parênteses" tem a maior ordem de precedência de todas
19:14
então a primeira coisa que vou fazer é somar 3 + 2 que vai dar "5" e depois dividir o resultado por "2", o que vai me resultar em "2.5"(Dois e meio)
19:23
Ficou claro ? então sempre que você for criar uma expressão utilize os "parênteses" para guiar a ordem de execução das operações de acordo com aquilo que você quer
19:32
vamos fazer uma alteração naquele nosso programa de somar dois valores para ele calcular a média, e vocês vão ver o que eu estou falando
19:38
Então nós temos aqui o nosso algoritmo, que vai tratar os valores aqui vou modificar o nome da minha variável de "S" para "N"
19:45
e ficar claro que vou calcular uma média Isso não é obrigatória mais fica uma programação mais limpa
19:52
então eu tenho aqui um número N1 outro número N2, e vou fazer a média entre esses dois números
20:01
A média entre esses dois número é N1 + N2 / 2 colocar aqui: A média entre N1 e N2 é igual a tanto
20:09
E se você for esperto e está atento, você vai ver que eu acabei de gerar uma declaração errada aqui eu vou executar porque isso acontece com muita frequência
20:16
Para usuários iniciantes vamos executar esse programa, eu já estou avisando que ele vai dar erro Mais vamos ver o que vai acontecer, e como solucionar isso
20:24
Logo de inicio você vai executar o programa, ele vai funcionar normalmente "7" foi o primeiro número
20:31
"3" para o segundo número Quando eu pressionar ENTER ele vai somar "7" com "3" que vai dar "10"
20:37
e dividir por " / 2" que vai dar "5" Só que quando pressiono ele me da um mensagem de erro
20:42
ai você pode pode esta se perguntando "7" com "3" dez, dividido por dois "5" Qual problema nisso eu tenho um número inteiro somado com outro número inteiro
20:50
divido por "2" resultando em outro número inteiro O grande problema é que quando eu uso o operador de divisão
20:56
automaticamente a linguagem não trabalha mais com valores inteiros e sim apenas com valores REAIS
21:01
Nós vamos solucionar isso de uma maneira muito simples, declarando EME (M) como um número REAL
21:07
então vamos clicar aqui em terminar Ele vai me dizer aqui que o erro foi atribuição de valores da variável EME (M)
21:14
e me indicou que existe um problema de tipo de REAL para INTEIRO Vamos clicar em OK
21:19
Ele deixa marcado a linha onde ele detectou o erro As vezes o erro não esta nessa linha que ele marcar, e sim na linha anterior
21:27
Mais fique de olho, neste caso ele acertou Vou tirar a variável EME (M) de INTEIRO Vou declarar em baixo EME (M) como sendo uma variável REAL
21:35
Lembrando Números REAIS são aqueles números que tem a parte decimal, isso é que tem a VIRGULA (,) ou ponto flutuante
21:42
Vamos executar novamente Vamos colocar "7" e "3"
21:49
Ele deu um erro aqui eu ainda estou utilizando a variável "S" aqui no final Obviamente tem que modificar para EME (M)
21:57
mais uma vez "7" e "3" E agora ele colocou, a média entre "7" e "3" é igual a "5"
22:03
Fazer um outro exemplo aqui "9" e "7" média "8"
22:09
vamos fazer um número para dar REAL, "2" e "3" média (2.5) dois e meio
22:15
Deu para entender ? E agora vou fazer uma alteração retirando os parenteses da expressão e vocês vão ver que realmente o resultado vai dar errado
22:23
Vou vir aqui na expressão e vou tirar os parenteses de N1 e N2 Vamos executar, vamos colocar os mesmo valores que colocamos no inicio "7" e "3"
22:32
"7" e "3" vai dar "10" (/2) dividido por dois "5" Se eu apertar ENTER ele vai me dar (8.5) oito e meio
22:39
Isso acontece por um motivo simples o que ele faz é primeiro colocar (3 / 2) três divido por dois
22:45
Que vai dar (1.5) um e meio, e esse (1.5) um e meio vai ser somado com "7" resultando em (8.5) oito e meio
22:50
E isso acontece graças a ordem de precedência. Que isso não é exclusividade dos algoritmos, isso é uma questão matemática
22:57
E por falar em matemática, aritmética essa coisa toda que você não pode ter medo disso O VISUALG possui algumas funções para tratamento aritmético dos números
23:06
Vamos ver alguns deles: Algumas funções aritméticas que existem no VISUALG são:
23:12
ABS que é para valor absoluto EXP para exponenciação INT para valor INTEIRO
23:18
RAIZQ para raiz quadrada PI para retornar o valor de PI (SEN) seno, (COS) cosseno e (TAN) tangente
23:27
ambos para valores em RADIANOS Mas como nós estamos acostumados a tratar SENO, COSSENO e TANGENTE com valores em GRAUS
23:33
existe também uma função (GRAUPRAD) GRAU para RADIANO Que é o GRAU-P-RAD, que é GRAU para RADIANOS
23:42
de forma análoga eu criei uma coluna aqui com vários exemplos para gente poder trabalhar com eles
23:47
ABS é o valor absoluto Então por exemplo se eu colocar ABS de "-10" ele vai me retornar o valor "10" que é o valor absoluto
23:55
É o valor sem o sinal A exponenciação precisa de dois parâmetros o que eu estou colocando ali não é a exponenciação de (3,2) três vírgula dois
24:04
Até porque números REAIS são representados por ponto O que eu estou dizendo ali é que eu quero "3" expoente "2", (3²) três ao quadrado "9"
24:13
você pode utilizar a função EXP Ou o operador de circunflexo que nós vimos anteriormente
24:19
A função INT vai retornar a parte inteira de um número Por exemplo ali, eu coloquei INT de (3.9)
24:25
"3.9" é um número REAL o que ele vai fazer é me retornar apenas a parte inteira que é "3"
24:30
Note! Que eu não falei em arredondamento Falei apenas em parte inteira RAIZQ vai retornar a raiz quadrada de um número, então se eu colocar lá RAIZQ de "25"
24:40
É 5. Sempre que eu utilizar Pi sem parênteses nenhum, ele vai me retornar sempre o número Pi: 3.1415... alguma coisa.
24:49
As funções Seno, Cosseno e Tangente, são as mesmas utilizadas pela matemática. 0.523 é aproximadamente em radianos o que nós temos os 30 graus.
25:00
Sendo assim, Seno de 30 é 0.5. Cosseno de 30 é Raiz de 3 sobre 2.
25:06
E tangente de 30 é Raiz de 3 sobre 3 Se você quiser saber quanto dá em Radianos uma determinada medida em Graus,
25:14
você pode utilizar, por exemplo, Grau para Radianos de 30. Ele vai me retornar o 0.523,
25:21
que nós estamos utilizando nos exemplos de cima. Eu queria aqui te pedir um grande favor: Não se assuste com a quantidade de números, expressões
25:29
e termos utilizados na matemática. A matemática tá na nossa vida, a gente tem uma tendência a ter medo dela de forma errada
25:36
Vou mostrar aqui pra vocês alguns usos dessas funções que a gente acabou de ver dentro de um algoritmo.
25:41
Não se esqueça de manter sempre o seu VisuAlg aberto e praticar tudo aquilo que a gente tá fazendo
25:46
Mais uma vez eu digo: Não se aprende nada na vida sem praticar. Vou iniciar um programa novo.
25:52
Vou apagar, Exclamação, Ctrl + Espaço, Vou criar uma variável A do tipo Inteiro
26:00
Vou fazer com que A receba, por exemplo, Abs de -50
26:07
Logo em seguida, Escreva A Essa atribuição, quando eu executar ele vai me mostrar o valor 50,
26:15
que é o valor absoluto de -50. Vamos fazer um exemplo aqui de Exponencial.
26:22
Vamos exponenciar aqui 9 à 5ª potência , vou mudar aqui de Inteiro pra Real, pra ele não dar problema com números grandes.
26:32
59.049 é 9 à 5ª potência. Vamos utilizar, por exemplo, aqui, Raiz Quadrada.
26:40
Quanto é a Raiz Quadrada de 81? Nove!
26:46
E eu posso também juntar várias expressões como, por exemplo, Eu posso colocar aqui, qual é a Raiz Quadrada de 90
26:55
Raiz Quadrada de 90 é 9.48... mas eu quero só a parte inteira dessa
27:00
então eu coloco tudo isso entre parênteses, e utilizo somente a parte inteira.
27:06
Então, qual é a parte inteira da Raiz de 90? Apenas nove.
27:11
Posso, também, vamos colocar aqui Conversão de Graus para Radianos de 90 graus
27:26
Executando: 90 graus para radiano é 1.5707 aproximadamente.
27:33
Se eu quiser, eu posso colocar qual será o Seno de 90.
27:38
Então, eu converto 90 pra radianos, e informo isso pra função de Seno,
27:44
que só aceita valores em radianos E, se você lembra bem daquele círculo lá da matemática, o Seno de 90 é 1.
27:51
Executando: O resultado do Seno de 90 é 1. Ficou claro? Então agora você tem ferramentas pra brincar com o que você quiser.
28:00
Quer ver um exemplo? Vamos criar aqui: Então eu to aqui com um programa novo, e eu vou chamar aqui de "Conversor".
28:09
Vou pedir um angulo, que vai ser Real, e eu vou ter uma variável S também que é pro Seno do angulo
28:15
E eu vou colocar na tela: Escreva (" Informe um angulo").
28:24
Leia (angulo). O S vai ser, exatamente,
28:31
o Seno desse angulo convertido de Grau para Radianos
28:41
Por fim, Escreva ("O Seno de ", angulo, " é igual a ", S).
29:00
Pause a sua vídeo-aula, digite isso no VisuAlg e, logo em seguida, execute o programa.
29:06
Eu vou executar o meu aqui. Vamos colocar: Informe um angulo, 90. O Seno de 90 é igual a 1.
29:15
Vou executar novamente: 30. O Seno de 30 é 0.5.
29:21
Deu pra entender? E com isso você pode fazer qualquer coisa Por exemplo fórmula de Bhaskara, cálculo de área de retângulo
29:27
Área de triângulo, oque você quiser! Agora você conhece os operadores aritméticos e uma série de funções aritméticas dentro do visualg
29:35
E a unica maneira de aprender é praticando! Então a partir de agora agente está encerrando a aula, mas você tem muito trabalho aqui no visualg
29:41
Inventa qualquer coisa, pede para o usuário digitar qualquer informação Execute uma expressão qualquer e veja o resultado
29:48
Não se esqueça de treinar o uso parênteses, o uso de operadores, o uso de funções aritméticas O uso do comando "LEIA", e também o uso de variáveis e seus tipos primitivos
29:57
Na próxima aula agente vai dar continuidade com formatação de números Alguns outros operadores que são os operadores relacionais e os operadores lógicos
30:05
E você vai continuar sua caminhada para se tornar um grande programador! Mais uma vez, eu queria convidar você a assinar o canal do CURSO EM VÍDEO
30:14
Clicando sobre esse botão Você vai ter acesso a todas as aulas Lá no botão assinar, do lado tem uma "engrenagenzinha"
30:20
Você pode marcar "Quero receber e-mails sempre que sair uma video aula nova" Pode colocar lá, agente só coloca vídeo aula de qualidade
30:26
Você vai ser avisado por e-mail, não vai perder nenhuma aula Clicando aqui você vai ter acesso a todas as aulas
30:32
Apenas do curso de algoritmo Então clicando aqui você vai ter a playlist certinha
30:37
De todas as aulas que agente lançou até agora Essa é a terceira Mas pode ser que você tenha chegado e ja tenha o curso completo de algorítimo aí pra você
30:43
Assim como nesse momento já existe o curso completo de HTML5 Pra você poder criar sites
30:49
E isso tudo você vai encontrar onde? www.cursoemvideo.com Lá você vai ver todos os cursos que estão sendo criados por nossa equipe
30:57
Com qualidade e de graça! Você não vai poder ser cobrado de nada em relação as aulas do curso em vídeo
31:04
Agente pode eventualmente vender algum produto DVD, camiseta, alguma coisa Mas os seus pacotes são gratuitos, as suas aulas são gratuitas!
31:11
Você só ajuda agente se quiser Então queria mandar um abraço pra todo mundo Pra todo mundo que está compartilhando, pra todo mundo que está agradecendo
31:19
Os elogios são muito importantes, continuem elogiando Continuem tirando suas dúvidas no nosso canal do facebook
31:25
Nos nossos comentários, entrando em contato diretamente comigo pra quem me conhece Então mantenha seus estudos em dia
31:31
Estudar é muito importante Eu quero encontrar você em qualquer lugar aí Em evento, pela rua, em qualquer lugar
31:37
E você falar: "Olha hoje eu sei programar por sua causa, muito obrigado!" E eu vou ficar muito feliz e muito orgulhoso por isso
31:43
Um grande abraço, bons estudos, até a próxima aula!
*/
