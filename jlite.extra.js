/**
 * We can add addional missing functions here as required
 * see example toggleClass
 */
(function ($) {
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

})(Jlite);
