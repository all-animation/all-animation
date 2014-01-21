Contribuidores
=============
### Como contribuir?

Gostou do nosso framework? Quer participar do nosso projeto? Tá no "arquivo certo" rsrsrs... 
Será um prazer lhe ter no time :)

Então, mas pra começar a participar do time, só tem que seguir algumas instruções

1- Sempre que clonar algum arquivo, foque apenas uma àrea, e realize seus comit's focado nela

Estamos sempre precisando de novas animações, caso queira adicionar mais alguma, será um prazer tê-la conosco :)

2- Então, como faço para adicionar novas animações no projeto? Siga os passos abaixo :D

Não mecha no js (Se quiser apenas adicionar uma animação), pois estas animações seguem um padrão de serem feitas 
apenas em css3

Primeiro crie sua animação css:

```css

.nome-classe {
	-webkit-animation: nome 1 2s ease-out;
	-o-animation: nome 1 2s ease-out;
	-moz-animation: nome 1 2s ease-out;
	-ms-animation: nome 1 2s ease-out;
	animation: nome 1 2s ease-out;
}

@-webkit-keyframes nome {
	0% {-webkit-transform-origin: 0 0;}
	5%{-webkit-transform: scale(0.5);}
	10% {-webkit-transform: scale(0.5)}
	15% {-webkit-transform: scale(0.5) translateX(130px);}
	20% {-webkit-transform: scale(0.5) translateX(130px);}
	25% {-webkit-transform: scale(0.5) translate(130px,130px);}
	30% {-webkit-transform: scale(0.5) translate(0px,130px);}
	35% {-webkit-transform: scale(0.5) translate(0px,0px);}
	40% {-webkit-transform: scale(1);}
	100%{-webkit-transform: scale(1);-webkit-transform-origin: 0 0;}
	
}

```
Obs: só coloquei para -webkit- mas você terá que colocar também para os outros, pois estamos falando de animações "Cross Browser"


Depois é só colocar um html nessa estrutura:

``` html
<div class="box">
	<span>5</span>
	<p class="titulo">Nome do conjuto de animações</p>
  <button data-clear="2000" data-efect="nome-classe">Nome da primeira animação</button>
</div>
```
Observe que temos no botão um "data-clar" pois isto serve para limpar em determinado tempo, a classe da div que sofrerá a animação.
Neste exemplo a animação dura 2 segundos, logo colocamos um data-clear de 2000 :D

Bem é básicamente isto para contribuir, nada de "bicho de sete cabeças" sinta-se avontade para contribuir com nosso projeto, e... mãos a obra!! :D
