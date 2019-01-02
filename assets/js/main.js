/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

if (window.location.hostname === "lazehang.com") {
    window.location.hostname = "www.lazehang.com";
}


(function($) {
    
    if ($("#gh-contribution").length > 0)
        new GitHubCalendar("#gh-contribution", "lazehang", { responsive: true });

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();

})(jQuery);

/* ---- particles.js config ---- */


/* Text decoder */

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'Laze Hang',
    'Mangal Hang',
    'Coder',
    'WebDeveloper',
    'React',
    'Node Js',
    'JavaScript',
    'Css3',
    'HTML5',
    'Php',
    'JQuery'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)
let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1500)
    })
    counter = (counter + 1) % phrases.length
}

next();

var commute = new Boolean;

function css3RadialProgressBar() {

    var xvaluenow;

    console.log(commute);

    if (commute == 0) {
        xvaluenow = 80;
        var progreso = document.getElementById('progreso');
        progreso.innerHTML = 'Progress ' + xvaluenow + '%';
        commute = 1;
    } else {
        xvaluenow = 0;

        var progreso = document.getElementById('progreso');
        progreso.innerHTML = 'Click to view';
        commute = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle = document.getElementById('progress-circle');
    var progress_style = document.getElementById('progress-style');

    /* Fix: Cover gap with shadow */
    if (xvaluenow == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle.setAttribute("aria-valuenow", xvaluenow);
    progress_style.innerHTML = " \
.p-h:before, .p-f, .p-f:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}
/*----------------------------------------------------*/

var commute01 = new Boolean;

function css3RadialProgressBar01() {

    var xvaluenow01;

    console.log(commute01);

    if (commute01 == 0) {
        xvaluenow01 = 70;
        var progreso01 = document.getElementById('progreso01');
        progreso01.innerHTML = 'Progress ' + xvaluenow01 + '%';
        commute01 = 1;
    } else {
        xvaluenow01 = 0;

        var progreso01 = document.getElementById('progreso01');
        progreso01.innerHTML = 'Click to view';
        commute01 = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow01 * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle01 = document.getElementById('progress-circle01');
    var progress_style01 = document.getElementById('progress-style01');

    /* Fix: Cover gap with shadow */
    if (xvaluenow01 == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle01.setAttribute("aria-valuenow", xvaluenow01);
    progress_style01.innerHTML = " \
.p-h01:before, .p-f01, .p-f01:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};

/*----------------------------------------------------*/

var commute02 = new Boolean;

function css3RadialProgressBar02() {

    var xvaluenow02;

    console.log(commute02);

    if (commute02 == 0) {
        xvaluenow02 = 50;
        var progreso02 = document.getElementById('progreso02');
        progreso02.innerHTML = 'Progress ' + xvaluenow02 + '%';
        commute02 = 1;
    } else {
        xvaluenow02 = 0;

        var progreso02 = document.getElementById('progreso02');
        progreso02.innerHTML = 'Click to view';
        commute02 = 0;

    };


    var rotatenum = 'rotate(' + xvaluenow02 * 1.8 + 'deg)';
    //var progress = document.getElementById('progress');

    var progress_circle02 = document.getElementById('progress-circle02');
    var progress_style02 = document.getElementById('progress-style02');

    /* Fix: Cover gap with shadow */
    if (xvaluenow02 == 0) {
        var shadowfix = "0";
    } else {
        var shadowfix = "1px";
    }



    progress_circle02.setAttribute("aria-valuenow", xvaluenow02);
    progress_style02.innerHTML = " \
.p-h02:before, .p-f02, .p-f02:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};
