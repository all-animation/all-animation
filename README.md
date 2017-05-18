All Animation
=============

All animation.css is a set of fun animations to make your project sexier.
They are cross-browser animations that will emphasize your pages with sliders, 3D effects, etc.

See the <a href="https://github.com/all-animation/all-animation/blob/master/readme-portuguese.md">Portuguese language</a>.

##[Try the demo](http://clovisdasilvaneto.github.io/all-animation/)
<a href="http://clovisdasilvaneto.github.io/all-animation/">View demo</a>


### Contributors:
If you want to contribute to our project, read the file: <a href="contributing.md">contributing.md</a> ;)

### How to use:

It's easy to use, let's see step by step:

### Step 1, include the necessary files in the head so the framework works correctly:

Download the All Animation: <a href="https://github.com/clovisdasilvaneto/all-animation/archive/v2.1.2.zip" target="_blank">click here</a>

and
```
<link rel="stylesheet" type="text/css" href="yourpath/all-animation.css" />
<script type="text/javascript" src="yourpath/jquery.js"></script>

```

```
npm install all-animation

```


### Step 2, HTML:

```
<div id="animation"></div>

<button class="anny-class">Trigger class, go!</button>

```

### Step 3, jQuery:

```js
$(".any-class").click(function(){
 $("#animation").addClass("journal");
});
```

### Optional

If you want to add the effect at some specified time, just place a timer:

Example, triggering an animation in a particular element after 2 seconds:

```js
setTimeout(function(){
 $("#animation").addClass("journal");
},2000);
```

### Caution:

If you want to add some animation on an element that has had another animation, or you want to restart the animation previously triggered, you have to remove the last animation and trigger the new one. Example:


```js
 $("#animation").removeClass("journal").addClass("four-rock");
```

We have several classes for animations:

### Especiais:

<ul>
 <li>dance</li>
 <li>journal</li>
 <li>pulse</li>
 <li>pulse-slow</li>
 <li>jamp</li>
 <li>four-rock</li>
</ul>

### Bounce:
<ul>
 <li>enter-up-bounce </li>
 <li>enter-down-bounce</li>
 <li>enter-right-bounce </li>
 <li>enter-left-bounce</li>
 <li>scale-bounce</li>
 <li>jump-bounce</li>
</ul>

### Perspective:
<ul>
 <li>tree-flip-right</li>
 <li>tree-flip</li>
 <li>tree-flip-up</li>
 <li>tree-flip-down</li>
 <li>flip-left-bounce</li>
 <li>rotate-flip</li>
 <li>flip-right-bounce</li>
</ul>

### Fading Entrances:
<ul>
 <li>flip-top</li>
 <li>flip-left</li>
 <li>flip-right</li>
 <li>flip-bottom</li>
</ul>

### Rotate:
<ul>
 <li>rotate-flip-down</li>
 <li>rotate-down-bounce</li>
 <li>rotate-out</li>
</ul>

### Agrecives:
<ul>
 <li>flash-bang</li>
 <li>bomba</li>
</ul>

<br>
<br>

#### Credits:

<a href="http://clovisdasilvaneto.github.io" target="_blank">Clóvis Neto</a>
