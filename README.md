# Checkpoint 2 Web Development
 
## Integrantes
 
<ul>
    <li>Gabriel Barros Cisoto RM:556309</li>
    <li>Pedro Henrique Bizzo Santana RM:557263</li>
    <li>Pedro Henrique Mendes RM:555332</li>
    <li>João Marcelo Furtado Romero RM:555199</li>
</ul>
 
## Descrição
 
Foram declaras 3 funções para cada parte do flow da aplicação.
 
A função pegarInfo irá perguntar ao usuário através da função prompt o número de convidados e o consumo médio de vinho em ml e retornar esses valores.
 
A função calcularGarrafas irá chamar a função pegarInfo para usar os valores da quantidade de vinhos e consumo, além disso, declaramos o preço das garrafas de vinho de 750ml e 1.5L, logo depois disso calulamos o total de consumo em litros e em seguida calulamos o preço da compra mediante à quantidade de garrafas e preço estipulado. Essa função retorna objetos referentes aos vinhos (preço e quantidade). A função output é chamada no final.
 
A função output tem como argumentos os objetos dos vinhos e o total de consumo em litros. Nessa função, pegamos um elemento do DOM para inserir os valores em formato de texto.
 
A função calcularGarrafas é chamada quando o evento click é ativado por um botão no DOM.