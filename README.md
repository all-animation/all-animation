All Animation
=============

All Animation.css is a set of nice and crazy css animations made with the purpose to bring life and interactions to your project. They are cross-browser animations which will give more emphases on your pages likes sliding controls and 3D efects...

[You can view the website here -- We are going to change our layout soon](http://clovisdasilvaneto.github.io/all-animation/)

## Translations
- [Portuguese](README.br.md)

## V3 is now ready to be used!
It's already on npm, but we're still improving our documentation and api.

New modules will also be released on the future, the first one will be:

- [ ] all-animation/react 🥰🥰 

### How to use:

It's easy to use, let's see step by step:

### Step 1, install the library as dependency

It's pretty straight forward:

```sh
npm install all-animation
```
or 
```sh
yarn add all-animation
```

### Step 2, link the library into your project:

Currently there's thwo ways of linking all animation into your project:

**Via SCSS imports:**

In your main `scss` file of your project, just include the all-animation module, like:

```scss
// main.scss
@import "../node_modules/all-animation/scss/main"
```
After that you should be ready to use our library.

**Loading only specific animations**

In case you don't want to have the whole all-animations on your final bundle, you can import the specific animation which you want together with core all-animation dependencies:

```scss
// Core all-animation dependencies, like variables and mixins
@import "../node_modules/all-animation/scss/config/_config";

// The specific animation which you want to use
// in this case "a-bomb"
@import "../node_modules/all-animation/scss/modules/bomb/bomb"
```


**Link directly via CSS file**
you can also download the css file and put it before closing the `</head>` tag:

```html
<link rel="stylesheet" type="text/css" href="node_modules/all-animaton/dist/all-animation.css" />
```
> _We also include the source maps of it, so you can have a better debugging visibility during development_

### Step 2, HTML:

```
<div id="animation"></div>

<button class="anny-class">Trigger class, go!</button>

```

### Step 3, jQuery (You can also use plain javascript):

```js
$(".any-class").click(() =>{
 $("#animation").addClass("a-journal");
});
```

### Optional

If you want to add the effect at some specified time, just place a timer:

Example, triggering an animation in a particular element after 2 seconds:

```js
setTimeout(() =>{
 $("#animation").addClass("a-journal");
}, 2000);
```

### Caution:

If you want to add some animation on an element that had another animation, or you want to restart the animation previously triggered, you have to remove the last animation and trigger the new one. Example:


```js
 $("#animation").removeClass("a-journal").addClass("a-four-rock");
```

We have several classes for animations:

### Specials:

<ul>
 <li>a-dance</li>
 <li>a-journal</li>
 <li>a-pulse</li>
 <li>a-pulse-slow</li>
 <li>a-jamp</li>
 <li>a-four-rock</li>
</ul>

### Bounce:
<ul>
 <li>a-enter-up-bounce </li>
 <li>a-enter-down-bounce</li>
 <li>a-enter-right-bounce </li>
 <li>a-enter-left-bounce</li>
 <li>a-scale-bounce</li>
 <li>a-jump-bounce</li>
</ul>

### Perspective:
For using the perspective animations, please add a parent container with a class `a-perspective`, like: 

```html
<div class="a-perspective">
    <!-- Your animated code here, like: -->
    <div class="a-three-flip-up">...</div>
</div>
```

Some classes for 
<ul>
 <li>a-three-flip-right</li>
 <li>a-three-flip-up</li>
 <li>a-three-flip-down</li>
 <li>a-flip-left-bounce</li>
 <li>a-rotate-flip</li>
 <li>a-flip-right-bounce</li>
</ul>

### Fading Entrances:
<ul>
 <li>a-flip-top</li>
 <li>a-flip-left</li>
 <li>a-flip-right</li>
 <li>a-flip-bottom</li>
</ul>

### Rotate:
<ul>
 <li>a-rotate-flip-down</li>
 <li>a-rotate-down-bounce</li>
 <li>a-rotate-out</li>
</ul>

### Agrecives:
<ul>
 <li>a-flash-bang</li>
 <li>a-bomb</li>
</ul>

### Jello
<ul>
 <li>a-jello-horizontal</li>
 <li>a-jello-vertical</li>
</ul>

### Vibrate
<ul>
 <li>a-vibrate-low</li>
 <li>a-vibrate-medium</li>
 <li>a-vibrate-high</li>
</ul>

### Wobble
<ul>
 <li>a-wobble-bottom</li>
 <li>a-wobble-left</li>
 <li>a-wobble-right</li>
 <li>a-wobble-top</li>
</ul>

<br>
<br>

### Contributors:
If you want to contribute to our project, read the file: <a href="contributing.md">contributing.md</a> 😊

#### Credits:

<a href="http://clovisdasilvaneto.github.io" target="_blank">Clóvis Neto</a>
