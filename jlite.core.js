/**
 * Jlite is lightweight javascript library
 * verion 1.0.0
 */
(function (window) {
    var document = window.document;

    var Jlite = function (selector) {
        var elements = [];
        this.selector = selector || "";

        if (selector instanceof Array)
            elements = selector;
        else if (selector instanceof NodeList || selector instanceof HTMLCollection)
            elements = Array.prototype.slice.call(selector);
        else if (selector instanceof Jlite) {
            elements = selector;
            this.selector = "";
        }
        else if (typeof selector === "string")
            elements = document.querySelectorAll(selector);
        else if (typeof selector === "object")
            elements = [selector];

        for (var i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }
        this.length = elements.length;
    }

    var $ = function (selector) {
        return new Jlite(selector);
    }

    function each(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback.call(this, i, list[i]);
        }
    };

    $.fn = Jlite.prototype;
    $.each = each;

    $.fn.ready = function (callback) {
        if (document.readyState !== "loading") { // if already dom ready
            callback();
            return;
        }
        document.addEventListener("DOMContentLoaded", callback);
    };

    $.fn.each = function (callback) {
        each(this, callback);
        return this;
    };

    $.fn.on = function (event, callback) {
        this.each(function (i, element) {
            element.addEventListener(event, callback);
        });
        return this;
    };

    $.fn.addClass = function (className) {
        this.each(function (i, el) {
            el.className += ' ' + className;
        });
        return this;
    };

    $.fn.removeClass = function (className) {
        this.each(function (i, el) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        });
        return this;
    }

    $.fn.hasClass = function (className) {
        var result = false;
        this.each(function (i, el) {
            if (el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className)) {
                result = true;
            }
        });
        return result;
    }

    $.fn.attr = function (attr, val) {
        if (val !== undefined)
            this.each(function (i, el) {
                el.setAttribute(attr, val);
            });
        else if (this.length > 0)
            return this[0].getAttribute(attr);

        return this;
    }

    $.fn.css = function (name, val) {
        if (val !== undefined)
            this.each(function (i, el) {
                el.style[name] = typeof val === "number" ? val + "px" : val;
            });
        else if (this.length > 0)
            return window.getComputedStyle(this[0]).getPropertyValue(name);

        return this;
    }

    $.fn.hide = function () {
        this.each(function (i, el) {
            el.style.display = "none";
        });
        return this;
    }

    $.fn.show = function () {
        this.each(function (i, el) {
            el.style.display = "";
        });
        return this;
    }

    $.fn.toggle = function () {
        this.each(function (i, el) {
            el.style.display = el.style.display !== "none" ? "none" : "";
        });
        return this;
    }

    window.$ = window.Jlite = $;
})(window);