// Operadores Lógicos e Relacionais - Curso de Algoritmos #04 - Gustavo Guanabara
// https://youtu.be/Ig4QZNpVZYs


/*
Aula do Curso de HTML5 criado pelo professor Gustavo Guanabara para o portal CursoemVideo.com.   Download de pacotes e curso com certificado GRÁTIS: http://cursoemvideo.com/course/curso-...

Curso em Vídeo
Site: http://www.cursoemvideo.com
YouTube:   

 / cursosemvideo  
Facebook: http://www.facebook.com/cursosemvideo
Twitter: http://twitter.com/cursosemvideo
Google+: http://plus.google.com/11266655883741...
*/

/*
https://www.hostinger.com.br/tutoriais/o-que-e-npm
https://www.treinaweb.com.br/blog/qual-a-diferenca-entre-framework-e-biblioteca#:~:text=Framework%20ou%20Biblioteca%3F,ferramentas%20diferentes%20para%20prop%C3%B3sitos%20diferentes.
https://pt.khanacademy.org/computing
https://www.cursoemvideo.com/curso/curso-de-algoritmo/aulas/algoritmo/modulos/operadores-logicos-e-relacionais/
https://www.coursera.org/articles/entry-level-software-engineer-jobs
https://www.cursoemvideo.com/curso/curso-de-algoritmo/aulas/algoritmo/modulos/operadores-logicos-e-relacionais/#google_vignette
https://pt.khanacademy.org/computing

https://www.youtube.com/playlist?list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp
*/

/* 
TRANSCRIÇÃO
0:04
♫ Musica de Abertura ♫
0:25
Olá! Seja bem-vindo a mais uma aula do seu curso de algoritmo,
0:28
o meu nome é Gustavo Guanabara, eu sou seu professor,
0:30
e agora nós vamos dar continuidade ao estudo de operadores vendo os dois operadores que faltam:
0:35
os operadores relacionais e os operadores lógicos.
0:38
Vamos logo para a aula para a gente entender a diferença entre eles e para o que que cada um serve.
0:43
Então, na última aula nós vimos os comandos de entrada e os operadores aritméticos.
0:48
Agora, nós vamos começar vendo os Operadores Relacionais.
0:52
E como o próprio nome sugere,
0:54
os operadores relacionais vão criar a relação entre variáveis ou expressões.
1:00
Então você vai poder comparar as variáveis e expressões e gerar resultados lógicos,
1:05
como verdadeiro ou falso.
1:06
Então os operadores relacionais vão gerar como resultado, sempre, um valor lógico.
1:11
Os operadores lógicos que existem em todas as linguagens de programação, inclusive,
1:16
no ambiento do visualg, são:
1:23
E aí, vale destacar que não tem como fazer o maior ou igual, com o simbolo do igual embaixo do maior,
1:30
como a gente faz na matemática, por questões de digitação do teclado.
1:34
Então, nós vamos colocar o sinal de maior, seguido do sinal de igual sem espaço nenhum entre eles.
1:39
O mesmo vai ocorrer pro menor ou igual a,
1:42
e nós temos os dois últimos operadores relacionais que são o: igual a e o diferente de
1:48
E aí vale destacar que assim como o maior ou igual e o menor ou igual,
1:52
fica difícil digitar "o diferente",
1:54
que é um sinal de igual "cortado" no meio.
1:56
Então, pro operador de diferença, eu vou utilizar um sinal de menor e um sinal de maior,
2:00
digitados sem espaço entre eles.
2:03
e aí, nos vamos passar, logo por uma parte pratica que é comparar valores numéricos usando o VisuAlg
2:10
e mais uma vez, como sempre, eu vou recomendar.
2:13
Abra o visuAlg e assita essa aula com o aplicativo aberto
2:17
não adianta nada você ficar assistindo eu fazer alguma coisa
2:21
E achar que você aprendeu
2:23
então a melhor maneira de aprender é praticar
2:25
porque quando a gente pratica, a gente erra e quando a gente erra, a gente tenta consertar
2:30
e é tentando consertar que você aprende, nunca se esqueça disso
2:33
então criei um algoritmo e eu vou criar três variaveis aqui
2:38
variável A, variável B e variável C, todas as três do tipo inteiro
2:41
declaração de variáveis nós já vimos nas aulas anteriores
2:46
o que eu vou fazer aqui, é fazer uma atribuição simples
2:49
"A" recebe 2, "B" recebe 3 e "C" recebe 5
2:54
e agora nós vamos fazer algumas comparações lógicas
2:57
Posso colocar aqui. escreva "A" maior que "B"
3:01
Então ele vai me mostrar o resultado de Se "A" é maior que "B"
3:06
Executando o programa nós temos "FALSO"
3:09
isso significa . Eu mandei escrever o resultado lógico de se "A" é maior que "B"
3:14
e aqui, eu posso ver nos valores das variáveis que "A" vale 2 e "B" vale 3
3:19
"A" não é maior do que "B", "A" na verdade é menor do que "B"
3:24
como no resultado entre "A" maior do que "B". Eu tenho o valor lógico "FALSO"
3:30
Deu para entender?
3:30
Nós daqui á pouco vamos ver os operadores lógicos.
3:33
Mas os operadores relacionais sempre vão me resultar um valor lógico
3:38
Isso é, sempre vai me retornar ou verdadeiro ou falso
3:41
Vamos ver mais alguns exemplo
3:43
Então vou colocar aqui por exemplo "A" Igual a "B"
3:46
"A" é 2 e "B" é 3. Então "A" não é igual a "B".
3:49
Então vai me retornar o valor "FALSO".
3:52
Isso é "A" não é igual a "B"
3:54
De maneira similar eu posso testar se "A" é diferente de "B"
3:58
"A" sendo 2 e "B" sendo 3, obviamente "A" é diferente de "B"
4:02
Executando ele me retorna o valor "VERDADEIRO"
4:05
Isso é a resposta para: "A" é diferente de "B"? Sim "A é diferente de "B"
4:11
E como eu disse anteriormente
4:13
os operadores relacionais vão testar a relação entra variaveis, valores ou expressões
4:18
Então eu posso fazer algumas comparações utilizando valores
4:22
Por exemplo aqui.
4:24
"A" é maior do que 2? Ele vai me retornar "FALSO"
4:28
Porque "A" não é maior do que 2, se você verificar aqui.
4:31
"A" é igual a 2
4:33
Mas se eu fizer o teste lógico: "A" é maior ou igual a 2?
4:38
Executando, ele já me retorna "VERDADEIRO"
4:40
Porque "A" não é maior do que 2, mas ele é igual
4:44
Então um dos dois operadores é vai ter que resultar como verdadeiro
4:48
Logo, dessa maneira. "A" maior ou igual a 2 resulta no valor lógico "VERDADEIRO"
4:54
Vamos fazer agora, alguns testes lógicos com expressões
4:59
Nada impede de você fazer isso aqui
5:01
Eu vou testar se "C" é igual a "A"+"B" (A mais B)
5:04
Nós já vimos aula passada os operadores aritméticos, e nós sabemos que esse operador vai realizar adição
5:11
Então ele vai testar se "C" é igual a "A"+"B"
5:14
Como "C" é 3,"A é 2, e"B"é 3.
5:17
2 mais 3 é igual a 5, ele vai me resultar no valor "VERDADEIRO"
5:21
Vamos executar e ver que o resultado final, realmente foi verdadeiro
5:27
Vamos fazer um outro exemplo aqui, vamos ver se "C" é maior ou igual do que "B^A"(B elevado a A)
5:36
Isso é, ele vai fazer um teste vendo se "C" é maior ou igual do que o resultado de "B^A"(B elevado a A)
5:43
"B" é 3, elevado a "A". "3" ao quadrado, 9.
5:48
"C" é igual a 5. "C" não é maior ou igual a 9.
5:53
Então. Nós vamos executar e ele vai me retornar "Falso".
5:57
Porque "B" elevado a "A"
5:59
Da Nove (9)
5:59
"C" não é maior ou iguala "B" elevado a "A"
6:02
Mas se eu colocar aqui
6:05
Se o "C" For "<=B^A" (menor ou igual a B elevado a A)
6:08
Agora ele vai me retornar
6:10
O valor verdadeiro
6:12
Eu acho que já deu para você entender!
6:14
E fica claro que eu posso utilizar
6:16
Comparações entre variáveis e valores
6:19
Entre variáveis e expressões
6:20
E entre variáveis, expressões e valores
6:23
Eu posso misturar tudo aquilo que a gente viu até agora
6:25
Em uma única expressão, vamos testar:
6:28
Eu posso colocar aqui por exemplo
6:30
Testar se "B"
6:32
É menor ou igual a "C" resto da divisão "%" por Dois
6:37
O "C" é Cinco
6:39
O resto da divisão de Cinco por Dois "5/2"
6:42
"B" é igual a Três
6:44
Logo Três não é menor ou igual "<=" a Um (1)
6:47
Então, deve retornar o valor falso
6:50
Posso fazer assim:
6:52
Um é igual a "C" % 2 (1 = C % 2)
6:54
"C" % 2, é o resto da divisão de "C" que vale 5 por 2
6:59
5 dividido por 2 é igual a dois e o resto da divisão é 1
7:04
Ele vai me testar aqui, se 1 é igual a 1
7:07
Ele vai me retornar agora, o valor verdadeiro.
7:10
Por que 1 é o resultado de "C"%2
7:14
E eu não tenho a necessidade de colocar, "C"%2 do lado esquerdo da expressão
7:18
É claro que dessa maneira, ela fica um pouco mais difícil de enxergar.
7:22
Mais isso é possível, utilizando o operador relacional de igual.
7:26
E com isso, nós testamos varias maneiras de se utilizar os operadores relacionais.
7:31
Quando nós tivermos mais avançados, e formos ver as estruturas condicionais
7:35
Nós vamos, utilizar melhor ainda os operadores relacionais.
7:39
Mas por enquanto, eu acho que já fizemos bastante exercícios
7:41
E consegue entender, a comparação entre os resultados lógicos.
7:45
Vamos partir agora, pro próximo tipo de operador.
7:48
Os próximos operadores que nós vamos ver são os operadores lógicos.
7:52
Da mesma maneira que os operadores relacionais
7:54
os operadores lógicos também retornam um valor final
7:57
lógico.
7:59
Mas eles não servem pra comparar resultados
8:01
de expressões ou números.
8:04
Eles apenas servem pra comparar outros resultados lógicos.
8:07
No caso do VisualG, nós temos três tipos de operadores lógicos:
8:11
O Primeiro Operador, é o operador de "E", Vamos considerar duas premissas
8:16
a premissa "P" e a premissa "Q" cada uma com seu conjunto de valores, verdadeiros e falsos
8:23
Utilizando o operador "E" nos vamos ter o resultado verdadeiro
8:28
Apenas nos casos em que as premissas "P" e "Q" forem verdadeiras!
8:32
Em todos os outros casos, o resultado logico entre "P" e "Q" sera falso
8:37
O Segundo Operador, é o Operador "OU"
8:40
Vamos considerar as mesmas premissas "P" e "Q" e vamos ver como se comportaria o operador "OU"!
8:47
Nesse caso, o Operador "OU" só vai retornar falso, nos casos em que as duas premissas forem falsas!
8:54
Em todos os outros casos, o resultado logico sera verdadeiro!
8:58
ficou complicado? Ficou um pouquinho confuso ? fica calmo não tem problema
9:02
Quantas vezes você já volto pra assistir de novo oque eu falei!
9:05
Oque eu acabei de falar, é oque um professor normalmente fala em sala de aula
9:08
Essa é a maneira cientifica, essa é a maneira formal de se ensinar os operadores
9:12
Mas eu vou mostrar a diferencia entre os operadores "E" e "OU" pra vocês, você vai entender com certeza!
9:17
So aguarda um pouquinho que a gente tem mais um operador logico para ver, esse é simples de entender
9:22
você vai aprender logo de cara!
9:23
O ultimo operador logico que a gente vamos ver, é o operador "NÃO"
9:27
Pra isso vamos considerar apenas uma premissa!
9:30
Sendo a premissa "P' verdadeira 'NÃO p" é falso,isso é vai ocorrer uma inversão do resultado logico
9:37
Se nos temos
9:38
"P" como verdadeiro "NÃO p" obviamente uma coisa que não é verdadeira, é falsa.
9:43
e uma coisa que não é falsa, se torna verdadeira
9:47
o operador "NÃO", é fácil de entender o grande problema é a comparação do "E" e do "OU" pra quem ta começando a programar!
9:54
Se você já é um programador experiente ou com pouca experiencia, você sabe a diferencia entre eles
9:58
Mas se você esta começando agora, concorda comigo que e um pouco difícil de entender?
10:02
Eu tenho uma técnica pra mostrar pra vocês, que eu uso em sala de aula, fica muito mais fácil de entender
10:07
Vamos comigo e com certeza você vai compreender agora!
10:10
Vamos imaginar a Seguinte situação
10:12
Eu tenho duas amigas, "Paula" e "Quezia"
10:16
e eu gostaria muito de vê-las felizes!
10:19
Então eu quero que "Paula" seja feliz e que "Quezia" seja feliz
10:24
Se "Paula" for Feliz e "Quezia" for feliz, Obviamente eu fico muito feliz!
10:29
Se por acaso a "Paula" estiver feliz, mas a "Quezia" não estiver feliz, e eu quero que "Paula" e "Quezia"estejam felizes
10:37
Eu não vou ficar feliz !
10:39
Entenda o uso da palavra "E" aqui na minha frase, eu quero que a "Paula' 'e' "Quezia" sejam felizes!
10:45
não adianta uma só ser feliz, eu quero que as duas sejam
10:49
De maneira Similar, se "Paula' não estiver feliz e "Quezia" estiver
10:53
Obviamente eu também não vou ficar feliz, pois eu quero que as duas estejam felizes!
10:58
e no ultimo caso, se nem uma das duas estiver feliz, com certeza eu não vou ficar feliz!
11:04
Deu pra entender?
11:05
Com o operador "E", eu quero uma coisa E outra.
11:09
Não adianta vir só com uma pra mim, porque eu quero as duas.
11:12
Vamos seguir essa mesma linha de raciocínio com o operador "OU".
11:16
E aí fica até mais fácil pra você entender, não é mesmo?
11:19
Vamos lá. Vamos seguir a mesma linha de raciocínio.
11:21
"Paula" e "Quezia", e agora eu quero que Paula seja feliz OU Quezia seja feliz.
11:27
Se as duas estiverem felizes, obviamente eu fico feliz.
11:31
Se apenas a Paula estiver feliz e a Quezia não, eu acabo ficando satisfeito,
11:37
pois eu quero que a Paula OU a Quezia sejam felizes.
11:41
Tanto faz uma, ou outra.
11:43
De maneira similar, se a Paula não estiver feliz e a Quezia estiver,
11:48
mesmo assim, continuo feliz.
11:50
O único caso que é diferente no caso do OU,
11:53
é quando a Paula não estiver feliz e a Quezia também não estiver feliz,
11:57
Nesse caso, como eu quero que Paula OU Quezia sejam felizes, e nenhuma das duas está,
12:02
eu também não fico feliz.
12:04
Agora deu pra entender a diferença entre os operadores E e OU né?
12:08
No caso do E, eu só fico feliz quando Paula e Quezia ficarem felizes.
12:12
Nos outros casos eu não fico satisfeito.
12:15
No caso do OU, eu fico feliz em qualquer um dos casos, menos no caso onde as duas estejam infelizes.
12:22
O operador NÃO é simplesmente uma inversão lógica
12:25
Se Paula estiver FELIZ
12:26
O NÃO FELIZ é TRISTE
12:28
Pensando da mesma maneira
12:29
Se ela estiver TRISTE, o NÃO TRISTE é o feliz
12:32
E aí, pra você gerar a tabela verdade
12:35
Que são essas tabelas que a gente tá fazendo
12:36
Do E e do OU, fica fácil
12:38
Todas as carinhas felizes
12:40
Você vai transformar em VERDADEIRO
12:42
Todas as carinhas tristes, você vai transformar em FALSO
12:44
Assim fica fácil, não é?
12:46
Então, sempre que você tiver dificuldades em entender a tabela verdade
12:51
Do E e do OU
12:52
Basta desenhar as carinhas
12:54
E depois substituir
12:56
Todas as FELIZES por V
12:57
E todas as TRISTES por F
13:00
E assim
13:01
Você consegue ter as duas tabelas VERDADES
13:04
Dos operadores lógicos: E e OU
13:06
Vamos fazer alguns testes lógicos
13:08
Utilizando aquele nosso mesmo exemplo
13:10
Que nós estávamos criando no Visualg
13:12
Então vamos fazer aqui
13:14
Esse "Escreva"
13:15
Vou ter que dar dois testes lógicos
13:16
Então, se eu colocar aqui
13:18
"(verdadeiro e falso)"
13:22
Ele vai me retornar
13:23
O valor FALSO
13:25
Por que uma coisa VERDADEIRA E uma coisa FALSA
13:28
Dá em FALSO
13:29
Mas eu posso utilizar também
13:31
Resultados lógicos gerados por operadores relacionais e fazer o teste
13:35
Vamos testar por exemplo: se A é igual à B (A=B)
13:39
ou C é maior do que A (C>A)
13:43
Vamos ver o resultado.
13:45
Nesse caso A é igual à B? 2 é igual à 3?
13:48
Não! Então esse aqui vai me retornar falso.
13:52
C é maior do que A? 5 é maior do que 2?
13:55
Esse aqui me retornaria verdadeiro
13:58
Falso ou verdadeiro, entra naquele caso.
14:01
Paola não está feliz, mas Quesia está feliz
14:04
como eu tenho um "OU" meu resultado lógico vai ser :
14:07
uma carinha feliz ou verdadeiro!
14:10
Então temos aqui que o resultado lógico disso tudo ((A=B) ou (C>A)) é verdadeiro!
14:14
Se por acaso colocarmos um parêntese aqui e, pusermos um não na frente: (não((A=B) ou (C>A)))
14:19
ele vai inverter o resultado lógico disso
14:21
Então; se isso aqui:(A=B) ou (C>A) é verdadeiro, o não isso aqui: (A=B) ou (C>A)
14:25
vai me retornar o valor Falso!
14:28
Então, o que ele fez foi o seguinte: A é igual a B ? , não! C é maior qua A?, sim!
14:34
Falso, ou verdadeiro é: verdadeiro e, não verdadeiro é : falso.
14:39
E mais uma vez, você vai poder fazer os seus testes lógicos e relacionais,
14:43
utilizando: números, variáveis ou expressões.
14:47
Lembrando, que para utilizar os operadores lógicos, você só pode testar valores lógicos.
14:53
E lembre-se também, que todas as expressões utilizando os operadores relacionais, geram resultados lógicos.
14:59
O que eu recomendo é, que você faça vários testes lógicos
15:02
como esse que eu acabei de utilizar.
15:04
então faça testes e tente descobrir qual é o resultado logico no final .
15:09
se preferir pause o vídeo nesse momento volte ao seu visual g e faça alguns testes,
15:14
e não se esqueça de colocar todas as suas comparações relacionais entre parêntese
15:19
pois elas é que vão gerar os resultados lógicos no final
15:22
e por falar em parêntese nós temos que se preocupar bastante com a ordem de precedência
15:26
nós vimos na aula anterior que existe uma ordem de precedência entre os operadores aritméticos
15:31
agora que nós já vimos os dois outros tipos de operadores, relacionais e lógicos
15:35
vamos ver uma tabela geral, de como funciona a ordem de precedência dentro de expressões que contém
15:40
operações aritméticas, lógicas e relacionais
15:44
sendo assim, vamos entender como funcionaria a ordem de precedência geral
15:48
numa expressão que tenha operadores aritméticos, lógicos e relacionais ao mesmo tempo
15:54
em primeiro lugar, serão feitos os aritméticos
15:57
dando com ordem de precedência, que nós já vimos anteriormente
16:00
os parênteses, em seguida, a exponenciação, logo depois, a multiplicação e as divisões, e por fim, as adições e subtrações
16:09
depois que forem resolvidas todas as expressões aritméticas
16:13
serão realizadas todas as operações relacionais
16:16
dentro dos operadores relacionais, que são "maior", "menor", "maior ou igual", "menor ou igual", "igual" e diferente
16:22
Todos tem a mesma ordem de precedência, e serão executados sempre da esquerda para a direita
16:27
por fim, depois de serem resolvidas as expressões aritiméticas e as relacionais
16:32
executaremos todas as operações lógicas
16:34
começando pelo 'E', logo em seguida o 'OU' e por fim o 'NÃO'
16:39
guarde essa tabela na sua mente, essa é a ordem de execução de todos os operadores que podem ser utilizados dentro de um algorítimo
16:47
Agora ficou fácil né?!
16:49
Agora que a gente já reuniu todas as informações sobre operadores, a gente já pode partir para algo maior
16:56
que é um exercício mais complexo utilizando operadores aritméticos relacionais e lógicos
17:02
juntamente com os comandos de entrada e saida que nós já vimos anteriormente
17:06
vamos pensar então em um exercício que utilize tudo isso que a gente viu até agora, incluindo as variáveis
17:12
vamos fazer um exemplo que mais tarde vai ser mais completo
17:15
mas por enquanto já da pra gente trabalhar
17:18
o que eu vou fazer é o seguinte, com certeza você conhece triângulos
17:22
o que eu vou fazer aqui é ler três lados de um triângulo, que eu vou chamar de L1, L2 e L3
17:30
Esses valores vão ser reais ('L1, L2, L3: Real'). E eu vou fazer um teste lógico para saber se esse triângulo pode ser equilátero ou escaleno.
17:39
oque vai me resultar em um teste lógico ('logico')
17:43
se você se lembra do estudo de triangulos, triangulo equilátero é aquele que possui tres lados iguais
17:48
o triangulo escaleno é aquele que tem três lados diferentes
17:52
por enquanto eu não vou me preocupar se o três valores que foram digitados realmente formam um triângulo
17:58
porque existe um regra matemática para isso. Mas com a gente 'tá' no inicio, nós não vamos ver essa regra matemática ainda.
18:04
Nós vamos ver mais a frente em um exercício mais complexo.
18:07
na verdade, nós vamos ler três valores e vamos ver se eles são totalmente iguais entre si,
18:13
ou totalmente diferentes entre si.
18:15
vamos fazer os testes aqui e entender como funcionam os operadores relacionais e lógicos
18:20
então aqui, vamomos começar pedindo que o usuário digite os três lados
18:25
Escreva("digite o primeiro lado: ")
18:31
Leia(L1)
18:33
vou fazer a mesma coisa para os outros dois lados
18:37
o procedimento é exatamente o mesmo
18:40
só que o leia vai jogar o valor em uma outra variável
18:44
por fim, vou fazer isso com o terceiro. Leia(L3)
18:50
agora eu já fiz a leitura dos três
18:53
o que eu vou fazer é para verificar se o triangulo é equilatero
18:57
EQ vai receber o resultado lógico entre os testes dos tres lados ('EQ <- ')
19:02
Se L1 for iqual a L2 e L2 for iqual a L3 ['(L1=L2) e (L2=L3)']
19:10
Ele é um triangulo equilatero
19:11
Eu poderia até colocar um outro e aqui
19:14
L1
19:15
Seja igual a L3
19:17
Mas, isso
19:18
já é uma imposição lógica
19:19
Se L1 é igual à L2
19:21
é se L2 é igual à L3
19:23
Obviamnete
19:24
L1
19:24
é igual a L3
19:25
É eu não preciso
19:27
do final dessa expressão
19:28
Se você deixar
19:29
não tem problema, vai funcionar da mesma maneira
19:32
Mas, isso
19:32
é uma redundância lógica
19:34
é eu vou eleiminar
19:35
Pra testar se ele é escaleno
19:38
Eu vou verificar
19:39
Se L1
19:40
for diferente de L2
19:42
e
19:43
L2
19:44
for diferente de L3
19:46
e
19:47
L1
19:48
for diferente de L3
19:50
Na mamneira do escaleno
19:51
os três testes lógicos são necessários
19:53
Pois L1 ser diferente de L2
19:56
é L2 ser diferente de L3
19:57
Não implica
19:58
que L1
19:59
Seja diferente de L3
20:00
Então
20:01
eu tenho que fazer o terceirot este lógico
20:03
por fim
20:04
vou escrever na tela
20:06
o resultado
20:07
O triangulo
20:09
e
20:10
equilátero?
20:12
vou mostrar o valor lógico de EQ
20:14
vai escrever verdadeiro ou falso
20:17
vou usar o escreval no lugar do escreva
20:19
Pra que ele pule a linha
20:21
No final
20:22
vamos ver
20:24
se o triangulo
20:26
e
20:27
escaleno
20:28
então
20:29
nesse meu algoritimo
20:31
eu tenho
20:31
a leitura dos três valores
20:33
os testes entre eles
20:35
e o resultado
20:36
que é verificando se o triângulo vai ser equilátero
20:38
ou escaleno
20:39
vamos fazer alguns testes
20:40
executando
20:42
Primeiro lado 3
20:43
Segundo lado
20:44
2
20:45
terceiro lado
20:46
4
20:47
três dois e quatro
20:49
são três valores diferentes entre si
20:51
logo
20:52
formariam
20:52
um triângulo escaleno
20:54
vamos verificar
20:55
o triângulo não pode ser equilátero
20:57
mas ele pode ser escaleno
20:59
vamos voltar.
21:00
Executar novamente
21:01
e vamos colocar 4, 4 e 4
21:05
que formariam um triangulo equilátero
21:08
O triângulo é equilátero? verdadeiro.
21:11
O triângulo é escaleno? falso.
21:13
Vamos fazer um outro teste
21:15
que vai ser quatro (4), quatro (4) e três (3)
21:21
Aqui, nós temos dois lados iguais e um diferente
21:24
O que me geraria um triângulo isósceles.
21:27
Que nós não estamos testando neste caso
21:29
Mas ele não vai ser nem equilátero, nem escaleno..
21:32
O resultado lógico:
21:34
O triângulo é equilátero? Falso O triângulo é escaleno? Falso
21:38
E apenas relembrando o que eu já disse
21:40
Existe uma regra matemática
21:41
Para verificar se os três lados podem formar um triângulo
21:45
E este teste lógico é simples
21:47
Cada lado deve ser menor que a soma dos outros dois lados
21:52
Então se eu tenho lado L1, L2 e L3
21:55
L1 tem que ser menor que a soma dos outros dois
21:58
L2 tem que ser menor que a soma dos outros dois
22:00
E L3 também tem que ser menor que a soma dos outros dois.
22:04
E note que eu utilizei o operador lógico "e" na minha frase
22:07
Então, vamos criar mais uma variável lógica para verificar se ele pode ser um triângulo.
22:13
Então eu vou criar um novo valor lógico chamado "TRI".
22:17
Que vai verificar se ele pode ser um triângulo
22:20
A minha variável "TRI" vai receber o resultado lógico
22:23
Entre L1, ser menor que a soma de L2 com L3
22:29
Note aqui que nesta expressão
22:31
os operadores aritméticos têm maior precedência, de acordo com a tabela que nós vimos,
22:36
então ele vai fazer primeiro L2 + L3,
22:38
e testar se a soma entre os dois é maior do que L1
22:42
Também tenho que fazer os testes
22:44
entre L2 ser maior do que L1 + L3
22:49
E também tem que saber se L3 é menor do que L1 + L2.
22:55
Um triângulo só pode existir se todas essas operações resultarem em um valor lógico verdadeiro.
23:02
Vamos mostrar aqui
23:04
Escreval "Pode formar um Tiângulo? "
23:09
nós vamos ver se sim ou não
23:12
com o valor de TRI
23:14
Vamos fazer mais alguns testes
23:16
se eu colocar 2, 2 e 2,
23:19
Ele pode formar um triângulo, ele forma um triângulo equilátero e não forma um escaleno.
23:25
Mais um teste:
23:26
Aquele 2, 3 e 4 que nós vimos anteriormente,
23:29
ele pode formar um triângulo, não um triângulo equilátero, mas pode formar um triângulo escaleno
23:36
Vamos fazer mais um teste:
23:38
Aquele nosso 2, 2 e 3.
23:42
ele pode formar um triângulo, mas ele não pode ser equilátero nem escaleno,
23:46
isso porque ele é um triangulo isósceles.
23:49
Por fim, vamos fazer um teste com 2, 2 e 5.
23:54
Com 2, 2 e 5 não se pode fazer um triângulo,
23:57
porque 2 é menor do que 2 + 5 que é 7
24:00
2 aqui é menor do que 2 + 5 que é 7,
24:03
mas 5 não é menor do que 2 + 2 que é 4.
24:07
Então o terceiro lado seria grande demais pra formar um triângulo.
24:11
Então, no caso aqui, o resultado lógico seria: ele não pode formar um triângulo,
24:15
não pode ser equilátero e muito menos escaleno.
24:18
E aí você pode me perguntar: "Mas Guanabara, nós temos 2 lados iguais e 1 diferente,
24:22
ele seria isósceles certo?"
24:24
Não! Porque entre 5, 2 e 2 não se pode formar um triângulo,
24:29
e nós vemos isso por esse resultado que eu acabei de marcar
24:32
Deu pra entender? Nós vamos voltar a esse nosso raciocínio sobre triângulos,
24:36
mais à frente, quando nós formos ver operadores relacionais
24:39
Mas por enquanto, o nosso tempo acabou, e nós vamos ter que partir pra nossa próxima aula,
24:44
que só sai na semana que vem. Na próxima aula eu vou mostrar uma nova ferramenta, além do VisuAlg,
24:49
que é muito mais fácil de você aprender Algoritmos.
24:51
Porém, ela não é tão profissional.
24:54
Se você baixou o pacote aqui em www.cursoemvideo.com,
24:58
com certeza você já tem o aplicativo Scratch. Não sei se você já instalou.
25:02
Instale, pois na próxima aula nós vamos utilizar ele,
25:05
e você vai ver que você vai se divertir bastante com essa ferramenta,
25:08
E vai, de quebra, aprender muita Lógica de Programação.
25:11
Mais uma vez eu queria pedir, primeiro: Pratique!
25:15
Segundo: colabore com o projeto do Curso em Vídeo.
25:18
Clicando aqui, você assina o canal e vai receber todas as informações sempre que tiver uma aula nova,
25:23
Do lado do botão de "Assine", tem uma engrenagem,
25:26
clica nela, e diz que você quer receber um email sempre que sair uma aula nova, assim você não vai perder nada.
25:31
Clicando aqui, você vai assistir todas as aulas do curso de Algoritmo até agora,
25:36
então, se você chegou agora, seja bem vindo, mas você tem algumas aulas anteriores,
25:40
pra poder entender a construção de Algoritmos, e eu recomendo que você clique aqui e assista todas elas.
25:45
Não esqueça de compartilhar sempre as aulas, dar jóinha nos vídeos,
25:49
Compartilhar no seu Facebook, entra lá no Facebook e diz pros seus amigos: "Olha só!
25:53
Assiste essa aula aqui. aprende a programar!"
25:55
Nós estamos aqui nos primeiros passos pra construção de Algoritmos,
25:58
e com certeza você vai aprender a programar.
26:01
Eu vou mostrar várias ferramentas, vou mostrar várias técnicas,
26:04
eu vou te ensinar sempre num ritmo um pouco mais bem cadenciado,
26:09
pra que você possa entender Algoritmos, pra que você possa construir Algoritmos.
26:13
Depende de mim te ensinar, e eu to fazendo a minha parte.
26:16
Depende de você aprender, pra isso você precisa praticar.
26:19
Nunca se esqueça. Estude bastante, um forte abraço e até a próxima!
26:25
Oi! Chegou alguém fazendo barulho pra caramba.
26:29
Falei brigando com você! Ai, ai, ai!
26:32
Eu queria muito o telefone desse maldito que fica ligando às 8 horas da manhã pra dentro da empresa!
*/
