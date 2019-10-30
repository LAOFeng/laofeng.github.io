// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme !== 'dark';
        if (isDark) {
            //document.getElementById("switch_default").checked = true;
            document.getElementById("themeicon").classList.replace("icon-sun","icon-moon");
            // mobile
            document.getElementById("themeiconm").classList.replace("icon-sun","icon-moon");
            //document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        } else {
            //document.getElementById("switch_default").checked = false;
            document.getElementById("themeicon").classList.replace("icon-moon","icon-sun");
            // mobile
            document.getElementById("themeiconm").classList.replace("icon-moon","icon-sun");
            //document.getElementById("mobile-toggle-theme").innerText = "· Light"
        }
        _Blog.toggleTheme = function () {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
                // mobil
                document.getElementById("themeicon").classList.replace("icon-sun","icon-moon");
                //document.getElementById("themeicon").innerText = "· Dark"
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                // mobile
                document.getElementById("themeicon").classList.replace("icon-moon","icon-sun");
                //document.getElementById("mobile-toggle-theme").innerText = "· Light"
            }
            document.getElementById('themeicon').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    document.getElementById("themeicon").classList.replace("icon-moon","icon-sun");
                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    document.getElementById("themeicon").classList.replace("icon-sun","icon-moon");
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            })
            // moblie
            document.getElementById('themeiconm').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    // mobile
                    document.getElementById("themeiconm").classList.replace("icon-moon","icon-sun");
                    //document.getElementById("mobile-toggle-theme").innerText = "· Light"

                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    // mobile
                    document.getElementById("themeiconm").classList.replace("icon-sun","icon-moon");
                    //document.getElementById("mobile-toggle-theme").innerText = "· Dark"
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            })
        };
        _Blog.toggleTheme();

        // ready function.

    }
);