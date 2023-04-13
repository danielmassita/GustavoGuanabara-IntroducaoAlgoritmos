// Aula 07 - Estruturas Condicionais 1 - Curso de Algoritmos #07 - Gustavo Guanabara
// https://youtu.be/_g05aHdBAEY

/*
Após a aula de exercícios, vamos voltar com a matéria de Estruturas Condicionais. E se acontecer alguma coisa? 

Estruturas Condicionais - Parte 1


*/

/*
TRANSCRIÇÃO
0:04
♫ Música de Abertura ♫
0:21
Olá, Seja Bem-vindo a mais uma aula do seu curso de algoritmo.
0:24
Meu Nome é Gustavo Guanabara, Eu sou seu professor
0:27
E agora depois da nossa aula de exercícios, Nós vamos continuar com a matéria
0:30
Vendo Estruturas Condicionais.
0:33
Essa é a primeira aula de estrutura condicional, E você vai entender como as condiçoes
0:37
são importantes na hora de construir um algoritmo.
0:40
Então vamos partir agora pra nossa aula que se pergunta:
0:42
"E se acontecer alguma coisa"
0:44
Vamos ver como é que faz.
0:46
então essa nossa sétima aula é sobre, Estruturas condicionais.
0:50
Como eu disse essa é a primeira parte e nós vamos ver dois tipos de estruturas condicionais.
0:53
e antes de mais nada vamos entender, "O que é uma condição".
0:57
Na verdade condições estão presentes na nossa vida o dia inteiro, Vamos mostrar um exemplo aqui.
1:02
Vamos imaginar, Uma situação real e uma frase
1:06
"Se eu tiver dinheiro então vou fazer uma viagem pra Disney".
1:10
Isso é uma coisa corriqueira de acontecer na nossa vida
1:12
se algo ocorrer, Nós vamos tomar determinada decisão.
1:15
Vamos ver isso acontecendo, na ferramenta que nós já vimos em algumas aulas anteriores
1:19
O Scratch
1:20
Então, estamos aqui no Scratch
1:22
Vamos à seção de controle
1:24
Vamos colocar: "Quando à bandeira for clicada".
1:27
Vou colocar aqui um sensor
1:30
perguntando
1:33
"Posso andar?
1:36
sim
1:38
ou não".
1:41
A minha resposta
1:43
vai ficar aqui.
1:45
Eu vou na seção de controle também
1:47
e aqui você vai ver que eu tenho uma estrutura "se"
1:51
então, Vou colocar aqui em baixo
1:52
"Se algo acontecer".
1:54
Então vamos no Operador
1:56
Vou colocar um operador de igualdade aqui.
1:59
Se a minha resposta
2:01
foi "sim"
2:03
Isso é
2:04
posso andar?
2:05
ele diz que "sim"
2:07
então vou fazer com que ele de
2:09
dez passos.
2:11
Botão "repita" aqui
2:14
vou andar.
2:17
Vou mudar a aparência dele, para "próximo traje".
2:21
E como a gente viu anteriormente
2:23
é bom que a gente espere um pouquinho,
2:24
pra poder ver à animação.
2:26
Vou botar "0.1" aqui.
2:29
Vamos executar
2:31
Ele vai perguntar: "Posso andar?, sim ou não?".
2:33
Se eu colocar: "sim", ele vai andar
2:38
Vamos repetir o processo.
2:42
Posso andar?
2:43
Vou botar "não".
2:45
Ele vai ficar parado
2:47
Deu pra entender?
2:48
Então ele só andou,
2:49
ele só fez o procedimento de caminhar se
2:52
a resposta fosse sim.... Sim, você pode andar
2:55
E se você prestar bem atenção
2:56
Existe uma delimitação dessa condição
2:59
Vamos ver
3:00
Olhando o código aqui
3:01
Eu tenho um "se"
3:03
e ele tem uma delimitação, isso é
3:04
ele tem a estrutura, ela desce
3:06
e ela só vai terminar aqui embaixo. Então tudo que estiver aqui dentro
3:10
ele vai fazer apenas se acontecer essa resposta.
3:15
Então uma condição ela tem que ser delimitada
3:18
Tudo que estiver dentro da minha mão vai acontecer se algo ocorrer
3:23
Vamos ver como isso se comporta utilizando o Visualg.
3:27
Então se você perceber aqui eu tenho o "se", que é a estrutura condicional
3:32
A parte do "eu tiver dinheiro" é uma expressão né?
3:34
Se, por acaso, eu tiver dinheiro, então
3:37
Vou fazer uma viagem pra Disney
3:39
o "vou fazer uma viagem pra Disney" é minha ação
3:41
No Visualg existem essas 3 delimitações:
3:44
O comando, a expressão e a ação.
3:47
E ela é representada da seguinte maneira:
3:50
Se uma expressão for verdadeira, então executo um bloco
3:55
E existe o comando "FimSe"
3:57
E alguns alunos meus sismam em dizer FimSe (lendo junto)
3:59
Não existe "FimSe", é o fim de "Se"
4:02
E como não posso utilizar espaço nos identificadores, o "FimSe" não tem espaço entre eles
4:07
Eu vou sempre representar a mudança entre maiúsculas e minúsculas,
4:11
Pra você perceber que existem duas palavras
4:13
Então, o correto de falar é "Fim Se", e não "FimSe"
4:17
Vamos exercitar as estruturas condicionais simples fazendo um exemplo
4:21
Então esse "Se" aplicado a minha frase anterior seria da seguinte maneira:
4:25
Se o dinheiro for maior ou igual a dez mil, então escreva "Partiu Disney". Fim de "Se"
4:30
Se você perceber o que eu escrevi ali, foi exatamente o que eu escrevi na frase anterior
4:35
Só que agora com uma estrutura de algorítimo computacional, escrita em Visualg
4:39
O Nome dessa estrutura, onde existe um bloco sendo executado caso uma expressão seja verdadeira,
4:45
Se chama condicional simples
4:48
Vamos partir agora para a primeira situação prática
4:51
E a minha proposta aqui, e aprimorar aquele algorítimo da idade
4:55
E você deve lembrar muito bem, foi na aula passada, onde nós fizemos um algorítimo em que a Creuza digitava o ano em que ela nasceu
5:01
E era mostra do de volta a sua idade. Vamos partir daí
5:05
Então eu tenho aqui um algorítimo para o cálculo da idade, vamos rapidamente pois nós já fizemos esse.
5:09
então eu vou escrever na tela
5:12
em que ano estamos
5:17
vou ler, o ano [Leia (ano)]
5:21
vou ter que declarar a variável ano aqui em cima
5:23
vou ler também, em que ano você nasceu
5:31
E vou ler o nascimento
5:36
que também é outra variável que eu vou ter que ter aqui em cima
5:39
lembre-se, eu não vou criar o algorítimo pensando inicialmente nas variaveis
5:42
eu vou criando, e as variáveis comforme vão surgindo, eu vou declarando
5:46
a idade da pessoa é calculada através do ano atual menos o ano de nascimento (ano - ano_nasc)
5:52
esse resultado dessa diferença, será atribuído a uma variável que eu vou chamar de idade
5:57
que também deve ser declarada aqui em cima
6:00
todos ele são do tipo inteiro
6:02
vou mostrar a idade na tela
6:07
("Em ",ano, " voce tera ", idade, " anos.")
6:21
vou botar um escreva l aqui (Escreval), e vamos executar
6:25
em que ano nós estamos? nós estamos em 2014
6:28
que ano eu nasci? 1978
6:32
E ele me deu a resposta, 'em 2014 você terá 36 anos.'
6:35
e eu quero a seguinte situação
6:38
caso a pessoa tenha mais de 21 anos eu quero complementar essa mensagem dizendo "e você já esta na maioridade"
6:44
vamos ver como isso funciona
6:46
vamos fazer aqui: se por acaso essa idade for maior ou igual a 21 anos [ (idade>=21) ]
6:53
Então [entao], já vou colocar o Fim Se [fimse]
6:57
e vou escrever o comando aqui dentro
6:59
que vai ser escreval
7:03
("E voce ja tera atingido a maioridade.")
7:12
vamos executar
7:14
vamos colocar aqui 2014
7:16
vamos colocar 1978
7:19
em 2014 você terá 36 anos e você já terá atingido a maioridade.
7:24
vamos fazer uma pequena alteração
7:26
vou voltar aqui para o escreval, vou tirar esse ponto
7:33
vou tirar esse você para não ficar repetitivo
7:37
e vamos complementar aqui
7:40
então ele vai mostrar: "em tal ano você terá tal idade"
7:44
e já terá atingido a maioridade. Vamos fazer de novo o exemplo
7:48
2014
7:51
1978
7:54
"em 2014 voce tera 36 anos e ja tera atingido a maioridade."
7:58
coso você faça uma situação
8:00
onde a idade seja menor do que 21 anos
8:03
por exemplo, estamos em 2014, e a pessoa nasceu no ano 2000
8:08
só mostrará que em 2014 você terá 14 anos
8:11
nesse caso, a mensagem informando que a mairidade foi atingida, so ocorrerá, caso ela tenha sido atingida
8:18
se por acaso a pessoa tiver menos de 21 anos
8:21
nada será exibido, a não ser, a mensagem padrão
8:24
ai você pode estar perguntando, mas Guanabara, eu quero mostrar também se a pessoa não atingiu a maioridade
8:29
E ai, existe uma outra estrutura que é bem simples de compreender
8:33
A situação então, seria parecida com o seguinte
8:36
Utilizando a mesma frase que eu usei como exemplo anteriormente
8:38
vamos complementá-la utilizando uma condição mais completa
8:41
vejamos um exemplo
8:43
se eu tiver dinheiro, então vou fazer uma viagem para a disney
8:46
se não, eu vou ficar em casa
8:48
E ai, mais uma vez, eu complementei a minha estrutura condicional
8:52
utilizando o senão, e isso, é algo que você utiliza no seu dia-a-dia, no seu cotidiano
8:57
você diz: 'se alguma coisa acontecer, vou fazer isso, caso não aconteça, se não acontecer,
9:02
eu vou fazer outra coisa.'
9:04
o scratch também tem uma ferramenta para isso
9:07
então, aqui nós temos o Se, e se você olhar na seção de controles: o Se fechado e o Se com Senão
9:16
então tem a opção de fazer aqui um Se com Senão
9:19
vou tirar aqui o repita e vou fazer aqui
9:21
Vou puxar essa expressão pra cá
9:25
Agora posso eliminar esse Se
9:28
então aqui estou dizendo. Ele perguntou. Posso andar, sim ou não?
9:32
caso a resposta seja sim. Ele anda
9:35
caso o contrario
9:37
eu vou fazer ele pensar
9:41
sei lá #chateado
9:46
Vamos executar agora
9:48
Posso andar?
9:49
Sim!
9:50
ele foi...
9:51
e andou!
9:53
Mais uma vez
9:54
Posso andar?
9:55
vou dizer que não
9:56
ele disse..
9:57
chateado
9:58
Muito simples de entender, não é mesmo?
10:00
então, vamos ver como isso se comporta
10:02
utilizando o visualg
10:04
No visualg
10:04
nós vamos utilizar a mesma estrutura
10:06
Só...
10:07
que com o complemento do senão
10:09
vamos ver como é que fica!
10:11
Se uma expressão ocorrer
10:12
então...
10:13
executa o bloco A
10:14
senão
10:15
executa o bloco B
10:16
é uma coisa que eu quero deixar bem claro aqui
10:18
é que nem o então...
10:20
nem o senão...
10:20
possui o a com til ~
10:22
isso ocorre
10:23
pelo motivo que nós já vimos anteriormente
10:25
Palavras reservadas
10:26
não podem ter acentuação
10:28
mais uma vez
10:29
o fim de se está presente
10:30
é vamos mais uma vez, reescrever aquela frase anteriror
10:34
utilizando
10:34
uma sintaxe mais próxima
10:36
do algoritmo utilizando o visualg
10:38
aquela frase da viagem ficaria da seguinte maneira
10:41
se o dinheiro for maior que 10000
10:43
então Partiu Disney
10:44
senão
10:44
escreva #chateado
10:46
é o nome que se da à essa estrutura
10:48
que incorpora o senão na sintaxe
10:50
é...
10:50
condicional composta
10:52
é agora que agente
10:53
tá avançando nós estudos das nossas estruturas condicionais
10:56
eu posso mostrar pra você
10:57
um conceito muito importante
10:58
que é o de indentação
11:00
é só da uma olhada
11:01
no código que eu acabei de mostrar
11:02
e você vai entender, facilmente
11:04
o que é um código indentado
11:06
pra uma pessoa iniciante que olha
11:07
esse código
11:08
parece que as linhas estão
11:09
um pouco bagunçaas
11:10
estão um pouco desalinhadas
11:12
mas na verdade
11:13
elas estão identadas
11:14
se você prestar atenção
11:16
os comandos
11:16
escreva
11:17
estão
11:17
um pouco deslocados
11:18
a direita
11:20
o primeiro
11:20
indica
11:21
que o comando escreva partiu disney
11:23
está dentro
11:23
do então
11:24
está dentro da estrutura se
11:26
o segundo
11:27
mostra que o #chateado
11:29
vai ser escrito somente
11:30
se a condição de cima
11:32
não for atendida
11:33
isso é
11:34
está dentro do senão.
11:35
O processo de endentação não é obrigatório.
11:37
O seu código vai funcionar sem ele,
11:40
mas é muito importante que quando você está aprendendo a programar
11:42
você aprenda a fazer a endentação corretamente.
11:45
Para endentar um código
11:47
basta utilizar a tecla TAB ( ↹ ) do teclado
11:49
para causar um deslocamento horizontal a direita.
11:51
Vamos ver como isso se aplica a uma segunda área prática.
11:55
Onde vamos verificar se um número é par ou ímpar.
11:58
então, meu problema é simples
12:01
eu quero ler um número e dizer se ele par ou é impar
12:04
nesse caso, não é possível utilizar estruturas condicionais simples pra isso
12:08
já que eu tenho dois tipos de condição
12:10
caso seja estabelecido que numero é par, eu vou escrever que ele é par.
12:14
caso contrario, isso é, no Senão eu vou dizer que ele é impar
12:17
dizer se um número é par ou impar é simples
12:20
basta dividi-lo por dois e ver se o resto da divisão é 0 ou 1
12:24
vamos entender dois exemplos práticos e você vai entender facilmente isso
12:29
vamos ver dois exemplos que vai deixar isso bem claro
12:32
o primeiro deles é o número 5
12:34
se eu pegar o 5 e dividir por 2
12:36
5 divido por dois vai dar 2 e sobra 1
12:40
porque 2 x 2 da 4
12:42
pra 5 resta 1
12:44
vamos fazer o mesmo com número 8
12:46
8 ÷ 2 vai dar 4, porque 4x2 igual a 8
12:51
logo o resto é 0
12:52
perceba a diferença ai
12:54
o número cinco
12:55
quando dividido por 2
12:56
da resto 1
12:57
o número 8
12:58
quando dividido por 2
13:00
da resto 0
13:01
é ai, que nós vamos pegar o ponto
13:03
para identificar se o número
13:04
par
13:05
ou ímpar
13:06
sempre que o resto for igual a 1
13:08
o número é ímpar
13:09
sempre que o resto for igual a zero
13:11
o número é par
13:12
isso vai acontecer
13:13
sempre!
13:14
com qualquer número!
13:15
pode pegar qualquer número inteiro
13:16
dividir ele por dois
13:17
é ver qual é o resto final
13:19
se o resto final for zero
13:20
esse número que você escolheu
13:21
é par!
13:22
caso contrário
13:23
ele é ímpar!
13:24
é se você lembra muito bem
13:25
lá nas aulas de operadores aritméticos
13:27
nós vimos um operador
13:29
que da o resto da divisão
13:30
que é o módulo
13:31
ele é feito
13:32
através do símbolo
13:33
de porcentagem %
13:34
vamos ver como esse algoritmo ficaria pronto!
13:37
vou criar um novo algoritmo aqui no visualg
13:40
vou salvar ele na minha pasta aula 7
13:44
com o nome idade
13:46
vamos começar um algoritmo novo
13:50
vamos colocar o nome
13:53
de par ou ímpar
13:58
declarar um número n qualquer
14:01
que é inteiro
14:02
vamos ler esse número
14:08
digite um número qualquer
14:13
leia n
14:17
com isso
14:18
eu vou digitar qualquer número
14:19
é ele vai ser guardado...
14:21
por exemplo digitei 5
14:22
o número 5
14:23
vai ser guardado na variável n
14:25
basta verificar aqui
14:26
na área de variáveis do visualg
14:29
a partir de agora
14:30
eu tenho o valor
14:31
do número que o usuário digitou
14:32
guardada na variável n
14:34
o que eu vou fazer é o seguinte
14:36
se
14:37
o resto da divisão n por 2
14:39
eu represento assim
14:40
se n % 2, significa
14:42
eu vou pegar n
14:43
vou dividir por 2
14:44
mas o que me importa, não é a divisão
14:46
é sim o resto dela
14:48
se o resto da divisão por 2 for igual a 0
14:50
então
14:51
eu escrevo na tela
14:57
o número
14:59
n
15:01
é par
15:04
senão
15:08
eu vou escrever
15:10
o número n
15:13
é ímpar
15:17
note aqui
15:18
que eu escrevi
15:19
o escreval
15:20
do número par
15:22
é do número ímpar
15:23
indentados
15:24
isso é
15:25
alinhados
15:26
dentro da estrutura se
15:28
dessa maneira
15:29
você consegue
15:30
traçar uma linha vertical
15:31
imaginária
15:32
que vai delimitar, a estrutura se
15:34
a mesma linha imaginária
15:35
você percebe mais claramente
15:37
usando o scratch
15:38
onde você temo se
15:40
o senao
15:41
é o fim dele
15:42
alinhados
15:42
note aqui!
15:43
que a estrutura de bloco de repetição
15:45
está dentro do se
15:47
isso é
15:47
ela está identada
15:49
o comando pense
15:50
está dentro do senão
15:51
também está indentado, pois tem um espaço
15:54
aqui na esquerda
15:55
esse mesmo espaço
15:56
é colocado aqui no visualg
15:58
num processo, que agente vai chamar de indentação
16:00
que eu fiz
16:01
utilizando a tecla tab, do teclado
16:03
E aqui cabe um macete importante que o VisuAlg tem,
16:07
caso você não esteja ainda se familiarizado com o processo de indentação
16:11
o VisuAlg ainda te ajuda. Basta você pressionar Ctrl G, e a indentação é feita automaticamente.
16:17
Então, vamos imaginar aqui que eu não saiba indentar, então eu vou colocar um comando em cima do outro,
16:24
isso vai gerar
16:25
uma confusão visual, pra min inicialmente
16:27
pressionando as teclas ctrl + g
16:30
a indentação é feita automaticamente
16:31
e os comandos escreval
16:33
são colocados dentro da estrutura se
16:36
mas eu gosto sempre de avisar meus alunos do seguinte
16:38
não vicie!
16:39
no ctrl + g
16:40
aprenda
16:41
apenas
16:41
como a indentação é feita
16:43
pra você mesmo fazer
16:44
com suas próprias mãos
16:45
utilizando a tecla tab
16:47
se você viciar, utilizando ctrl g
16:49
você acaba ficando
16:50
dependente disso
16:51
e outras linguagens de programação
16:52
como editores
16:53
de php
16:54
editores de Java
16:55
nenhum desses
16:56
possui auto identação
16:57
então você vai ter um grande problema
16:59
não vicie no visualg
17:01
pois, não é com ele que você vai trabalhar
17:02
você vai trabalhar php, utilizando o phpstorm, da nossa.....
17:05
parceira aí...
17:06
do curso de html5
17:07
você vai utilizar o netbeens da sun(Sun Microsystems)
17:09
pra programar em Java
17:10
é nenhuma dessas ferramentas tem o seu ctrl g
17:13
nenhuma dessas ferramentas, tem auto indentação
17:15
isso porque
17:16
indentação
17:16
é um procedimento que...
17:17
todo programador, deve saber fazer
17:19
então
17:20
durante a prática
17:21
utilize o ctrl + g só, pra você ver se, você indentou corretamente
17:24
mas nunca vicie nela
17:25
faça sua própria indentação
17:27
vamos passar agora.....
17:29
pra última prática que eu idealizei pra essa aula
17:31
que é a prática 3
17:32
que é o cálculo o imc
17:34
o imc
17:35
ou..
17:35
índice de massa corporal
17:37
ou ainda
17:37
índice de massa corporia
17:39
é um calcúlo feito
17:40
pra saber se você tá
17:41
magro
17:42
normal
17:43
ou, um pouquinho gordo
17:44
o imc
17:44
é um dos cálculos mais famosos...
17:46
reconhecidos muldialmente
17:47
pra definir, inclusive
17:48
à obesidade mórbida
17:50
o cálculo do imc
17:51
é feito basicamente baseado em dois parâmetros
17:53
o seu...
17:53
peso!
17:54
A sua massa corporal!
17:55
E a sua altura!
17:57
Pra calcular o imc de uma determinada pessoa
17:59
você vai fazer a seguinte conta
18:01
a massa
18:02
dividida pela
18:02
altura ao quadrado
18:04
esse cálculo
18:04
vai gerar um número
18:06
que é o imc
18:07
uma pessoa pra ser considerada no seu peso ideal
18:09
deve ter o imc
18:10
entre dezoito e meio..
18:12
e vinte e cinco
18:13
é essa
18:14
é a última prática que eu proponho a você
18:16
nós vamos fazer um algoritmo
18:17
pra ler, a massa corporal da pessoa, em kilos
18:20
é altura em metros
18:22
vamos calcular o imc
18:23
é mostrar se a pessoa está dentro da faixa de peso ideal
18:27
então, eu criei um novo algoritmo aqui no visualg
18:29
cálculo imc
18:30
é vamos começar, solicitando
18:32
à massa
18:33
e altura
18:37
botar aqui massa
18:40
massa
18:40
em kilos
18:46
leia m
18:49
vou ler também a altura
18:52
em metros
18:55
leia a
19:00
n
19:01
é a
19:02
são variáveis do tipo real
19:05
já que peso
19:06
pode ter partes fracionaria
19:08
é altura também
19:09
pra calcular
19:10
o imc
19:11
nós vamos ter que fazer..
19:12
à massa
19:13
dividida
19:14
pela altura ao quadrado
19:15
altura ao quadrado
19:16
eu posso fazer
19:17
a vezes a
19:18
ou então, utilizando o operador aritmético
19:21
da exponenciação
19:22
posso fazer assim
19:23
(a) ao quadrado
19:24
o resultado dessa conta vai ser atribuido
19:26
à uma variável que vou definir como imc
19:30
que também tem que ser declarada
19:34
vamos escrever o imc
19:44
vamos executar
19:46
vamos colocar aqui
19:48
estou com 87 quilos
19:51
eu tenho 1 metro e 88
19:55
meu imc foi 24
19:56
ponto 6, 1, 5, 2, 1...
19:58
vamos formatar isso daqui
20:00
colocando por exemplo cinco
20:02
5 casas ao todo
20:05
e duas decimais
20:08
é vamos fazer verificação do imc
20:10
é como eu disse anteriormente
20:12
pra ser considerada o peso ideal
20:13
o imc tem que estar 18,5....
20:15
e 25
20:17
vamos ver como eu escrevo uma coisa entre um valor e outra
20:20
utilizando o visualg
20:21
utilizando a matemática
20:23
a coisa seria representada assim
20:24
18,5
20:26
imc
20:28
25
20:30
só que não é possível escrever dessa maneira
20:32
utilizando algoritmos
20:33
então nós vamos ter que usar também operadores lógicos
20:36
que nós já vimos nas aulas anteriores
20:38
vou verificar aqui
20:40
se
20:41
o imc
20:42
for maior ou igual
20:44
a 18,5
20:46
e
20:47
o imc
20:48
for menor
20:49
do que 25
20:51
eu não posso simplesmente fazer assim o..
20:54
se o imc for maior ou igual 18,5 e menor que 25...
20:57
não! Eu tenho que esplicitar
20:59
imc
20:59
nas duas expressões
21:01
então se o meu imc
21:02
for maior ou igual a 18,5
21:04
e
21:04
ele for menor que 25
21:07
então
21:08
vou colocar o fimse aqui
21:11
colocar pra dentro
21:13
então se ele estiver na faixa
21:14
eu posso escrever
21:17
Parabéns
21:19
Você
21:20
está
21:24
no seu peso
21:25
ideal
21:29
senão
21:31
mais uma vez
21:33
escreva
21:35
você
21:37
não está
21:38
na faixa
21:40
de peso ideal
21:44
então essa
21:46
é a estrutura
21:47
do programa de cálculo de imc
21:49
caso seja necessário
21:50
pause o vídeo agora
21:52
digite a sua própria versão
21:53
é vamos executar
21:55
mais uma vez
21:56
fazer meus dados
21:57
87 quilos
22:00
é 1 metro e 88
22:03
o imc de 24 ponto seis dois
22:05
por conta da formatação
22:06
me deu a mensagem, parabéns você está no peso ideal
22:10
vamos fazer um outro exemplo
22:11
uma pessoa muito magra
22:13
por exemplo, uma pessoa que pesa
22:16
40 quilos...
22:17
e tenha dois metros de altura
22:19
ela está fora da sua faixa
22:21
nota que o imc é muito baixo
22:22
que é dez
22:23
é você não está na faixa de peso ideal
22:26
da mesma maneira, vou fazer uma pessoa muito gorda
22:28
uma pessoa que pesa 140 quilos
22:31
é tem dois metros de altura
22:33
ela tá com o imc 35
22:35
é também não está na faixa de peso ideal
22:38
Fico claro!
22:39
então existe vários sites, várias ferramentas, vários aplicativos pra celular
22:43
pra calcular o imc
22:44
é você acabou de criar um..
22:45
muito importante..
22:47
muito valioso
22:47
utilizando o visualg
22:49
só que agente tem um pequeno problema
22:50
as faixas de imc
22:52
são muitas
22:53
e eu vou mostrar todas elas pra você apartir de agora
22:55
então como eu disse
22:56
o imc ideal está entre 18,5 e 25
22:59
mas existem várias faixas
23:01
divulgadas mundialmente
23:02
caso seu imc seja abaixo de 17
23:04
você está muito abaixo do peso
23:06
entre 17 e 18 e meio está abaixo do peso
23:09
temos a faixa que nós já vimos de peso ideal
23:11
temos a faixa de sobrepeso
23:13
de obesidade
23:14
obesidade severa
23:15
e por fim
23:16
quando você temo imc de 40 ou mais
23:18
obesidade mórbida
23:20
é a você já deve tá se coçando pra me perguntar
23:22
mas Guanabara, como que eu faço isso pra funcionar no meu programa que eu acabei de fazer
23:26
e aí eu te dico
23:26
eu vou te mostrar
23:27
mas só, na semana que vem
23:29
por quê agora
23:29
o nosso tempo já acabou
23:31
mas antes de ir embora
23:32
eu vou deixar dois exercícios pra você praticar
23:34
o contéudo de algoritmo
23:36
que você sempre vai ver a resposta desses algoritmos
23:38
acessando essa aula
23:40
no site cursoemvideo.com
23:41
por quê, é só acessando o site
23:43
é se inscrevendo nesse curso gratuito
23:45
que você vai poder ver
23:46
a resposta
23:47
de todos os exercícios que nós já vimos
23:48
inclusive
23:49
das aulas passadas
23:50
é só você entrar na aula referente a esse vídeo
23:52
que é a aula 7 neste caso
23:54
e ver
23:54
a resolução de todos exercícios propostos
23:57
vamos então
23:58
aos exercícios propostos por min
24:00
pra que você possa fazer
24:01
nessa aula 7
24:03
O primeiro exercício eu batizei de "Está apto a dirigir?"
24:07
Eu vou mostrar esse exercício funcionando e você terá que fazer na sua casa utilizando o Visualg.
24:12
Então o programa que eu proponho é o seguinte:
24:14
Coloquei lá um menuzinho...
24:15
Coloquei um cabeçalho né...
24:17
utilizei
24:18
o escreva pra isso
24:19
botei lá departamento de trânsito
24:21
vamos colocar o ano atual
24:22
2014
24:24
vamos colocar
24:25
o ano de nascimento
24:26
1978
24:28
esse programa
24:29
ele vai fazer o seguinte
24:30
ele vai calcular á idade da pessoa
24:32
e ver se ela está apta....
24:33
a tirar sua carteira de motoriasta
24:35
e pra isso
24:36
você vai considerar à idade de 18 anos
24:38
com 18 ou mais
24:39
uma pessoa já pode
24:40
tirar sua carteira de motorista
24:42
vamos ver um exemplo aqui
24:44
em 1978
24:46
eu vou ter a idade..
24:48
de 36 anos
24:49
isso me torna
24:50
apto a tirar a carteira
24:52
vamos fazer outro exemplo
24:54
vamos colocar mais uma vez o ano atual
24:56
vamos colocar uma pessoa que nasceu 1999
24:59
ela tem a idade de 15 anos
25:01
é está inapta a tirar a carteira
25:03
então esse e o resultado que eu espero
25:05
esse é o exercício que você tem que fazer!
25:07
vamos ao segundo exercício
25:09
o exercício número 2 é
25:11
aluno aprovado ou reprovado
25:13
vamos ver o programa funcionando
25:15
então coloquei lá, escola javali cansado
25:17
que é o nome maluco da minha escola
25:19
vou pedir duas notas do aluno, então ele tirou por exemplo 4,5
25:23
e vai tirar 9
25:25
com 4,5 e 9
25:26
ele vai ter a media 6,8
25:28
e está reprovado
25:29
isso porque eu considerei
25:30
a média 7
25:32
como a média mínima pra aprovação
25:34
vamos ver outra situação
25:35
vamos digitar a primeira nota
25:37
8
25:38
e depois ele tirou 7,5
25:40
com 8 e 7,5
25:41
a média é 7,8
25:43
e dessa vez
25:43
o aluno está aprovado
25:45
Então!
25:46
Ficam aí dois exercícios pra você fazer durante essa semana
25:49
e na próxima semana
25:50
agente vem com mais uma aula
25:51
Inclusive!
25:52
Pra resolver aquele problema do imc que agente viu
25:55
com várias faixas
25:56
eu espero que você tenha gostado dessa aula
25:58
eu espero que você esteja praticando
26:00
Né!
26:00
Pause o vídeo!
26:01
Veja a execução
26:02
tente fazer os exercícios
26:04
é só praticando que você vai aprender
26:06
Pra finalizar..
26:06
como sempre!
26:07
eu quero pedir que você faça duas coisas
26:09
Primeiro..
26:09
Se inscreva no canal, caso você não seja inscrito ainda
26:12
Clique na engrenagem!
26:13
e solicite pra você receber novos e-mails
26:15
sempre que você tiver novas aulas
26:17
e clicando aqui
26:18
você vai ter acesso
26:19
a todas as aulas do curso de algoritmo
26:20
organizadas...
26:21
categorizadas
26:22
e nunca se esqueca
26:23
acessando...
26:24
o site que tá aqui em cima
26:25
o cursoemvideo.com
26:27
você tem acesso à todas as aulas
26:28
pode se inscrever no curso
26:30
e pode ter acesso
26:31
a todas apostilas
26:33
os pacotes pra baixar
26:34
a resolução dos exercícos
26:36
esses exercícios
26:37
eu não resolvo durante as aulas
26:39
os exercícios que eu deixo proposto aqui
26:40
eles estão resolvidos
26:42
no site!
26:43
então você vai ter que entrar lá
26:44
fazer o seu cadastro, se inscrever no curso de algoritmo
26:46
e ter acesso as respostas
26:48
Um grande abraço..
26:49
bons estudos!
26:50
E até a próxima!
26:53
Barulinho
26:53
Puta merda, mataram o Kenny! (South Park)
26:56
filhos da %$#@
26:57
Risos
26:58
tenho problemas
26:59
barulinho
27:13
barulinho
27:14
come que sola isso aqui
27:15
barulinho
27:17
fazer a aula assim
27:19
de mendiguim
27:20
barulinho
27:21
adivinha o que eu to fazendo
27:23
Voz fina: ajeitando o cabelim
27:24
vamos entender dois exemplos práticos
27:26
e você vai compreender facilmente isso
27:29
eu não fiz o slide pra isso
27:31
se vai ter que esperar um pouquinho
27:32
♫ Música de Encerramento ♫
*/
