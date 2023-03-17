// Introdução a Algoritmos - Curso de Algoritmos #01 - Gustavo Guanabara
// https://youtu.be/8mei6uVttho

// Curso de Algoritmo desenvolvido por Gustavo Guanabara, com diversas aulas para ajudar você a se especializar, incluindo testes com certificados para agregar em sua carreira. Todas as aulas com vídeos excelentes, super práticos e dinâmicos.

/*
Curso de Algoritmo
- O que é Algorítmo? Tendência de concituar como algo complexo, complicado, matemático... 
- Algoritmo é Vida, encontramos em sites, buscas, compras on-line, jogos, vídeos, celulares, smartTV, carros, etc. 
- "Algoritmos são conjuntos de passos finitos e organizados que, quando executados, resolvem um determinado problema." (MANZANO) 
- Podemos usar algoritmos até pra calcular a "beleza" de algo, por exemplo, na Proporção Áurea.
-- Phi = 1,6180339885
-- Podemos calcular a razão entre altura/umbigo-chão ou braço/cotovelo-dedo, tamanho do rosto/distância-olhos...
-- Natureza como os girassóis, concha do caramujo Nautilus, estrelas do mar, galhos de árvores... 
-- Arquitetura: Parthenon, Taj Mahal, Nascimento de Vênus de Botticelli, Beethoven na 5ª Sinfonia, etc.
-- Indústria: Apple, Pepsi, NatGeo, BP, Toyota...

- Algoritmo = Reprodução de um Padrão
- Reprodução de Padrões é conhecido como Rotina

- Rotina para Atravessar a Rua (cima-baixo-esquerda-direita)

Algoritmo AtravessarRua
	Olhar pra direita
	Olhar pra esquerda
	Se estiver vindo carro...
		Não atravesse!
	Senão...
		Atravesse
	Fim-Se
Fim-Algoritmo 
*/

/* 
TRANSCRIÇÃO
0:04
♫ Musica de Abertura ♫
0:26
Olá, seja bem vindo a primeira aula do seu curso de Algoritmo
0:29
Sim! Se você conheceu o Canal do Curso em vídeo pelo curso de HTML5
0:33
Acabamos de começar o nosso segundo curso, que é o curso de Algoritmos
0:37
Se você tá chegando agora e descobriu o curso de Algoritmos
0:40
Saiba que existem vários cursos no site www.cursoemvideo.com
0:44
ou no nosso canal do YouTube que é youtube.com/cursosemvideo
0:48
Então fique a vontade para estudar
0:49
O que nós vamos começar agora é um dos cursos mais solicitados pelo canal
0:53
Que é um curso de Algoritmo.
0:55
E nessa primeira aula, eu vou fazer o que poucos professores de algoritmos fazem:
0:59
Explicar realmente pra que é que eles servem.
1:01
Então sem mais delongas, vamos a nossa primeira aula do seu curso de Algoritmos!
1:06
Algoritmo, é o nome que as pessoas leigas quase chegam a compreender logo de cara.
1:11
Isso porque, ela se parece bastante com uma outra palavra que ouvimos desde criança:
1:15
Algarismo.
1:17
Mas que fique bem claro que são duas coisas diferentes, apesar de terem a mesma origem.
1:21
Mas se eu te perguntar agora:
1:23
"O que é Algoritmo?"
1:24
Muitas pessoas iriam responder que é algo difícil
1:27
relacionado a conceitos complexos de cálculos ou coisas do tipo.
1:31
E aí você pode me perguntar:
1:32
"Guanabara, esse conceito das pessoas está correto?"
1:35
E eu respondo com toda certeza: "De jeito nenhum."
1:38
Algoritmos, são conceitos muito simples, utilizados por nós, no nosso dia a dia.
1:42
E eu vou provar isso a você!
1:44
Hoje em dia temos Algoritmos digitais agindo em nossa vida.
1:48
e eu vou dar alguns exemplos disso.
1:50
Você acessa site certo?
1:51
Seja pra fazer uma busca.
1:53
Ler seus e-mails.
1:55
Se relacionar com seus amigos por Redes Sociais.
1:58
Fazer compras online
2:00
e até para reservar uma vaguinha no cinema.
2:02
E eu te garanto, isso tudo só existe por conta dos Algoritmos.
2:07
Até mesmo nesse exato momento em que você está aí assistindo esse vídeo apoiando o queixo com a mão,
2:12
algoritmos estão trabalhando para você.
2:14
E não é só nisso que aplicamos algoritmos.
2:16
Quando você joga desde o game mais simples, passando pelos clássicos
2:20
e chegando aos mais evoluídos, algoritmos estão agindo para te dar diversão.
2:25
E não para por aí, tem mais coisas do seu dia a dia que utiliza Algoritmo:
2:29
Com o seu celular, você pode conversar com as pessoas, compartilhar experiências
2:34
ou até mesmo calcular rotas se você estiver perdido na rua.
2:37
Com o seu aparelho de TV, você pode acessar conteúdos interativos e sob demanda,
2:42
muitas vezes com um simples gesto de mão, sem precisar do controle remoto.
2:46
E adivinha quem controla isso tudo?
2:48
Isso mesmo, algoritmos!
2:50
Existem até carros modernos que são capazes de estacionar sozinho
2:54
e frear sem que você precise pisar nos pedais.
2:57
Tudo controlado por sensores, computadores e os seus algoritmos.
3:01
E eu poderia aqui ficar falando por horas, mas eu acho que você já percebeu a idéia da coisa.
3:05
Mas o conceito de Algoritmos vai muito além dos computadores.
3:08
Vamos ver como é que o Manzano, um dos autores mais famosos sobre o assunto define Algoritmos.
3:13
No seu livro: "Algoritmos, Lógica para Desenvolvimento de Programação de Computadores".
3:17
Manzano define:
3:19
"Algoritmos são conjuntos de passos finitos e organizados que, quando executados,
3:23
resolvem um determinado problema."
3:25
Então é isso. Toda solução parte de um problema.
3:29
A necessidade de criar um ambiente virtual de relacionamento, fez nascer o Facebook.
3:33
A necessidade de substituir o SMS, deu origem ao WhatsApp, e por ai vai.
3:38
Utilizamos Algoritmos até mesmo para calcular a quantidade de beleza de algo.
3:42
Por acaso você já ouviu falar em Proporção Áurea?
3:45
Se você ainda não ouviu, segura sua cabeça porque ela esta preste a explodir.
3:49
O conceito de Proporção Áurea é muito simples,
3:52
e tudo começa com o um número representado pela letra grega "ϕ" (phi - Pronuncia fi):
3:56
Pela convenção, "ϕ" (phi) é igual a 1,618.
3:59
Mas cuidado para não confundir com a outra letra grega, o "π" (pi), que vale 3,14.
4:05
Vamos ver a aplicação de "ϕ" (phi) no mundo real:
4:07
Se pegarmos o corpo de um ser humano considerado perfeitamente simétrico,
4:11
o que é compreendido por muitos como um sinônimo de beleza,
4:14
e calcularmos a razão entre a sua altura e a distância do seu umbigo até o chão,
4:18
o valor encontrado por essa divisão, vai ser o valor de "ϕ" (phi).
4:22
De maneira similar, a medida do ombro até o dedo
4:25
e a distância do cotovelo até o mesmo dedo, também resulta em "ϕ" (phi).
4:29
Se pegarmos a foto de qualquer pessoa considerada bonita e eu chamaria de simétrica,
4:34
a Proporção Áurea estará presente em várias medidas.
4:37
Várias dessas proporções estão representadas na obra "Homem Vitruviano" de Da Vinci
4:43
Na natureza, o "ϕ" (phi) também aparece.
4:45
No girassol, por exemplo, suas sementes se distribuem por proporção áurea.
4:50
O mesmo ocorre para galhos de algumas espécies de árvores e as medidas da estrela do mar.
4:55
Outros animais não ficam de fora: a concha do caramujo Nautilus é algo impressionante.
5:00
E aí depois que o homem descobriu a relação causada pelo "ϕ",
5:04
começou utilizar esse mesmo padrão de forma consciente.
5:08
Na arquitetura, por exemplo, ele é usado em várias construções
5:11
como o Partenon na Grécia, e muitas outras.
5:14
Na obra "Nascimento de Vênus" de Botticelli
5:16
Afrodite está totalmente representada em proporção áurea.
5:20
Beethoven utilizou a razão "ϕ" na sua 5ª (quinta) sinfonia.
5:23
E vários músicos atualmente utilizam essa razão na divisão rítmica e de compassos.
5:28
Hoje a indústria , a propaganda e as artes, aplicam os padrões de Proporção Áurea em seus produtos
5:34
logomarcas e sites. E você acaba gostando inconscientemente disso sem saber na verdade o motivo.
5:41
E aí está, tudo isso é a reprodução de um padrão, ou seja, Algoritmos.
5:46
Toda reprodução de padrões é conhecido como Rotina
5:49
e esse termo também é usado em Algoritmos.
5:52
E podemos aplicar o conceito de Rotina à nossa vida. Vamos ver por exemplo,
5:56
uma rotina do nosso cotidiano: Atravessar a rua.
5:59
Vamos considerar aqui um Algoritmo hipotético para atravessar a rua.
6:03
Os passos são lidos de cima para baixo, e da esquerda para direita.
6:07
na primeira linha temos o Algoritmo que é atravessar a rua
6:10
essa é a nossa Rotina a ser utilizada
6:13
O primeiro passo ao chegar em uma rua movimentada principalmente
6:16
é olhar para direita e em seguida olhar para esquerda
6:18
por fim
6:19
temos uma condição
6:21
Se estiver vindo um carro, não atravesse
6:23
Senão, atravesse
6:25
O que eu fiz nesse caso, foi somente escrever em forma de texto
6:28
a sua Rotina ao atravessar uma rua, não é mesmo?
6:31
e nós podemos ter outras opções para esse mesmo Algoritmo
6:34
vamos ver uma segunda opção
6:36
então nós concordamos, que essa primeira parte
6:38
é realmente um Algoritmo
6:40
em seguida
6:41
vamos a uma outra versão, bem parecida
6:44
porém com algumas diferenças
6:46
note que, o primeiro passo invés de olhar pra direita é olhar para a esquerda
6:51
em seguida olhar para direita
6:53
a minha condição também está um pouco diferente
6:55
Se não estiver vindo carro
6:57
que é diferente da primeira, que é Se estiver vindo carro
7:00
Se não estiver vindo, atravesse, Senão não atravesse
7:03
de maneira similar a Rotina funciona e você vai atravessar a rua. Logo isso é um Algoritmo!
7:11
E ai você pode estar pensando
7:12
a Guanabara,
7:13
então é só eu colocar os mesmos passos em qualquer ordem que eu construo um Algoritmo, certo?
7:17
Errado!
7:18
eu vou mostrar um exemplo para você de Algoritmo
7:20
eu vou mostrar um exemplo para você, onde eu vou pegar os mesmos passos e colocar numa outra ordem
7:25
e que essa ordem não vai formar um Algoritmo
7:28
do lado esquerdo eu vou manter o mesmo Algoritmo
7:31
que nós já combinamos que é uma Rotina
7:33
e agora eu vou substituir, a Rotina da direita
7:36
os mesmo passos dispostos de uma outra maneira
7:40
vamos considerar assim
7:41
será que o Algoritmo de atravessar a rua funcionaria com o primeiro passo atravesse
7:46
em seguida se estiver vindo um carro olhar para a direita
7:49
Senão olhar pra esquerda
7:50
obviamente essa solução não vai resolver o meu problema que é atravessar a rua
7:55
sendo assim, essa terceira opção não é considerado um Algoritmo
7:59
nesse caso o que nos permite não ser atropelados é uma questão de lógica para organizar os passos
8:05
então, como você pode perceber, Algoritmos estão mesmo no nosso dia a dia
8:09
e até mais do que nós podemos imaginar
8:11
alguns outros exemplos de Rotina que nós executamos no dia-a-dia são:
8:14
Fazer uma ligação utilizando o telefone;
8:16
Preparar um bolo;
8:17
Fazer um saque no caixa eletrônico
8:19
e até mesmo, cancelar a nossa TV por assinatura
8:22
e essa última, que é cancelar a TV por assinatura
8:24
eu considero o Algoritmo mais difícil do mundo
8:27
nesse caso eu concordo quando as pessoas dizem que Algoritmo é uma coisa difícil
8:31
cancelar a TV por assinatura, é praticamente impossível
8:34
então, a partir de agora e durante todos os seus estudos nesse curso
8:38
sempre que você estiver com dificuldade para fazer um Algoritmo, lembre-se:
8:42
tem gente tentando cancelar assinaturas, e isso sim é realmente difícil
8:47
garanto que pensando assim tudo vai se tornar mais fácil
8:50
Vamos agora trazer esse conceito para os computadores.
8:53
Um programa de computador
8:54
é desenvolvido para suprir uma necessidade
8:57
ou seja, resolver um problema
8:59
vejamos um exemplo muito simples
9:01
Equações do 2º Grau
9:02
e eu tenho certeza que durante a sua juventude
9:04
quando você aprendeu as Equações do 2º Grau
9:07
você teve que resolver cada uma delas utilizando lápis e papel
9:10
com certeza passou pela sua cabeça a seguinte situação:
9:13
"Poxa, se eu tivesse o computador aqui eu faria ele resolver esse problema para mim."
9:17
E é exatamente assim que os Algoritmos funcionam
9:19
você tem um problema, você conhece o padrão para resolver esses problemas,
9:24
então no lugar de você fazer isso manualmente, você constrói Algoritmos para resolver tudo para você.
9:29
Eu crie aqui um Algoritmo simples para resolver uma Equação do 2º Grau
9:33
vem comigo que eu vou mostrar para você
9:36
Essa aqui é uma das ferramentas que nós vamos utilizar dentro do nosso curso
9:39
não se preocupe agora
9:41
pois nós vamos ver o funcionamento dela mais a frente.
9:44
Esse aqui, foi o Algoritmo que eu criei para resolver Equações do 2º Grau
9:48
e não se assuste com o tamanho do código, vai por mim ele é bem simples de compreender
9:53
e muito fácil de se fazer em Algoritmo
9:54
é porque agora, você ainda não conhece muito bem a ferramenta e não conhece muito bem Algoritmos.
9:59
Mas eu estou garantindo para você, você vai conseguir aprender.
10:02
Vamos executar esse Algoritmo
10:04
e você vai ver que vai aparecer essa tela
10:06
com algumas informações básicas, como por exemplo:
10:08
Equação do 2º Grau
10:09
Informe o valor de A
10:10
se você lembra muito bem
10:11
existem 3 variáveis numa Equação de 2º Grau
10:13
A, B e C
10:15
vamos colocar como primeiro valor, A valendo 2
10:18
B valendo 5
10:21
e C também valendo 2
10:23
apertando ENTER
10:24
ele vai me mostrar a Equação
10:26
que é 2x ao quadrado, mais 5x, mais 2 igual a 0
10:30
vai me calcular o valor de Delta, que seria: B ao quadrado menos 4ac, que vai dar 9
10:35
e para um Delta positivo, temos duas Raízes possíveis, dentro do campo dos Reais
10:39
no nosso caso aqui, ficamos com X' valendo -0,50 e o X" valendo -2
10:46
é claro que você pode resolver isso na mão, utilizando lápis e papel
10:50
mas já que a gente conhece o padrão de funcionamento
10:52
sabemos as fórmulas a Equação de Bhaskara e tudo mais
10:55
nós aplicamos o Algoritmo, para resolver isso para a gente.
10:58
basta eu pressionar os valores, apertar ENTER, e o cálculo será feito automaticamente
11:02
graças ao Algoritmo que eu construí para vocês
11:04
e que mais para frente, nós vamos construir durante nossas aulas
11:08
vamos ver um outro exemplo, executando mais uma vez o programa
11:11
e colocando valores um pouco diferentes
11:13
por exemplo
11:15
1 para o A
11:16
2 para o B
11:17
e 3 para o C
11:19
e para esses valores de A, B e C
11:21
nós teremos Delta negativo
11:22
e se você lembra das suas aulas de Matemática, para Delta negativo
11:25
não existem raízes no campo dos Reais
11:28
somente no dos Imaginários
11:30
nós vamos informar isso aos nossos usuários, utilizando também o nosso Algoritmo
11:34
então para o valores 1, 2 e 3
11:36
nós temos o cálculo
11:37
a Equação é 1x ao quadrado mais 2x mais 3 igual a 0
11:41
o valor de Delta é -8
11:42
e uma mensagem vai me informar
11:44
para Delta negativo, não existem Raízes Reais
11:48
vamos para um 3º e último exemplo, onde o Delta vai dar 0
11:51
um dos exemplos para que o Delta dê 0
11:53
é o A valendo 1
11:55
o B valendo 2
11:56
e o C também valendo 1
11:58
pressionando ENTER, nós temos a Equação
12:00
1x ao quadrado, mais 2x mais 1 igual a 0
12:02
o valor de Delta é igual a 0
12:04
e para os valores de Delta igual a 0, temos duas Raízes Reais iguais
12:08
nesse caso iguais a -1
12:11
e é exatamente por ai que nós vamos começar
12:13
a gente tem que começar a aprender os Algoritmos tentando criar Rotinas
12:16
para resolver pequenos problemas
12:18
como por exemplo
12:19
na próxima aula nós vamos criar uma Rotina para somar 2 números
12:22
e nas aulas seguintes
12:24
vamos dificultando cada vez mais
12:26
até você aprender Algoritmo de uma vez por todas
12:28
com esse curso, você vai ser capaz de desenvolver o seu Raciocínio Lógico
12:32
organizar as instruções, e se preparar para construir a sua primeira aplicação dentro de um computador
12:38
mas isso a gente só vai continuar na próxima Aula
12:40
porque agora o nosso tempo já acabou
12:42
eu gostaria de pedir um imenso favor
12:44
se você gostou dessa aula, mostre para o maior número de pessoas que você conhece.
12:48
faz uma postagem no Facebook, marca o seus amigos, posta no mural deles, compartilhe esse vídeo, curte
12:54
se você está vendo ele no YouTube, use o curtir aqui de baixo, incentive o nosso projeto
12:59
esse curso tem o objetivo de mostrar Programação para jovens que estão prestes a entrar
13:03
no mercado de trabalho e não tem uma profissão
13:05
programar computadores é uma das profissões mais legais que eu conheço
13:09
caso você tenha gostado desse vídeo e quer ser avisado sempre que uma nova aula saiu
13:13
clique aqui sobre esse botão para se inscrever no canal do Curso em Vídeo
13:17
se você já é inscrito
13:18
clique na pequena engrenagem ao lado de Inscrever
13:20
e diz que você quer receber no seus e-mails
13:22
aqui a gente só publica aula e aula boa
13:25
clicando aqui você vai ter acesso ao playlist de todas as aulas desse curso de Algoritmos
13:29
a cada semana é uma aula nova, e na próxima, você já vai ter o pacote para baixar
13:34
e alguns exercícios para praticar
13:36
é um grande prazer começar essa nova empreitada e principalmente com patrocínios de uma das empresas
13:40
que mais acredita nos nossos projetos a HostNet Hospedagem de Sites
13:44
a gente se vê na próxima aula, um grande abraço, bons estudos e não esquece de compartilhar essa idéia.
13:50
[ Momentos extra da gravação ]
13:52
Ah curso novo hein!
13:55
Ajeitando meu cabelinho... (Voz fina)
13:57
risos
13:59
Vamos lá!
14:00
Olá, tudo de novo né!
14:02
Olá! Alô, A, a, a, a...
14:06
Alô! Alô!
*/
