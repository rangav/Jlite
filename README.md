# Jlite
Jlite is a ultra lightweight javascript library with similar syntax as jQuery. 

Jlite supports all major browsers Chrome, Firefox, Safari and Internet Explorer 9+ with file size **1kb minified and gzipped**.

### Using Jlite
```javascript
<script src="/path/jlite.core.js" ></script>
// your custom script here
```

### jlite.core
The following methods are suppported by jlite core with similar api to jQuery
* [selector](#selector)
* [ready()](#ready)
* [each()](#each)
* [on()](#on)
* [addClass()](#addClass)
* [removeClass()](#removeClass)
* [hasClass()](#hasClass)
* [attr()](#attr)
* [css()](#css)
* [show()](#show)
* [hide()](#hide)
* [toggle()](#toggle)

#### selector
<a name="ready"></a>
```javascript
<button id="btn" class="btn btn-primary">Blue</button>

// selector syntax
$(selector)

// selector can any one below
var btnByClass = document.getElementsByClassName("btn"); // HTMLCollection
var btnByid = document.getElementById("btn-test"); // HTMLElement
var btnAll = document.querySelectorAll(".btn"); // NodeList
var btn = $(".btn"); // jlite elements array
var btnString = ".btn"; // css selector

$(btnAll).each(function (index, item) {
   console.log(item.className);
});

OR 

// selector can also be any array
var nums = [5,6,8,12];
$(nums).each(function (index, item) {
    console.log(item);
});

```

#### ready()
<a name="ready"></a>
```javascript
$(document).ready(function () {
    console.log("jlite dom ready");
});
```

#### each()
<a name="each"></a>
```javascript
var nums = [5,6,8,12];
$(nums).each(function (index,item) {
    console.log(item);
});

OR

$.each(nums, function (index, item) {
    console.log(item);
});
```

#### on()
<a name="on"></a>
```javascript
<button id="btn" class="btn btn-primary">Blue</button>

// syntax
$(selector).on(eventName, callback)

$("#btn").on("click", function () {
    console.log("button clicked");
});

```


