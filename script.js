// let previous = -1;
// $(".icon[data-index]").click(function(){
//     $(this).addClass("initialised");
//     let index = $(this).attr("data-index");
//     let navtab = $(this).closest("nav.tab").addClass("moving").attr("data-selected", index);
//     if(previous == -1) navtab.find('.icon[data-index="2"]').addClass("initialised")
//     if(previous == 1 && index == 3 || previous == 3 && index == 1) { //If going from one side to the other and middle needs to be hidden
//         navtab.find('.icon[data-index="2"]').removeClass("initialised");
//         setTimeout(function(){ //Because apparently this is the only way it will work
//             navtab.find('.icon[data-index="2"]').addClass("initialised"); //Same animation as the other so they line up
//         });
//     }
//     previous = index;
//     setTimeout(function(){
//         navtab.removeClass("moving").removeClass("hidemiddle");
//     }, 750);
// });
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 1) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 200;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


//Array of images which you want to show: Use path you want.
// var images=new Array('BBS_6611.jpg');
// var nextimage=0;
// doSlideshow();


// function doSlideshow(){
//     if(nextimage>=images.length){nextimage=0;}
//     $('.global-header')
//     .css('background-image','url("'+images[nextimage++]+'")')
//     .fadeIn(500,function(){
//         setTimeout(doSlideshow,1000);
//     });
// }
