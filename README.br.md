All Animation
=============

All Animation.css é um conjunto de animações CSS agradáveis e loucas feitas com o objetivo de trazer vida e interações ao seu projeto. São animações para todos os navegadores que darão mais ênfases em suas páginas, como os controles deslizantes e os efeitos 3D ...

[Você pode ver o site aqui - vamos mudar nosso layout em breve](http://clovisdasilvaneto.github.io/all-animation/)

## Traduções
- [English](README.md)

## V3 agora está pronto para ser usado!
Já está no NPM, mas ainda estamos melhorando nossa documentação e API.

Novos módulos também serão lançados no futuro, o primeiro será:

- [ ] all-animation/react 🥰🥰 

### Como usar:

É fácil de usar, vamos ver passo a passo:

### Etapa 1, instale a biblioteca como dependência

É bem direto:

```sh
npm install all-animation
```
or 
```sh
yarn add all-animation
```

### Etapa 2, vincule a biblioteca ao seu projeto:

Atualmente, existem maneiras de vincular toda a animação ao seu projeto:

** via SCSS importações: **

Em seu principal`scss` Arquivo do seu projeto, basta incluir o módulo de animação, como:

```scss
// main.scss
@import "../node_modules/all-animation/scss/main"
```
Depois disso, você deve estar pronto para usar nossa biblioteca.

**Carregando apenas animações específicas **

Caso você não queira ter todas as animações em seu pacote final, você pode importar a animação específica que deseja, juntamente com as dependências da Animação principal:

```scss
// Dependências principais de avaliação, como variáveis e mixins
@import "../node_modules/all-animation/scss/config/_config";

// A animação específica que você deseja usar
// neste caso "a-bomb"
@import "../node_modules/all-animation/scss/modules/bomb/bomb"
```


**Link diretamente via arquivo CSS **
Você também pode baixar o arquivo CSS e colocá-lo antes de fechar a tag`</head>`:

```html
<link rel="stylesheet" type="text/css" href="node_modules/all-animaton/dist/all-animation.css" />
```
> Também incluímos os mapas de origem, para que você possa ter uma melhor visibilidade de depuração durante o desenvolvimento

### Etapa 2, html:

```
<div id="animation"></div>

<button class="anny-class">Classe de gatilho, vá!</button>

```

### Etapa 3, jQuery (você também pode usar JavaScript simples):

```js
$(".any-class").click(() =>{
 $("#animation").addClass("a-journal");
});
```

### Opcional

Se você deseja adicionar o efeito em algum momento especificado, basta colocar um cronômetro:

Exemplo, desencadeando uma animação em um determinado elemento após 2 segundos:

```js
setTimeout(() =>{
 $("#animation").addClass("a-journal");
}, 2000);
```

### Cuidados:

Se você deseja adicionar alguma animação em um elemento que tem outra animação, ou deseja reiniciar a animação anteriormente acionada, você deve remover a última animação e acionar a nova. Exemplo:


```js
 $("#animation").removeClass("a-journal").addClass("a-four-rock");
```

Temos várias aulas para animações:

### Especiais:

<ul>
 <li>a-dance</li>
 <li>a-journal</li>
 <li>a-pulse</li>
 <li>a-pulse-slow</li>
 <li>a-jamp</li>
 <li>a-four-rock</li>
</ul>

### Pulos:
<ul>
 <li>a-enter-up-bounce </li>
 <li>a-enter-down-bounce</li>
 <li>a-enter-right-bounce </li>
 <li>a-enter-left-bounce</li>
 <li>a-scale-bounce</li>
 <li>a-jump-bounce</li>
</ul>

### Perspectiva:
Para usar as animações de perspectiva, adicione um contêiner pai com uma aula `a-perspective`, como: 

```html
<div class="a-perspective">
    <!-- Your animated code here, like: -->
    <div class="a-three-flip-up">...</div>
</div>
```

Algumas aulas para
<ul>
 <li>a-three-flip-right</li>
 <li>a-three-flip-up</li>
 <li>a-three-flip-down</li>
 <li>a-flip-left-bounce</li>
 <li>a-rotate-flip</li>
 <li>a-flip-right-bounce</li>
</ul>

### Entradas que somem:
<ul>
 <li>a-flip-top</li>
 <li>a-flip-left</li>
 <li>a-flip-right</li>
 <li>a-flip-bottom</li>
</ul>

### Girar:
<ul>
 <li>a-rotate-flip-down</li>
 <li>a-rotate-down-bounce</li>
 <li>a-rotate-out</li>
</ul>

### Agrecivos:
<ul>
 <li>a-flash-bang</li>
 <li>a-bomb</li>
</ul>

<br>
<br>

### Contribuidores:
Se você deseja contribuir para o nosso projeto, leia o arquivo: <a href="contributing.md">contributing.md</a> 😊

#### Créditos:

<a href="http://clovisdasilvaneto.github.io" target="_blank">Clóvis Neto</a>
