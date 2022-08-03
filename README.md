# Pokedex
Pokedex with HTML, CSS & JS

  2° dia do desafio 30 dias de Javascript
Até o momento vou upar apenas o projeto mas logo trago a documentação e tudo o que eu consegui aprender no projeto.
![image](https://user-images.githubusercontent.com/100243659/182614774-f25a5994-05ee-4deb-81de-7cf0ece9ae06.png)
Vamos lá


  1° acredito que o sistema em si é bem simples, um JS que solicita e recebe um Json de uma API online, uma construção simples, uma barra de pesquisa (Search), 2 buttons (Prev e Next), os Pokemons aparecem e com os dados do arquivo Json já renderizados trazem nome e número além do GIF.
  2° Utilizando API PokéAPI que nos traz um endpoint com as informações do pokemon
  3° funçaõ const para criação de variável fetch que permite sua manipulação
  4° Assync - Funções assíncronas aguardam o resultado da solicitação, fetch uma função assíncrona que depende de uma resposta e como não se sabe em quanto tempo vai retornar é gerada uma promise
  5° await - aguarda a conclusão do fetch e sua exibição 

conjunto => fetch = async(var) => {}

  6° json - mais uma função assincrona, json extraido da resposta da API, retorna os dados para que uma função possa renderizar os dados recebidos no caso apresenta os Pokémons com seus dados.
7° Solicitando dados da API - precisamos descrever o caminho todo no caso utilizando a função (.innerHTML ou .src[src para imagens] = data.name ou id), o objeto pode ser acessado tanto com data.name como data['name'], na aplicação foram utilizados os colchetes pois a variável Generation-v geraria um erro pois o JavaScript não interpretaria o -v 
  8° addEventListener - quando o formulário for enviado será executada uma função que pode ser feita de 2 maneiras 
(1- form.addEventListener('submit', função))
(2-const func = () => {})
na aplicação foi usada o 1°, notei que na explicação foi informado que o formulário possui um comportamento padrão que deve ser bloqueado e para isso foi usado o event.preventDefault();
  9° toLowerCase - a aplicação ainda tem uma serie de problemas porém um que é facilmente corrigido é o problema de busca em que a API não suporta caracteres maiusculos então é utilizado o comando .toLowerCase() para resolve-lo pois todos os caracteres ficam minúsculos retornando o conteúdo solicitado da API
  10° outro erro - na linha button.Prev/button.Next.addEventListener('click'), () =>{} houve um erro pois como a variável let searchPokemon não funcionou não há o armazenamento e logo os botões não tem parâmetros para avançar ou retornar.

  esses foram alguns tópicos que eu consigo documentar sobre o aprendizado e estou deixando registrado para que eu consiga debugar o código assim acredito que ficaria mais fácil saber o que resolver.
  este post pode parecer algo sem importância, mas é algo que me fará evoluir com JavaScript, formar conexões e entender meus erros e acertos, preso pelo aprendizado então seguirei postando acertos e erros independente de funcionalidade.
