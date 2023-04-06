# Introdução ao Scratch - Curso de Algoritmos #05 - Gustavo Guanabara
# https://youtu.be/GrPkuk1ezyo

## Scratch (download ou web)
https://scratch.mit.edu/

- Ferramentas
- Sprites (imagens das personagens)
- Palco ou Plano de Fundo (background)
- Objeto(s)

O Scratch permite que a gente junte as peças (encaixes): 
```
- Events > When Green Flag Click
- Sound > Start Sound Meow
- Looks > Say "Olá, Mundo!" for 2 secs.

- Sensing > Ask "Diga um número" and wait...
- Answer
- Sensing > Ask "Diga outro número" and wait...
- Answer
``` 
// Agora, vamos pegar a resposta do usuário (answer) e guardar em algum lugar (variável)...
```
- Variables > Make a Variable > N1
- Variables > Make a Variable > N2

- Variables > Set N1 to Answer
- Variables > Set N2 to Answer

- Variables > Make a Variable > S
- Variables > Set S to ( Operations _N1_ + _N2_ )
- Looks > Say S for 2 secs.
- Operations > Join __ __ > Join "A Soma entre os números vale: ", S
```
// Vamos então dar a mesma quantidade de passos com a personagem do Scratch, de acordo com o número total do input do usuário...
```
- Control > Repeat __S__ 
  - Motion > Move __S__ steps > 
  - Motion > Next Costume // muda o sprite da personagem...
  - Control > Wait _0.2_ secs. 
```  
FIM SCRIPT # 01
*/

/* TRANSCRIÇÃO
0:04
♬ Introdução ♬
0:21
Olá, seja bem vindo a mais uma aula do seu curso de Algoritmo!
0:24
O meu nome é Gustavo Guanabara, eu sou seu professor
0:26
e agora a gente vai dar uma pausa nos estudos de algoritmos, de conceitos
0:31
pra eu mostrar uma ferramenta muito importante e muito valiosa
0:34
para que ajude ainda mais no seu aprendizado em algoritmos.
0:38
Na verdade, eu mostrei nas aulas de 1 a 5, o Visualg
0:43
e essa é a ferramenta que nós vamos utilizar prioritariamente
0:46
mas existe uma ferramenta que utilizo em minha sala de aula e gostaria de compartilhar com vocês,
0:51
e acredito que facilita bastante, principalmente para que está tendo dificuldades até aqui.
0:56
Então se você assistiu a aula de 1 a 5 e sentiu algum tipo de dificuldade,
1:01
provavelmente agora você vai conseguir eliminar essas dificuldades, pois eu vou apresentar a vocês o projeto "Scratch"...
1:06
"O Scratch" é um projeto criado por uma universidade nos EUA, muito famosa
1:10
O Instituto de Tecnologia de Massachusetts (MIT),
1:14
e esse projeto foi criado desde 1993, mas só em 1997/1998 é que ele foi divulgado para a comunidade
1:20
e desde então, ele está disponível gratuitamente, basta você procurar por pelo projeto do "Scratch".
1:26
Mas ele já faz parte do seu pacote do curso que você baixou lá no site: www.cursoemvideo.com
1:33
Acessando esse site, você consegue baixar na área de Curso de Algoritmo
1:38
o seu pacote e dentro dele vem a versão do "Scratch" para Windows
1:41
e se por acaso você estiver usando como eu aqui utilizo o Mac
1:44
eu vou utilizar o "Scratch" em uma máquina virtual no Mac.
1:46
ou ainda caso você utilize alguma versão do Ubuntu, uma versão Linux, você pode
1:50
baixar no site oficial do "Scratch" fazendo uma busca simples pelo nome da ferramenta no Google
1:56
e você terá acesso a ela.
1:57
Então é uma ferramenta que foi criada com o intuito de ensinar lógica de programação para crianças
2:02
com uma simplicidade muito grande e afinal todos temos nossa criança dentro de nós
2:08
então é uma forma divertida de utilizar o "Scratch" e vocês vão ver a partir de agora
2:12
pois vou demonstrar essa ferramenta para vocês e como é simples criar uma lógica
2:16
utilizando esse ambiente.
2:17
Então vamos passar aqui para o computador, para que você entenda do que estou falando...
2:20
Após baixar o pacote você vai instalar a ferramenta
2:23
e a instalação de aplicativos no Windows é bem simples, avança, avança, avança e conclui.
2:28
Então você vai ter aqui o "Scratch", vou abrir o aplicativo...
2:32
Colocando ele aqui em tela cheia.
2:35
E aqui você vai ver os ambientes do "Scratch"
2:37
Basicamente, você tem um menu aqui em cima...
2:40
botão pra salvar, botão pra abrir e botão para compartilhar...
2:43
Isso é legal, pois você pode compartilhar seus projetos.
2:46
Aqui ainda na barra superior...
2:48
...você tem algumas ferramentas de carimbo, recorte, você pode aumentar ou diminuir um objeto
2:52
como por exemplo, posso aumentar o objeto...
2:55
...ou posso clicar aqui e diminuir um pouco o objeto.
2:58
Aqui em cima eu mudo as visualizações...
3:00
...podendo colocar em visualização pequena dando foco ao código...
3:03
...posso voltar a visualização padrão distribuindo o foco,
3:07
ou então, focando apenas na execução onde ele vai ficar em tela cheia apenas para executar a lógica.
3:14
Na parte de baixo, nós temos os "sprites"
3:17
que são os personagens que são criados, inclusive o palco que é essa parte branca
3:22
então, nós temos aqui por exemplo um objeto apenas, que é o gato para trabalharmos nele.
3:27
Podemos desenhar um objeto clicando aqui.
3:30
Podemos adicionar um objeto
3:32
com "sprite" já pré-definido, ou seja, qualquer arquivo ".gif" serve como "sprite"
3:37
ou então, você pode criar um objeto surpresa clicando sobre o último botão.
3:40
Aqui no meio, nós temos a área de código, que é onde vai ficar a nossa rotina.
3:44
Nós temos também os trajes, que são os trajes usados pelo gato, aqui temos 2
3:49
ou os sons do gato, que no caso aqui temos o som de "Miar".
3:53
Voltando aos comandos...
3:55
No canto esquerdo temos os comandos,
3:57
aqui você tem várias categorias de comandos
3:59
então nós temos categorias de movimento, de aparência, de som...
4:02
...e note que cada uma delas que eu estou clicando,
4:05
ele tem uma série de comandos ou instruções dentro dele.
4:08
Então, tudo começa aqui na seção de movimento
4:11
e é aqui que o "Scratch" vai ser trabalhado.
4:14
Então você consegue ver que é uma ferramenta extremamente simples,
4:17
mas o resultado dele é extremamente poderoso.
4:19
As funcionalidades dele são bem legais!
4:21
Você deve lembrar muito bem, em uma das aulas passadas, se não me engano a aula 3
4:25
nós vimos operadores aritméticos
4:27
e nós fizemos uma lógica para pedir que o usuário digite dois números
4:32
e mostrasse a soma entre eles.
4:34
Vamos fazer com que isso aconteça no "Scratch" com um programa focado pra crianças.
4:38
Vamos fazer a mesma coisa funcionando.
4:41
Mas antes de mais nada, não se esqueçam da maldição do "Olá, Mundo!"
4:45
Vamos fazer o gatinho falar "Olá, Mundo!" ai pra gente!
4:48
Tudo começa quando eu clico na bandeira verde.
4:50
Temos que vir aqui na ferramenta de controle
4:52
e quando clicar na bandeira verde, vai acontecer algo.
4:57
Vou vir aqui em "aparência"
4:59
vou pedir para que o gato diga por 2 segundos,
5:02
"Olá, Mundo!".
5:04
Agora basta que eu clique na bandeira verde...
5:06
Ele vai escrever "Olá, Mundo!" por 2 segundos e depois some.
5:09
Eu posso também, emitir um som
5:12
fazendo com que o gato toque o som "Miau" e depois diga "Olá, Mundo!".
5:18
♪"Miau!".
5:20
Note também, que cada um dos comandos se encaixam um no outro.
5:24
Por exemplo, se eu encaixar o som "Miau" e deixe o "Olá, Mundo!" do lado de fora...
5:28
...ao clicar...
5:29
...♪"Miau!".
5:30
Ele miou, mas ele não escreveu: "Olá Mundo!".
5:32
Apenas as peças que estão encaixadas uma na outra, vão poder servir para execução,
5:38
se partindo de uma destas peças que tem uma onda em cima, que são as peças de controle.
5:44
Vamos deixar esse aqui de lado,
5:45
basta que eu o arraste desta área para a área de comandos que ele apaga os comandos.
5:50
E vamos fazer o seguinte...
5:51
...vamos colocar um sensor aqui, perguntando não qual o seu nome,
5:55
vou pedir...Diga um número.
6:01
E logo em seguida teremos uma resposta.
6:04
Note, que o bloco de resposta não se encaixa em nenhuma delas,
6:08
o bloco de resposta só vai se encaixar em objetos retangulares.
6:12
Vamos deixá-lo aqui e vamos solicitar outro número.
6:18
Digite outro número...
6:23
E também, vamos deixar aqui a resposta.
6:27
Estas respostas não podem ficar soltas e nem flutuando,
6:30
pois nos já vimos que comandos que estão flutuando na tela não são executados.
6:34
E aí eu tenho que pegar a resposta do que o usuário digitou e guardar em algum lugar.
6:38
Você já viu comigo, qual o nome do local onde é armazenado valor, não viu?
6:43
O nome "Variável" te diz alguma coisa?!
6:46
Pois o "Scratch" também tem variáveis!
6:48
Então vamos criar aqui, temos a área de variáveis...
6:51
...vamos criar duas variáveis:
6:53
Uma variável "N1"...
6:55
...vou criar outra variável, "N2".
6:58
Os nomes das variáveis, seguem as mesmas regras que nós vimos anteriormente.
7:02
Agora,
7:03
eu vou fazer o seguinte...
7:05
...vou mudar o valor de "N1"...
7:08
...para 0?
7:09
Não, vou mudar para "resposta"
7:12
do primeiro.
7:13
Vou encaixar aqui a pergunta e vou fazer a mesma coisa
7:17
só que mudando agora o "N2"...
7:20
...para...
7:22
...a minha segunda resposta!
7:24
Então agora, ele vai perguntar: "Diga um Número",
7:27
Vai esperar
7:28
e quando ele tiver a resposta ele vai jogar dentro da variável "N1".
7:31
Aqui mesma coisa: "Diga outro Número", ele vai esperar
7:34
quando o usuário disser o outro número a resposta vai para N2.
7:38
Vamos calcular a soma,
7:40
criando uma variável...
7:41
..."S"
7:42
e a minha variável "S",
7:45
vai ser atribuída da seguinte maneira:
7:47
"mude "S" para", CUIDADO com o "Mude "S" para" e o "Mude "S" por",
7:51
"Mude "S" por" vai adicionar valores à variável,
7:54
"mude "S" para" vai mudar o valor interno dela sem acrescentar nada.
7:58
Então, o bloco que nós estamos utilizando é o "Mude para" e não o "Mude por".
8:03
O "S", vai ser a soma de "N1" com "N2"
8:06
e se viermos aqui na área de operadores,
8:08
você vai ver que existem os operadores de adição,
8:10
subtração, multiplicação e divisão, que nós já vimos nas aulas anteriores.
8:14
vamos colocar aqui uma operação de adição.
8:18
Vou até as áreas de variáveis colocando o "N1",
8:21
mais...
8:22
o "N2".
8:24
Por fim,
8:25
vamos na área de "aparência"
8:27
mandando o gato dizer por 2 segundos
8:31
o valor de "S".
8:32
então vou até a variável e vou colocar "S" aqui.
8:37
Vamos executar clicando na bandeira verde...
8:40
a primeira coisa que ele está me pedindo é "Digite um número"...
8:42
Eu tenho aqui, as variáveis "N1", "N2" e "S"
8:45
vou digitar um numero para ele "3", apertando o "Enter"
8:49
o 3 já veio aqui para cima
8:51
então ele me pede o outro número que vai ser colocado aqui em "N2".
8:54
vamos colocar "5"
8:56
e quando eu pressionar "Enter" ele vai somar 5 com 3, vai me dar o resultado...
9:01
ele me deu o resultado "Olá" rs, pois eu coloquei aqui por "S" segundos,
9:06
por 8 segundos eu tenho que colocar ele aqui
9:08
e eu coloquei no local errado!
9:10
vamos executar de novo...
9:12
..."Diga um número"
9:13
3
9:14
"Diga outro número"
9:15
5
9:16
e a soma foi: 8.
9:18
Se eu quiser mostrar no lugar de apenas "S",
9:21
mostrar uma mensagem
9:22
eu posso usar um operador de junção
9:25
colocando aqui: junte...
9:28
...a mensagem...
9:30
a soma vale...
9:34
..."S"...
9:36
e vou colocar "Diga (a junção entre a) Soma vale "S""
9:39
por 2 segundos.
9:41
vou dar um espaço aqui depois do é
9:44
pra ficar separado...
9:46
...e vamos executar:
9:48
"Diga um número"
9:49
4
9:50
"Diga outro número", 2
9:52
4 com 2 ...
9:53
...a soma vale 6!
9:55
E aí, se parece bastante com o Visualg não?!
9:57
Mas o mais legal do "Scratch" é que além da interatividade com valores e operadores,
10:02
você pode criar interatividade com esse personagem que está aparecendo aí na tela
10:06
como por exemplo, eu vou digitar dois números e esses números vão ser somados
10:10
e o número que resultar ele vai dar uma quantidade de passos na tela...
10:13
vamos ver como isso funciona?!
10:16
Então a partir de agora eu tenho a soma,
10:18
ele vai me mostrar a soma
10:20
e além disso, deixe-me puxar o gato para cá,
10:23
ele vai dar a quantidade de passos para a frente.
10:26
Para dar uma quantidade de passos, eu tenho aqui na seção de controle
10:29
uma área "Repita"
10:32
e aqui ele repete 10 vezes
10:33
eu não vou querer repetir 10 vezes, eu vou querer repetir a soma de passos que ele der.
10:38
Então, repita por tantas vezes quanto for a soma, no meu caso aqui ele repete 6 vezes
10:43
nessa execução, mais para frente cada situação ele vai dar um número de passos diferente.
10:48
Para dar um passo, existe um movimento
10:51
de 10 passos.
10:52
Na verdade, ele não vai dar 10 passos, ele vai dar 1 passo
10:55
10 passos é a distância que ele vai percorrer.
10:58
Então ele vai mover 10 passos
10:59
e eu vou mudar a aparência dele para próximo traje.
11:04
A mudança de traje
11:05
acontece da seguinte maneira, ele vai ter o gato com a perna aberta, depois o gato com a perna fechada...
11:10
...depois o gato com a perna aberta, depois o gato com a perna fechada
11:13
e vai intercalar isso.
11:14
Para que você possa perceber direito,
11:16
eu vou dar um comando de controle de espera aqui,
11:19
só que ele não vai esperar 1 segundo,
11:20
ele vai esperar 0.2 segundos.
11:23
Então dentro do "Repita" ele vai mover 10 passos,
11:26
mudar o traje,
11:27
e esperar 0.2 segundos.
11:29
Note aqui, que eu tenho uma estrutura que está
11:32
englobando estes 3 comandos.
11:35
Estes 3 comandos serão considerados como um bloco.
11:38
Então vamos executar...
11:39
...ele vai pedir um número...vou informar 5...
11:44
...outro número, vou informar 3.
11:45
Então isso vai dar 8 e ele vai dar 8 passos após mostrar o resultado.
11:55
OK?
11:56
Vou executar mais uma vez...
11:57
...1 + 1, ele vai dar apenas 2 passos.
12:01
OK?
12:02
De forma análoga, se eu informar 10 e 10...
12:06
...ele vai andar 20 passos para frente.
12:13
Interessante, não?!
12:14
E o "Scratch" tem algumas outras funcionalidades muito importantes,
12:17
eu vou mostrar aqui algumas coisas interessantes
12:19
e isso serve pra você mostrar pro seu sobrinho, pro seu filho, para qualquer criança que conheça
12:24
porque ela vai aprender brincando
12:26
na verdade ela vai achar que estará brincando com algo,
12:29
mas no fundo ela estará aprendendo algoritmos
12:32
que são coisas que normalmente as pessoas acham difícil
12:34
eu sinceramente, não entendo o porquê! Mas tem muita gente que acha isso difícil.
12:39
Eu vou criar um outro exemplo pra mostrar algumas funcionalidades do "Scratch"
12:42
clicando em "Arquivo", "Novo",
12:44
não vou salvar o projeto atual,
12:46
ele vai criar mais uma vez o objeto,
12:48
vou clicar com o botão direito do mouse
12:50
na área de "sprites" e vou apagar esse objeto.
12:54
Meu palco está vazio.
12:55
Vamos configurar o palco primeiro...
12:57
...clicando aqui em fundo de tela, eu posso importar
13:00
O "Scratch" vem com vários fundos já pré-modelados
13:04
e eu vou colocar aqui por exemplo, "outdoors"
13:08
vou selecionar uma...rua qualquer aqui,
13:14
por exemplo...
13:16
na frente do cinema.
13:18
inseri aqui o palco...
13:20
...e vou criar um novo personagem.
13:22
para o personagem, vou clicar aqui
13:25
e vou ver vários personagens.
13:27
No meu caso eu tenho a área de "Personagens".
13:31
Pensando bem vou selecionar "Pessoas".
13:35
Temos a área de pessoas e tenho várias pessoas aqui...
13:41
...vou escolher uma delas...
13:44
...tem aqui um rapaz, andando...
13:47
...A, B, C, D e E, então...
13:50
vou primeiro abrir o "A",
13:52
e ele vai criar a pessoa aqui,
13:54
vou chamar essa pessoa, mudando aqui em cima de José.
13:59
então esse é o José
14:01
e então vou vir aqui em "trajes" e eu posso importar outros "sprites" de José.
14:07
vou abrir o B...
14:09
...depois o C...importar...
14:15
...o C.
14:17
Depois importar...
14:21
...o D.
14:24
E por fim, importar...
14:28
...o E.
14:31
Então note aqui, que para a mesma pessoa José, eu tenho 5 "sprites"
14:35
que são 5 posições dele caminhando.
14:38
Vamos vir aqui na área de comandos,
14:40
e vamos colocar assim,
14:42
quando a bandeira for clicada,
14:44
vou repetir para sempre, vamos colocar aqui sempre...
14:47
...sempre...
14:48
vou mudar a aparência dele para o próximo traje
14:51
e mais uma vez para você perceber esta mudança, vou mandar esperar...
14:56
os...vou colocar bem pouco aqui 0.1 segundos...
15:01
vou clicar na bandeira...
15:03
...e o José começa a caminhar!
15:07
Na verdade ele só está mudando o traje e aguardando "pra sempre".
15:11
Tudo que estiver
15:12
dentro desta estrutura que engloba estes dois comandos,
15:16
é considerado uma repetição "pra sempre".
15:19
Vou parar clicando em "parar tudo".
15:22
Ele parou.
15:23
Vou colocar o José aqui
15:25
e além de próximo traje, vou fazer um movimento
15:28
de 10 passos.
15:31
Ele vai começar a andar...
15:33
...só que quando ele chegar no canto da tela, ele ficará parado
15:37
mas continua andando consegue ver?!
15:40
Mas ele saiu do limite da tela.
15:42
Vou parar...
15:44
...puxar ele de volta aqui...
15:47
...e vou dar um comando onde: se tocar na borda, volte.
15:52
Simples!
15:53
Clicando na bandeira, ele anda
15:56
e quando ele tocar na lateral...
15:58
ele volta.
15:59
Só que ele está voltando, de cabeça para baixo.
16:02
Vou deixar ele voltar à posição natural...
16:04
...vou parar...
16:06
...e vou mudar a localização aqui de José.
16:08
Aqui ele gira para qualquer direção,
16:11
aqui ele só gira na esquerda e direita, que é o que quero,
16:14
e, na última opção, ele não vai girar em hipótese alguma.
16:17
Então,
16:18
Nessa primeira você viu que ele volta de cabeça para baixo,
16:21
veja!
16:22
Com a segunda opção ativada...
16:25
...ele vai...
16:26
...e quando ele bate ele volta.
16:29
E nessa opção aqui, a última,
16:32
ele vai andar,
16:36
e ele nunca vai virar.
16:38
Batendo de um lado ou de outro, ele sempre vai permanecer virado para a direita.
16:44
No meu caso aqui a melhor opção é
16:46
a segunda.
16:49
Se eu quiser, como já vimos, diminuir o tamanho dele,
16:53
posso diminuir,
16:55
eu posso inclusive, remover esse aguardo,
17:04
e ele vai andar mais rápido.
17:12
E outra coisa que você pode fazer, é interatividade com as teclas do teclado,
17:16
como por exemplo, eu posso fazer com que o José que está andando feito louco aqui na minha tela,
17:20
cada vez que eu aperte "espaço" ele dê um salto, vamos ver como isso funciona:
17:24
Então lá está ele, vou parar meu programa para que ele possa descansar,
17:28
e vou colocar o seguinte, aqui tenho uma outra forma de começar,
17:32
tenho um outro início, que é quando a tecla de espaço for pressionada, ou pode ser qualquer outra tecla,
17:37
bastando informar aqui, seta pra cima, seta pra baixo , o que quer que seja,
17:41
aí já é possível criar pequenos joguinhos,
17:44
e quando a tecla de espaço for pressionada,
17:48
eu vou configurar um movimento
17:49
mudando "y"...
17:52
...por 10, isto é, ele vai adicionar 10 ao "y"...
17:56
e pra isso vou configurar uma repetição
17:58
de 10 vezes.
17:59
Isso vai fazer com que ele suba.
18:01
Logo em seguida, vou fazer uma outra repetição de 10 para que ele volte ao mesmo lugar
18:07
e vou configurar um movimento mudando "y"...
18:12
...por -10.
18:14
Note que agora eu utilizei o "Por" e não o "Para".
18:17
Então quando eu pressionar o espaço ele vai fazer: 10 para cima,
18:21
depois 10 para baixo.
18:23
Vamos executar...
18:25
apertando a barra de espaço...
18:27
...ele faz um pequeno salto
18:30
e eu posso criar
18:33
algumas coisas interessantes!
18:36
Vamos criar mais uma forma de interatividade aqui,
18:39
então, eu vou criar um bloco que fique flutuando na tela
18:42
e quando o José bater com a cabeça nele
18:45
eu vou somar um ponto, vou criar um placar.
18:47
vamos criar um pequeno jogo aqui!
18:49
Mais uma vez eu vou parar a programação
18:52
eu vou criar um novo "sprite", so que desta vez eu vou pintar um este "sprite"
18:56
então vou selecionar aqui
18:58
a cor laranja,
19:00
vou desenhar um retângulo,
19:02
segurando o "shift" ele desenha um quadrado,
19:05
vou desenhar uma linha, branca
19:08
pra eu criar mais ou menos um tijolo.
19:10
Estou segurando o "Shift" para ele ficar reto,
19:16
de maneira muito simples você pode caprichar muito mais, seu filho, seu sobrinho,
19:21
fazendo aqui um tijolo...
19:31
...uma coisa simples de se fazer,
19:34
é só dar liberdade a sua criatividade!
19:37
e a criatividade de uma criança ou um jovem é muito maior do que a minha né?!
19:41
Então temos o tijolo que criei
19:43
mal e porcamente, vou diminuir um pouco,
19:47
a cada clique ele diminui um pouco,
19:54
acredito que já esteja bom!
19:57
Vou fazer com que o tijolo fique aqui,
20:02
mudar o nome dele para tijolo,
20:04
vou voltar até o José,
20:06
e no meio do salto, eu vou verificar se algo aconteceu
20:11
colocando aqui:
20:13
se, vou colocar esse repita depois,
20:16
se acontecer alguma coisa,
20:17
e esse alguma coisa será um "Sensor"
20:21
quando ele estiver "tocando em", isto é, se o José estiver tocando em
20:25
"tijolo", isto é, se ele tocar o tijolo,
20:29
vou reproduzir um som
20:31
veja que ele está sem nenhum som, então vou importar um som,
20:35
aqui em "Effects", temos um efeito chamado "pop"...
20:40
♪Pop...Pop♪
20:41
certo?!...então no comando,
20:45
"se o José estiver tocando em Tijolo",
20:48
toque o som "pop",
20:50
vamos ver...
20:53
♪Pop♪
20:55
♪Pop♪, ♪Pop♪
20:57
ele só faz o barulho,
20:59
♪Pop♪
21:01
quando ele toca no tijolo.
21:02
Vamos subir um pouquinho mais...e além de tocar no tijolo, eu vou criar uma variável
21:07
que vai ser a variável de pontos,
21:12
onde, no início de tudo,
21:14
no meu programa, quando a bandeira verde for clicada eu vou colocar ponto = 0,
21:18
e sempre que...ouvir o som,
21:21
eu vou configurar mudar pontos
21:23
por 1, isto é, ele vai somar mais 1 aos pontos.
21:26
Vamos começar aqui com ponto = 0,
21:28
comecei meu programa e cada vez
21:31
que eu encostar no tijolo, ele vai somar mais 1 no ponto olhá só:
21:35
♪Pop♪
21:40
♪Pop♪
21:41
♪Pop♪
21:42
♪Pop♪
21:44
♪Pop♪
21:45
♪Pop♪
21:46
Viu só como você entendeu o "Scratch" muito mais fácil?
21:49
E na verdade aquilo que está no meio é um algoritmo,
21:51
é um conjunto de passos,
21:53
usa variável, pode fazer expressões aritméticas
21:56
então, essa ferramenta é sensacional para isso.
21:59
Durante as primeiras aulas, enquanto estivermos vendo os conceitos fundamentais de algoritmos,
22:03
eu vou tentar fazer, a primeira e a segunda parte sempre utilizando "Scratch" e "Visualg"
22:08
em paralelo, para que você possa executar isso simultaneamente
22:11
e poder entender as duas ferramentas.
22:14
Você como um adulto, pode aprender com o"Visualg",
22:16
mas você pode mostrar o "Scratch" para um jovem, para um adolescente, para uma criança, enfim,
22:21
que possa se interessar por isso.
22:23
Hoje em dia qualquer criança se interessa por jogos eletrônicos
22:26
então por que uma criança não pode se interessar por criar um jogo eletrônico dela?!
22:31
então fica a dica, eu espero que você goste bastante do "Scratch"
22:34
mais uma vez, é um projeto gratuito
22:36
eu só estou utilizando ferramentas gratuitas, no pacote do curso em vídeo que você baixou, tem o "Visualg"
22:43
tem o "Scratch", mas você pode procurar qualquer uma destas ferramentas, pois são gratuitas na internet
22:47
elas não são exclusividades minhas
22:49
elas são utilizadas nas minhas salas de aula há muito tempo
22:52
eu utilizo isso nas minhas salas, quando eu entro em uma sala de aula para dar aula para jovens e adultos,
22:57
eu utilizo essas ferramentas,
22:58
então, utilize elas para fazer com que as pessoas se interessem mais por programar,
23:03
se interessem mais pela construção de algoritmos e assim a gente vai formar muitos programadores por aí!
23:08
Esse é o meu objetivo, essa é a minha missão!
23:11
Eu espero que você tenha gostado desta aula,
23:13
espero que você tenha compreendido
23:14
o funcionamento básico do "Scratch", então
23:16
a partir da aula que vem nós vamos fazer alguns exercícios
23:19
e esses exercícios todos vão servir como base utilizando o "Scratch" e o "Visualg" em paralelo.
23:25
Eu tenho todos os favores que sempre peço pra vocês:
23:28
então, clicando aqui você vai assinar o canal do curso em vídeo,
23:32
sempre que tiver uma nova aula, uma boa aula, você será avisado,
23:36
a dica que sempre dou, do lado do lado do botão de inscreva, tem uma engrenagem pequena depois que você está inscrito,
23:40
tem uma engrenagem, vá lá e clique para receber o em-mail
23:44
desse canal, pois esse canal é bom,
23:46
esse canal me ajuda, esse canal me dá boas aulas de graça!
23:48
clicando aqui, você vai ter acesso a todas as aulas, é uma playlist
23:52
nós já estamos na quinta aula
23:54
são muitas aulas então para não perder nenhuma, você
23:56
clica aqui e acessa a playlist
23:58
não deixe de se inscrever, não esqueça de curtir o vídeo, de compartilhar
24:03
mostre para as pessoas o trabalho que temos, mostre para as pessoas
24:07
que estou tentando ensinar algoritmos para jovens
24:10
de forma gratuita, pela internet de uma maneira que quase ninguém fez
24:14
nesse mundo inteiro!
24:16
Então, é um projeto que abracei de coração,
24:19
a HostNet, que é a empresa patrocinadora
24:22
eu gostaria de agradecer a todos os diretores da HostNet que acreditam no meu trabalho
24:25
que acreditam em todos os projetos que eu tenho
24:27
então, eu queria mais uma vez convidar vocês
24:30
a visitar o site da HostNet, sempre que você precisar de um lugar para hospedar o seu site,
24:34
www.hostnet.com.br, esse e o lugar!
24:36
Essa é a empresa que acredita no site do curso em vídeo
24:39
esse site que está te ensinando HTML,
24:41
está te ensinando algoritmo e vai te ensinar muitas outras coisas aí pelo projeto, pela vida inteira!
24:46
Então, um forte abraço, bons estudos, não se esqueça de praticar, instale as ferramentas,
24:52
treine, pratique e mostre aos outros!
24:54
Um forte abraço e até a próxima!
*/
