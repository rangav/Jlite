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
* [load event](#load)
* [each()](#each)
* [on()](#on)
* [addClass()](#addclass)
* [removeClass()](#addclass)
* [hasClass()](#addclass)
* [attr()](#attr)
* [prop()](#prop)
* [css()](#css)
* [show()](#show)
* [hide()](#show)
* [toggle()](#show)


### Extending jlite core
The Jlite core has commonly used methods from jQuery to keep it small & lightweight.
Lot of the additional functionaly can be written in pure javascript see [references](#references).
But if you need additional methods it is very easy to implement

Write your own implementation for any additional methods as required in jlite.extra.js 
```javascript
// see example in jlite.extra.js
$.fn.toggleClass = function (className) {
    this.each(function (i, el) {
        var classes = el.className.split(" "); 
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(" ");
    });
};

// Using in your html document
<script src="/path/jlite.core.js" ></script>
<script src="/path/jlite.extra.js" ></script>
```

### Jlite Core Methods

#### selector
<a name="ready"></a>
```javascript
<button id="btn" class="btn btn-primary">Blue</button>

// selector can any one below
var selector = document.getElementsByClassName("btn"); // HTMLCollection
var selector = document.getElementById("btn"); // HTMLElement
var selector = document.querySelectorAll(".btn"); // NodeList
var selector = $(".btn"); // jlite elements array
var selector = ".btn"; // css selector
var selector = [5,6,8,12]; // any array

$(selector).each(function (index, item) {
   console.log(item);
});
```

#### ready()
<a name="ready"></a>
```javascript
// to execute any code after dom is ready
$(document).ready(function () {
    console.log("jlite dom ready");
});

// shorthand & the recommoded way from jQuery 3.0 
$(function () {
    console.log("jlite dom ready");
});
```


#### load event
<a name="load"></a>
```javascript
// to execute any code after document & resources loaded completely
// could be use for lazy loading images or scripts
$(window).on("load", function () {
    console.log("document is fully loaded");
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

#### css class
<a name="addclass"></a>
```javascript
// addClass
$("#btn").addClass("active");

// removeClass
$("#btn").removeClass("active");

// hasClass
if($("#btn").hasClass("active")){
    console.log("active class exists");
}
```

#### attr()
<a name="attr"></a>
```javascript
// get attribute value
$("#btn").attr("id");

// set attribute value
$("#btn").attr("id","btn-new");
```

#### prop()
<a name="prop"></a>
```javascript
// get prop value
$("#input").prop("value");

// set prop value
$("#input").prop("value","jlite");
```

#### css()
<a name="css"></a>
```javascript
// get css value
$("#btn").css("color");
$("#btn").css("width");

// set css value
$("#btn").css("color","#333333");
$("#btn").css("width","300px"); // as string
$("#btn").css("width",300); // as number
```

#### show/hide/toggle
<a name="show"></a>
```javascript
// show element
$("#btn").show();

// hide element
$("#btn").hide();

// toggle show/hide
$("#btn").toggle()
```  
<br/>

## References
<a name="references"></a>
* http://youmightnotneedjquery.com
* https://blog.garstasio.com/you-dont-need-jquery  
