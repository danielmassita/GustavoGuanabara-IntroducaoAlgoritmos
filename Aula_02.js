// Primeiro Algoritmo - Curso de Algoritmos #02 - Gustavo Guanabara
// https://youtu.be/M2Af7gkbbro

/*
ASDF
*/

/*
TRANSCRIÇÃO
0:04
♫ Musica de Abertura ♫
0:21
Olá! Seja bem-vindo à sua segunda aula do seu curso de algoritmo. O meu nome é Gustavo Guanabara, eu sou seu professor.
0:26
E agora a gente vai dar continuidade ao nosso estudo de algoritmo na aula passada a gente viu alguns problemas de lógica
0:32
a gente entendeu pra que que serve um algoritmo, qual é a função de um algoritmo pra nossa vida
0:37
e agora nós vamos dar foco em algoritmos computacionais. Que é exatamente o que a gente vai estudar nesse curso de Lógica de Programação ou de Algoritmos.
0:47
Então como eu acabei de falar o nosso assunto, o nosso foco principal vão ser algoritmos computacionais
0:53
e ai você vai me perguntar, poxa Guanabara qual é a diferença entre algoritmo e algoritmo computacional ? Bem, quando eu digo algoritmo é todo tipo de rotina que você executa e pode ser no seu dia a dia
1:02
como eu falei ir ao trabalho, ir pra escola, escovar o dente, tomar banho, almoçar.
1:08
tudo aquilo que você faz e que é rotina podem ser consideradas algoritmos. Algoritmos computacionais, o conceito é o mesmo só que o foco de execução é um pouco diferente
1:17
vamos a um conceito que eu mesmo criei e você vai entender muito fácil a definição que eu criei de algoritmos computacionais é bem simples.
1:25
"Algoritmos são passos a serem seguidos por um módulo processador e seus respectivos usuários que, quando executados na ordem correta, conseguem realizar determinada tarefa."
1:35
E nós temos aqui destacados quatro termos: Módulo processador é tudo aquilo que pode efetuar processamentos.
1:42
E quando eu digo tudo que pode efetuar processamento, eu digo tudo mesmo pode ser um computador portátil,
1:47
pode ser um computador grande como esse que está gravando as aulas, pode ser esse menorzinho, pode ser um Tablet,
1:52
pode ser um smartphone, pode ser inclusive a câmera que está me gravando nesse momento, se ela executar um software.
1:57
Módulo processador hoje em dia é tudo aquilo que pode ser programável.
2:02
O segundo termo que está destacado ai em verde é "usuários". Usuário é você mesmo, você que está utilizando
2:08
você quando desenvolver os seus algoritmos vai querer que outras pessoas utilizem esse programa essas outras pessoas serão os usuários.
2:15
Os últimos dois termos são "realizar" determinada "tarefa". E como realizar uma tarefa entenda como resolver um problema,
2:22
alguma necessidade que seu usuário esteja tendo e que precise do módulo processador pra resolver esse problema
2:27
Deu pra entender ? Então entenda o seguinte: Algoritmos computacionais são rotinas executas por algum processador,
2:34
ou algum conjunto, ou algum computador, ou algum Smartphone, ou o que quer que seja e é isso que vamos aprender durante esse curso, como criar algoritmos computacionais.
2:43
Quando eu falo de Algoritmos computacionais, eu tô falando de tudo. Inicialmente você pode pensar naqueles antigos sistemas de gestão,
2:50
aqueles programas que gerenciavam locadora, farmácia, supermercado, controle de gestão de estoque.
2:56
Isso tudo são Algoritmos, sim. Ainda são desenvolvidos são muito importantes pro mercado de TI, pro mercado de Tecnologia como um todo,
3:02
mas existem outros tipos de Algoritmos que você tem no seu dia-a-dia, como por exemplo, quando você acessa o Home Bank.
3:08
Acessar a sua conta bancária, ver saldos, fazer transferências hoje em dia, são todos controlados por Algoritmos. E isso acontece até mesmo quando você acessa
3:17
de caixas eletrônicos, ou até mesmo quando você entra numa fila e vai o caixa real,
3:22
pra que ele possa fazer uma transferência ou um depósito. Todo procedimento que esse funcionário vai fazer, é através de sistemas computacionais, então, através de Algoritmos.
3:32
Também outra forma, quando você acessa redes sociais, acessar seu Facebook, Twitter, Instagram, Pinterest, o que quer que seja,
3:39
tudo isso são algoritmos computacionais que estão rodando em servidores de alta performance.
3:45
Quando você assiste vídeo. Você tá nesse momento assistindo esse vídeo, assistir vídeos, são Algoritmos
3:50
os Algoritmos de compressão, os Algoritmos de exibição, todos eles são muito importantes hoje em dia
3:56
E até mesmo quando você joga, você pode jogar no seu computador, ou até mesmo jogar em portáteis,
4:01
utilizar programas em portáteis, tudo isso que você está fazendo, é utilizando Algoritmos computacionais.
4:08
E aí você pode me perguntar: "Mais, Guanabara, como é que esses Algoritmos computacionais são criados? Como é que eu começo? Qual é o primeiro passo que eu tenho que dar
4:15
pra criar esses Algoritmos computacionais?" E eu vou te responder: Todo Algoritmo computacional, começa com a criação da Lógica de Programação.
4:22
A Lógica de Programação, está na sua cabeça. Você que ainda nunca programou Com certeza vai aprender a programar desenvolvendo raciocínio logico, através da logica de programação.
4:34
Nas primeiras aulas é o que nós mais vamos exercitar Como construir uma boa logica.
4:39
Após construir a sua logica Você vai partir pra escrever essa logica, em uma linguagem de programação qualquer.
4:45
No meu caso aqui, dei o exemplo do java. Mas pode ser PHP, pode ser Visual Basic, pode ser C# qualquer linguagem de programação.
4:52
Essa linguagem de programação Vai ser utilizada, pra criar um sistema completo! Que é o aplicativo, ou o software que o seu usuário vai utilizar.
5:01
Então, todo sistema nasce assim. Ele nasce na cabeça de um analista de sistema e de um programador.
5:06
De uma equipe de desenvolvimento. Essa logica de programação Parte da cabeça deles, e é estruturada em uma linguagem de programação.
5:12
Que vai ser utilizada pra criar um sistema completo. Pra estruturar a logica de programação a gente tem algumas ferramentas já antigas no mercado, e que são utilizadas até hoje.
5:21
Vamos entender cada uma delas. Para representar a lógica de programação nós podemos utilizar varias ferramentas
5:26
As mais famosas entre elas são: o Fluxograma que representa a lógica através de um fluxo de informações
5:33
seguindo de um ponto a outro, se você olhar no canto direito da tela, inclusive a logomarca que nos criamos
5:40
para o Curso em Vídeo de Algoritmos, é uma parte de um fluxograma Existe um outro diagrama que é muito famoso, que é o diagrama de Nassi Shneiderman
5:46
também conhecido como diagrama de Chapin onde você vai representar a lógica do seu programa através de blocos
5:52
Porém, esses dois métodos que estão aparecendo na sua tela são bem antigos E quase não são mais utilizados, nem em sala de aula.
6:00
O que nós utilizamos hoje em dia é o Pseudocódigo, ou Portugol Pseudocódigo é a lógica do seu programa escrita na sua linguagem nativa
6:08
Que no nosso caso, por ser o Português, ficou batizado como Portugol Então, assim, mesmo existindo várias técnicas de desenvolvimento como
6:16
Fluxograma e Chapin Nós vamos focar no nosso curso o desenvolvimento através do Portugol.
6:22
E por favor não confunda Portugol não é uma linguagem de programação Portugol é uma maneira de representar a sua lógica de programação
6:30
Antes de passar para uma linguagem de programação Então basicamente a gente vai aprender neste curso: A escrever em Portugol e tendo isso em Portugol
6:38
você vai poder converter essa sua lógica Para qualquer linguagem de programação que você aprenda. No nosso caso aqui a gente vai ter curso de PHP, curso de Java
6:45
mais pra frente, no projeto do curso em vídeo, mas o mais importante para você poder aprender PHP
6:51
Tem muita gente que pede no canal: "Eu quero um curso de JAVA...Eu quero um curso de PHP..." Não adianta nada eu criar um curso de Java e de PHP
6:57
se você não sabe algoritmo. Então, a construção de lógica de programação A construção de um bom pseudocódigo
7:03
A construção de códigos em Portugol É muito importante para um profissional de TI Então, esse é um primeiro passo que você tem que ter
7:10
Antes de começar a desenvolver qualquer coisa na sua vida E se você é um programador antigo, que aprendeu a programar a muito tempo atrás como eu aprendi
7:17
Provavelmente você aprendeu em Portugol e Fluxograma E fez isso em papel O professor mostrava o Portugol no quadro
7:23
E você nem via ele funcionando. Você tinha que acreditar no que o professor dizia. Você tinha que acreditar que aquilo iria funcionar.
7:30
Hoje, a gente tem várias ferramentas que auxiliam no aprendizado de lógica de programação e de algoritmos.
7:35
Eu vou apresentar para vocês agora Qual a ferramenta que nós vamos utilizar. O aplicativo que nós vamos utilizar
7:41
é o Visualg Visualg é uma compressão entre dois termos: Visualizador de algoritmo
7:48
O Visualg é uma ferramenta sensacional muito bem estruturada e muito importante para o aprendizado de tecnologia
7:56
ele foi criado por um professor chamado Claudio Morgado e vários outros professores pelo Brasil apoiaram o projeto
8:02
Eu sou um dos professores que apoiam o projeto desde o início Gosto muito, queria parabenizar pessoalmente aqui o professor Claudio Morgado
8:09
Ele é dono de uma empresa chamada "Apoio Informática" E ele criou essa ferramenta no intuito de auxiliar os seus alunos a aprender algoritmo
8:16
Então, ele utilizou isso com os alunos dele, eu utilizo com os meus alunos E agora, eu que sou o seu professor
8:22
estou utilizando com você, para você aprender algoritmo. O Visualg é totalmente gratuito Ele foi registrado como domínio público
8:28
e você pode baixar no site: www.cursoemvideo.com acessando a área do curso de Algoritmos Você vai poder baixar o seu pacote
8:34
Nesse pacote você vai ter: Alguns exercícios. Você vai ter o Visualg para baixar Você vai ter as apostilas que nós vamos utilizar durante o percursso desse curso.
8:43
Então, o aprendizado de algoritmo precisa muito do seu esforço. Precisa muito da sua prática.
8:48
Então a primeira coisa que você tem que fazer é baixar o pacote, www.cursoemvideo.com
8:54
acessa lá o cursos de algoritimos, na área de cursos e você vai ter acesso ao pacote basta que você digite o seu e-mail lá, pra que você seja cadastrado no nosso sistema
9:03
e da próxima vez que você acessar o site, esse download vai estar totalmente liberado pra você. Então o que eu vou fazer agora é abrir o VisuAlg no meu computador
9:10
e mostrar pra você como funciona a ferramenta. Então essa é a cara do VisuAlg.
9:16
Quando você entrar nele, ele pode aparecer com um código ou pode aparecer até vazio Aparecendo vazio, basta que você digite uma exclamação (!)
9:23
e pressione "ctrl + espaço" Essa é a estrutura básica de um algoritimo, segundo a visão do VisuAlg
9:30
Aqui ele vai criar um Algoritimo sem nome eu vou chamar ele de primeiro não se esqueça de manter as aspas ("")
9:38
e nós temos duas áreas bem definidas aqui Área de variáveis (var) e o corpo do algoritimo. que começa em "inicio" e termina com "fimalgoritimo"
9:46
Essa tela onde eu digitei o meu código é o que agente chama de tela de código Aqui em baixo nós temos a representação da memória do computador
9:55
suas variáveis e o escopo. Não se preocupe com esses termos pois daqui a pouco já vou explicar pra você o que é uma variável, o que que é memória do computador.
10:03
No canto direito nós temos a tela de terminal que vai mostrar todas as saídas de dados. Na parte de cima
10:09
nós temos um menu de opção com várias opções em menu e logo em baixo uma barra de ferramenta
10:15
com os botões de opções mais utilizadas no menu de cima. Então você vê que a interface do VisuAlg é muito simples
10:22
ela é composta por algumas áreas bem simples a área de código a área de memória em baixo o terminal e a barra superior
10:27
é apena isso que o VisuALg é, mas ela é uma ferramenta importantíssima para que você possa aprender a criar algoritimos em Portugol
10:35
E nós vamos começar criando nosso primeiro programa e se você foi meu aluno do curso de HTML5
10:40
sabe da maldição do "Olá Mundo", mas se você chegou aqui somente no curso de algoritimo eu vou contar pra você.
10:45
Conta uma lenda que quando você vai aprender alguma coisa na área de tecnologia principalmente em linguagem de programação
10:51
a primeira coisa que você tem que fazer é criar um programa para escrever "Olá Mundo" na tela.
10:56
Segundo essa maldição, se você não fizer isso você nunca vai aprender uma certa tecnologia então
11:02
se o algoritimo é tão importante pra você saber fazer programas em PHP, em Java ou o que quer que seja, se você não fizer o "Olá Mundo agora
11:09
pode ser que você não aprenda nada disso eu não sei se isso é verdade, mas você vai arriscar ? Então a nossa missão agora é escrever na tela
11:16
"Olá Mundo" e pra isso você vai precisar conhecer os comando de sáida do VisuAlg
11:22
Primeiro comando de saída que você vai aprender é o "Escreva" O comando "Escreva" é alto explicativo, ele escreve alguma coisa
11:29
Então se eu quiser escrever qualquer coisa na tela basta eu colocar Escreva("Qualquer coisa")
11:36
O uso das aspas ("") dentro dos algoritimos é muito importante tudo que estiver entre aspas ("") é considerado uma mensagem, é considerado uma cadeia de caracteres.
11:44
Então no nosso caso como a gente quer escrever "Olá Mundo" temos que utilizar o comando "Escreva" com entre parenteses e entre aspas Olá Mundo ("Olá Mundo")
11:52
Vamos ver se isso funciona. Então estamos de volta aqui e vamos entre o inicio e o fim do algoritimo colocar o comando "Escreva"
12:00
Entre parenteses e entre aspas ("Olá Mundo")
12:06
No meu caso aqui eu não estou utilizando acentuações no "olá", por causa de problemas de compatibilidade entre terminal, teclado e tudo mais.
12:14
Mas você pode usar acentuação aqui Ela só não pode aparecer muito bem na sua tela
12:19
Então esse é o nosso primeiro comando " Escreva("Ola, Mundo!") " Teoricamente, ele deverá escrever na tela "Ola, Mundo!"
12:25
Para executar os seu programa, existem três formas Basta que você clique aqui em cima no menu "Algoritmo", "Executar"
12:32
De maneira mais rápida, você pode apertar a tecla "F9" do seu teclado E a terceira maneira é clicar sobre esse botão aqui, que é o botão "Executar"
12:41
No meu caso aqui, eu vou escolher a terceira opção e clicar no botão Uma tela preta irá aparecer E ele escreveu na tela "Ola, Mundo!"
12:48
E me informou "Fim da execução." E por fim "Feche esta janela para retornar ao Visualg."
12:53
Você pode fechar essa janela clicando no "X" ou apertando a tecla "ESC" do seu teclado
12:58
Depois da execução do programa, você vê aqui na tela de terminal que você teve o inicio da execução
13:03
Ele escreveu "Ola, Mundo" na tela, e o fim da execução E pronto, agora você já está livre da maldição
13:10
Uma das coisas que meus alunos as vezes falam para mim é: "Mais Guanabara isso é muito feio!" Realmente é feio, mais olha só, você está nos primeiros passos para poder aprender a fazer coisas bonitas
13:20
E não se engane, fazer coisas bonitas dentro da área de T.I. não é nada muito fácil não ! Você tem que ter um conhecimento e Design,
13:26
Você tem que ter um conhecimento de ferramentas que criem imagens bonitas Para poder criar coisas bonitas
13:32
Você não vai querer que seus primeiros passos sejam maravilhosos Quando você é criança, seus primeiros passos são todos cambaleantes, você cai no chão, você chora,
13:40
Você se machuca, você não é uma criança que levanta e sai correndo Então quando você vai aprender a fazer algoritmo, você não vai aprender a fazer algoritmos bonitos
13:47
Nós vamos começar criando coisas realmente feias, mas práticas E nós vamos aos poucos evoluindo nessa coisa de criar um aplicativo
13:56
Então, não foque agora no momento em criar aplicativos bonitos, em criar experiências bonitas, em criar experiências maravilhosas.
14:02
Você está aprendendo! E eu vou comemorar esse seu aprendizado com mais uma mensagem, que é o "me livrei da maldição".
14:08
Vamos voltar ao VisuAlg: Então se eu quiser escrever uma outra mensagem, basta que eu, aqui em baixo,
14:14
utilize, novamente "Escreva" "('Me livrei da maldição')".
14:22
Vamos executar novamente: E você vai ver que as duas mensagens apareceram uma ao lado da outra: "Olá, Mundo!"
14:29
E "Me livrei da maldição!" uma ao lado da outra. E aí você pode me perguntar: "Oh! Mas espera aí. Eu botei dois 'Escreva',
14:36
é pra escrever um em cada linha, certo?" Não. Não é bem assim. O comando Escreva faz com que as mensagens sejam escritas uma ao lado da outra.
14:44
Existe um segundo comando que, além de escrever mensagem, pula pra linha de baixo. Vamos ver qual é ele:
14:50
Então nós aprendemos anteriormente que existe o comando Escreva e nós podemos colocar qualquer coisa entre parênteses e entre aspas.
14:56
O outro comando de saída que eu vou mostrar pra você é o Escreval muita gente chama de "Escreval" mas eu, aqui vou procurar chamar sempre de "Escreva L".
15:04
"Escreval" é o seguinte: esse "L" significa linha Então ele é: "Escreva e salte a Linha"
15:11
A sintaxe dele é exatamente a mesma: você coloca entre parênteses e entre aspas, qualquer coisa
15:16
Então no meu caso aqui, se eu substituir o Escreva, por um Escreval, ele vai escrever e pular de linha. Vamos ver se isso funciona.
15:24
Então vamos substituir aqui ó: Em vez de escrever "Olá, Mundo!", eu vou botar pra ele escrever e pular pra linha de baixo.
15:31
Então ele vai escrever, pular pra linha de baixo e escrever "Olá, Mundo!" Logo em seguida ele vai escrever "Me livrei da maldição!"
15:39
Executando o seu código, você vai ver: "Olá, Mundo!",
15:44
saltou pra linha de baixo e escreveu "Me livrei da maldição!" Viu como é que é simples? Então nós temos dois comandos pra escrever coisas na tela:
15:52
o Escreva e o Escreval. Se você for atento, ou se você for como eu, que tem TOC, você vai ver que tem uma área do seu algoritmo que ainda não escrevemos nada,
16:00
que é uma área chamada Var e pra isso, a gente tem que aprender o que são variáveis. Olhando aqui no meu código eu tenho, entre inicio e fimalgoritmo,
16:07
eu tenho os comandos, e esses comandos só podem ser escritos nessa área. Mas a área Var tá vazia. Vamos ver agora o que são variáveis.
16:15
Todo professor de tecnologia explica variável da mesma maneira, e eu não vou ser diferente diferente disso porque é uma ótima explicação.
16:23
Variáveis, são espaços. Assim como essa imagem que está aparecendo aí, é um armário cheio de buracos.
16:29
Esse "armário" é a representação básica da memória do computador. A memória do computador é assim: é como se fosse um local cheio de espaços vazios.
16:37
Esses espaços podem ser preenchidos por valores. Então vamos imaginar a seguinte situação:
16:43
nós temos esse armário cheio de espaço vazio, e em alguns locais desse armário eu coloque etiquetas, pequenas etiquetas.
16:50
Vamos colocar uma, por exemplo: nessa primeira área, nós vamos colocar uma etiqueta informando o seguinte: "aqui nós vamos colocar apenas uma bola",
16:59
que é um tipo de brinquedo. Podemos também, em uma outra área, criar uma outra etiqueta
17:05
como, por exemplo, essa lá de baixo nós vamos colocar: "Aqui só se pode colocar sapato",
17:10
que é um tipo de calçado. Então, se eu tiver uma bola e quiser guardar nesse armário, eu vou colocá-la num lugar específico, que é pra bola, que é um tipo de brinquedo.
17:20
De forma similar, se eu tiver um par de sapatos, eu vou colocar na área de sapato, que é um calçado.
17:26
Se você perceber, eu coloquei a bola no canto superior esquerdo, se eu tiver, por acaso, uma outra bola e quiser colocar no mesmo espaço,
17:35
só olhando, você percebe que não vai caber outra bola aí, e com variáveis é exatamente isso:
17:40
quando eu coloco um valor numa variável simples, eu não consigo colocar outro valor então, no meu caso aqui, se eu quiser colocar essa bola colorida no lugar dessa bola de futebol clássica,
17:50
eu vou ter que tirar a bola de futebol que já está lá, e colocar a outra bola.
17:55
Com variáveis é a mesma coisa: se você já tiver uma variável com um valor, pra colocar outro valor, você tem que tirar o primeiro.
18:02
E assim nós vamos criando nosso armário, colocando etiquetas específicas como, por exemplo: uma etiqueta de chinelo, que é um tipo de calçado
18:09
e uma etiqueta de boneca, que é um tipo de brinquedo. Se você perceber bem, essas nossas etiquetas seguem um mesmo padrão.
18:17
Ela tem, primeiro: o nome do objeto que vai ser guardado, em seguida, o tipo ao qual esse objeto pertence.
18:23
Então nós temos basicamente dois tipos nessa imagem que você está vendo: o tipo brinquedo e o tipo calçado.
18:28
Eu tenho um sapato, que é calçado, e um chinelo, que é calçado. Eu tenho uma boneca, que é brinquedo, e uma bola, que é brinquedo.
18:34
Naquela área de variáveis que nós vimos anteriormente, nós temos sempre que colocar o identificador, dois pontos e o tipo.
18:42
Então você olha no canto direito e você tem: bola, que é o identificador e brinquedo que é o tipo.
18:47
Vamos entender melhor pra quê que serve o identificador. Como o próprio nome diz, identificadores identificam determinadas variáveis.
18:56
Existem seis regras pra nomeação de identificadores dentro do VisuAlg, e você tem que conhecer todas elas.
19:02
Na hora de dar um nome à uma coisa, por exemplo: bola. Bola é um identificador, inclusive, um identificador válido dentro das seis regras.
19:09
Vamos conhecer cada uma delas: A primeira regra é: o identificador deve começar com uma letra.
19:15
Sempre começando com uma letra A segunda regra é: os próximos caracteres podem ser letras ou números.
19:22
então, no nome do identificador, primeiro vem a letra, logo em seguida, pode vir mais letras ou até mesmo números.
19:29
A terceira regra é: num identificador, não se pode usar nenhum símbolo, exceto o símbolo de underline ou sublinhado.
19:37
Então você não pode usar cifrão '$', arroba '@', cerquilha '#', porcentagem '%', asterisco '*',
19:42
parênteses '( )', vírgula ',' , nada pode ser utilizado de símbolo dentro do nome de um identificador
19:47
somente o símbolo de undeline '_' , que é utilizado pra substituir o espaço em branco E por falar em espaço em branco, a quarta regra diz exatamente isso:
19:56
identificadores não podem conter espaços em branco. A quinta regra é que um identificador não pode ter letras com acentos.
20:04
Então, por exemplo, acento agudo (´), acento circunflexo (^), til (~), o C cedilha (ç), nenhum identificador pode ter caracteres acentuados.
20:12
E a ultima regra é: não pode ser uma palavra reservada. E aí você pode me perguntar: "Mas, Guanabara, o que seria uma palavra reservada?"
20:21
Eu vou abrir de novo o VisuAlg e vou mostrar pra você o que é uma palavra reservada. No VisuAlg, as palavras reservadas aparecem normalmente sublinhadas ou num tom de azul.
20:30
Então, no meu caso aqui ó, "algoritmo" é uma palavra reservada, "var" é uma palavra reservada, "inicio" é uma palavra reservada, "Escreval" é uma palavra reservada
20:38
e "fimalgoritmo" também é uma palavra reservada. Você não pode utilizar nenhuma dessas palavras, ou várias outras palavras que nós vamos ver
20:47
como nomes de identificadores. Então, sabendo dessas seis regras, eu vou mostrar alguns exemplos de identificadores,
20:53
e a gente vai entrar num acordo aqui se eles são válidos ou não. O primeiro identificador que nós vamos ver é o "Nota1",
20:59
"Nota1" segue as seis regras: começa com uma letra, as outras podem ser letras e números,
21:05
não utiliza nenhum símbolo, não contém espaços em branco, não tem nenhuma letra acentuada e não é uma palavra reservada.
21:12
Logo, "Nota1" é um identificador válido. O identificador "Média", num primeiro momento,
21:18
parece um identificador válido: ele começa com letras, tem letras e números, não tem espaços, não tem nenhum símbolo,
21:24
mas ele fere a quinta regra, que é: "Não pode conter letras com acentos" No caso, "Média" tem a letra E acentuada.
21:32
Então esse nome não serve pra um identificador de variável. O próximo exemplo é "Salário Bruto".
21:38
E, nesse caso, você vai ver, logo de cara, que duas regras são feridas: Primeiro, a palavra "Salário" que tem acento, fere a quinta regra,
21:46
e entre "Salário" e "Bruto" você tem um espaço, isso fere a quarta regra. No nosso caso aqui, "Salário Bruto" é um identificador inválido.
21:53
E nós resolveríamos isso retirando o acento da letra A de "Salário", E, no lugar de espaço, ou eliminá-lo ou utilizar o símbolo de sublinhado.
22:02
O quarto exemplo de identificador é "9dade", Sacou a pegadinha?
22:08
"9dade", além de um nome péssimo, é um identificador inválido, isso porque ele fere a primeira regra de nomeação de identificadores, que é: "Deve começar com uma letra".
22:18
Sendo assim, "9dade" é um identificador inválido. O quinto exemplo é "Algoritmo":
22:24
"Algoritmo" começa com uma letra, tem várias outras letras depois, não contém espaço, não contém símbolos, não contém acentos, mas ela não pode ser um identificador
22:34
Isso porque, "Algoritmo", como nós já vimos, é uma palavra reservada. O último exemplo é "Inicio_Algoritmo",
22:42
e aí tem mais uma pegadinha: A palavra "Inicio" é uma palavra reservada, a palavra "Algoritmo" é uma palavra reservada,
22:48
mas a junção de "Inicio" com "Algoritmo" não se configura como uma palavra reservada. Sendo assim, começa com uma letra, não contém acentos, não contém símbolos,
22:58
tem um underline ali, mas ele representa o espaço em branco, e isso tudo tá dentro das regras.
23:03
Sendo assim, esse sexto e ultimo exemplo seria um nome de identificador válido para uma variável.
23:09
Então anote essas seis regras pois elas serão muito importantes mais pra frente. Em seguida nós vamos ver os tipos primitivos.
23:17
Então, como nós vimos anteriomente Nós temos na declaração de variaveis colocar o nome do indentificar
23:22
nós já vimos as 6 regras para isso, é o tipo primitivo. Tipos primitivos construidos em VisuAlg, que é o portugol, existem 4 tipos.
23:31
Inteiro, Real, Caracter e Logico. Vamos intender cada um deles. O tipo Inteiro, vai permitir que a sua variavel guarde apenas numeros inteiros.
23:40
Se você lembra bem das suas aulas de matemática, deve saber que alguns exemplos de numero inteiro são: 1, 3, -5, 198, 0
23:49
Numeros inteiros são aqueles numeros que não são fracionarios. Que não tem a parte fracionaria, seja ele positivo, negativo ou nulo.
23:57
Os numeros que possuem parte fracionaria, são numeros Reais. Como por exemplo, 'meio', '5', '9,8', '-77,3' e o nosso famoso PI, que é o '3,1415' alguma coisa.
24:09
Importante dizer aqui, que no caso do 'Portugol' O '0.5' (zero virgula cinco), ele não é representando com virgula, ele é representando com ponto.
24:17
E isso se segue em todas as linguagens de programação que a gente vai desenvolver. É importante dizer aqui, que por exemplo: '5.0' (cinco ponto zero) é um numero real
24:25
mais também é um numero inteiro é o numero '5' (cinco). Na matemática você saber, que os numeros interios, estão contidos no grupo dos numeros reais.
24:33
Então se você for precisar de um numero inteiro declare a variavel como inteira Se for precisar da parte fracionaria, declare como real.
24:40
O treceiro tipo, é o tipo Caractere. Caractere é tudo aquilo que é colocado entre aspas
24:46
Por exemplo, a mensagem "Olá Mundo" que vimos anteriomente, é um sequencia de caracteres.
24:52
Outros três exemplos são "Gustavo" "Algoritmo" e "123" E você pode me perguntar, poxa Guanabara 123 é cento e vinte e três ele é um numero inteiro.
25:01
Não! Se ele estiver entre aspas, 1 2 3 é uma sequência de caracteres "1 2 3"
25:07
É importante dizer aqui que a sequência de caracteres, pode conter sim acentos.
25:12
Dentro das aspas você pode usar símbolos, acentos. E isso não segue as seis regras de nomeação de identificadores.
25:19
Por fim, nós temos o tipo lógico, que guarda apenas dois valores, VERDADEIRO E FALSO.
25:24
Então esses são os tipos primitivos que você guarda dentro do VisuAlg. Os dois tipos numéricos que são INTEIRO e REAL, o tipo CARACTERES que é de cadeias e números
25:33
E o tipo LÓGICO, que guarda apenas verdadeiro e falso Vamos voltar agora ao VisuAlg e vamos ver como a gente pode construir esse mesmo exemplo
25:41
De uma outra maneira, utilizando variáveis Sendo assim, numa tela anterior, nós vimos a área de declaração de variáveis
25:48
E ela é feita através de um IDENTIFICADOR, seguido de DOIS PONTOS, seguido do TIPO Agora você já sabe as regras para a nomeação de identificadores
25:55
E já sabe os QUATRO tipos que você pode utilizar Então vamos criar um exemplo aqui! Nós podemos colocar na área VAR uma variável chamada MSG
26:04
Que é do tipo caractere MSG é o nome de um identificador totalmente válido Começa com uma letra, é seguidas de outras não tem espaços, não tem acentos, não é uma palavra reservada
26:13
Não tem nada que torne ela não utilizável Vamos colocar essa linha lá no nosso VisuAlg
26:19
- Abra o VisuAlg - Então nós vamos colocar aqui no VAR A variável MSG Que é de mensagem, DOIS PONTOS, CARACTERE
26:28
Note aqui "ó" (mousse apontando) que assim que eu coloco CARACTERE ele já sublinha pra mim Na hora que você faz essa declaração, que você cria essa linha
26:36
Uma coisa acontece na memória do seu computador. Vamos ver o que que é Como nós vimos anteriormente, a nossa memória do computador
26:43
É como se fosse esse armário cheio de caninhos vazios Quando coloco lá meu "VAR, MSG : caractere"
26:51
O que vai acontecer, é que o sistema, vai colocar na memória do seu computador
26:56
Uma espécie de etiqueta, e vai dizer que esse espaço Se chama MSG para guardar mensagens que são do tipo caractere
27:04
A linha de raciocínio é a mesma que quando eu utilizei bola do tipo brinquedo Agora eu tenho uma mensagem que é uma cadeia de caracteres entre aspas
27:12
E aí, nós podemos, por exemplo, pegar um pedaço de papel Escrever uma mensagem, "OLÁ, MUNDO!",
27:17
E como "Olá, Mundo!", é uma mensagem que está entre aspas, nós podemos colocar esse tipo de mensagem Diretamente na nossa variável
27:24
E para isso a gente vai ter que aprender o conceito de atribuição No nosso caso aqui, nós temos a variável MSG, do tipo caractere declarada
27:33
Para fazer uma atribuição nós digitaremos exatamente essa linha, MSG recebe "Olá, Mundo!"
27:40
O simbolo de atribuição é exatamente esse simbolo de MENOR (<) seguido do sinal de MENOS (-)
27:45
A representação do simbolo de atribuição é como se ele tivesse uma seta então Se você olhar do lado direito está escrito "Olá, Mundo!"
27:52
e do lado esquerdo da seta esta escrito MSG. Eu vou ler o seguinte: A variável MSG vai receber a mensagem "Olá, Mundo!".
28:01
É como se eu tivesse deste lado a variável MSG e desse lado a mensagem "Olá, Mundo!"
28:07
Eu vou atribuir essa mensagem a variável, é como se eu pegasse essa mensagem e jogasse dentro da variável MSG, isso é feita a atribuição.
28:17
E como nós não podemos digitar uma seta na tela, nós utilizaremos os caracteres: sinal de MENOR(<), sinal de MENOS(-) sem espaço entre eles.
28:25
Vamos ver como isso funciona Então nós vamos logo após o incio colocar a variável MSG recebendo "Olá, Mundo!"
28:40
Agora, já que eu tenho a frase "Olá, Mundo!" dentro da variável MSG, eu não preciso mais desse ESCREVA "Olá, Mundo!"
28:47
eu posso colocar: ESCREVA MSG vou tirar este segundo ESCREVA aqui
28:52
E é assim que as pessoas normalmente pensam que a coisa vai funcionar só que na verdade a gente vai ter um pequeno probleminha
28:59
e eu já vou explicar o que que vai acontecer! Vamos primeiro executar o programa do jeito que esta ai, executando este programa:
29:06
o que vai ser exebido é MSG E ai você vai ficar na duvida, Poxa mais eu mandei ele escrever MSG!
29:14
E esse foi exatamente o seu erro, porque "MSG" entre aspas é uma cadeia de caracteres
29:20
então se você der o comando ESCREVA ou ESCREVAL "MSG", ele vai escrever na tela "MSG"
29:26
Para resolver esse problema, nós vamos ter que tirar as aspa daqui e colocar ESCREVA (MSG)
29:32
vamos executar o comando e agora nós temos a mensagem Olá, Mundo! na tela
29:39
Eu espero que você tenha entendido aqui a diferença entre MSG variável e MSG cadeia de caracteres
29:47
Aqui no meu caso eu criei na memória do meu computador uma variável MSG E ai você vai olhar aqui em baixo
29:53
Você tem uma variável MSG do tipo caractere, e o valor dentro dela é “Olá, Mundo!”
30:01
O valor que esta dentro dela é feito após a atribuição então eu vou pegar “Olá, Mundo!”
30:08
vou jogar dentro da variável MSG e logo em seguida vou escrever na tela o conteúdo da variável.
30:14
E existem ainda alguns macetes extras para utilizar o comando ESCREVA ou o comando ESCREVAL que são os comandos de saída do VISUALG
30:23
Neste primeiro exemplo ali foi o que nós vimos anteriormente ESCREVA “MSG” entre aspas, vai escrever na tela exatamente MSG
30:31
O segundo exemplo ESCREVA MSG sem aspas, vai escrever o conteúdo da variável MSG
30:37
essa variável tem que ser declarada e inicializada O terceiro exemplo ele vai escrever duas coisas:
30:44
Note ai ele vai colocar ESCREVA a “mensagem” virgula(,) MSG
30:49
Basicamente o que eu estou fazendo e mandar mostrar duas coisas dentro do ESCREVA e eu posso fazer isso sem problema algum
30:56
Primeiro eu mandei mostrar a palavra mensagem Em seguida separado por virgula (,)
31:02
Nós vamos mostrar o conteúdo da variável MSG vamos ver como isso funciona
31:07
Vamos colocar aqui no meu ESCREVAL “mensagem”
31:14
virgula (,) MSG vamos executar
31:19
Você vai ver que o resultado é “Mensagem Olá, Mundo!” Apareceu grudado ?
31:26
basta que eu coloque aqui um espaço depois do EME (M) então eu vou escrever “mensagem” um espaço em branco MSG
31:34
executando novamente “Mensagem Olá, Mundo!” Viu como é que é simples, e esses são os primeiros passos de toda aula de algoritmo que você vai ter na sua vida
31:44
você tem que entender Qual a estrutura básica da linguagem Entender o que são: Variáveis, Identificadores e tipos primitivos
31:50
e também saber como escrever alguma coisa na tela Na próxima aula a gente vai aprender como interagir com o usuário
31:55
Por exemplo: Vai! Apareceu uma pergunta na tela: Qual seu nome ? aí o usuário vai digitar: Meu nome é José
32:01
E vai responder: Olá José, bom dia pra você? Boa tarde, tudo bem com você ? Alguma coisa assim
32:07
então Isso vai ser feito na próxima aula, onde a gente vai começar a criar interação com nosso usuário
32:12
Espero que você esteja gostando desse curso de algoritmo Essa aula foi um pouquinho mais extensa Porque eu precisava passar todos esses conceitos pra vocês
32:19
Mais eu queria mais uma vez agradecer muito a sua presença Queria agradecer muito Por você ter chegado aqui ao curso de algoritmo do Curso em Vídeo
32:27
Muito prazer o meu nome é Gustavo Guanabara Eu sou seu professor E a gente vai ter agora varias aulas de algoritmo
32:33
Até que você crie a rotina de construir lógica de programação na sua cabeça
32:38
E lógica de programação é igual andar de bicicleta! É igual dirigir carro! Quando você aprende dirigir carro ou andar de bicicleta
32:44
Você fica pensando no que você tem que fazer Caramba, no carro eu tenho que... Apertar embreagem, passar a marcha, virar o volante
32:52
Depois de um tempo isso acaba se tornando automático Quando você está aprendendo a construir algoritmos
32:57
Você vai acabar escrevendo bastante algoritmo No papel ou no VISUALG que é a ferramenta que eu mostrei pra você
33:03
Depois de um tempo os algoritmos já vão aparecendo na sua cabeça automaticamente E você vai fazendo isso diretamente nas linguagens de programação
33:10
Mas volto a dizer: Você está ainda em primeiros passos, não tente correr! Tenta andar aos poucos exercitar, praticar, porque é assim que você vai aprender algoritmo.
33:20
Eu queria mais uma vez fazer alguns pedidos pra vocês Primeiro lugar: Clicando sobre este botão você vai se inscrever no Curso em Vídeo
33:26
Aqui sempre que tiver um curso novo uma aula nova Clicando aqui E se inscrevendo no canal
33:32
e botando lá que você quer receber notificações por e-mail Você vai, sempre que tiver uma aula nova
33:37
Você vai ser avisado antes de todo mundo. Clicando aqui você vai ter acesso a todas as aulas do curso de algoritmo
33:43
Que foram criadas até o momento Então você está nessa segunda aula Se você já tiver a terceira aula clicando aqui você vai ver que a terceira aula já está disponível, terceira, quarta
33:51
Quantas forem necessárias pra gente construir este curso De uma maneira bem fácil de você compreender
33:56
E eu vou dar também alguns endereços para que você chegue sempre ao conteúdo que a gente produz Sempre gratuitamente
34:03
Então nosso projeto Curso em Vídeo, ele esta disponível na internet Gratuitamente no site www.cursoemvideo.com
34:11
Acessando lá Você vai ter acesso a todos os cursos que já foram criados, inclusive o curso de HTML5 que nós acabamos de disponibilizar
34:18
Totalmente, são 36 aulas completas e gratuitas pra você Então acessa lá cursoemvideo.com, você vai ter acesso a esse curso de HTML sensacional
34:27
O nosso canal de vídeo no YOUTUBE é YOUTUBE.COM/CURSOSEMVIDEO Tem um “S” ali, ele está um pouquinho destacado
34:33
O nosso site é CURSOEMVIDEO O nosso canal é CURSOSEMVIDEO E o mesmo acontece com o FACEBOOK
34:39
Você vai acessar lá FACEBOOK.COM/CURSOSEMVIDEO E você vai ter acesso também às nossas postagens
34:45
O FACEBOOK é legal que a gente às vezes posta Fotos do estúdio, fotos do pessoal editando
34:52
Coisas internas da produção dos cursos em vídeo A gente disponibiliza lá no FACEBOOK sempre pra todo mundo
34:58
Então é isso, chega ao fim mais uma aula do seu curso em vídeo de algoritmo Eu espero que na próxima semana
35:03
Você esteja aí disponível para poder acessar a sua aula As aulas saem sempre às segundas-feiras
35:08
Pertinho do almoço 10:30 ~ 11:00 horas da manhã Antes de você ir almoçar, você dá uma estudada
35:14
Almoça, enche a barriga depois assiste à aula de novo Para poder internalizar, para poder fixa o conteúdo
35:21
É assim que você vai aprender algoritmo, é assim que você vai virar um programador Você vai me encontrar ai pelo Brasil e dizer: Caramba eu aprendi a programar com você!
35:27
Eu fico muito feliz, eu fico muito orgulhoso com isso Um grande abraço até a próxima, bons estudos e até mais.
35:35
ESCREVA ele esta mandando escrever, e vai escrevendo um do lado....
35:40
Caraca ARROTEI, ....... o comando ESCREVA ele faz.
*/
