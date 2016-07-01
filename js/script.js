/*Emc2wave script.js
author Beata Jasinski*/

/*---------------------------------------*/
/*popover*/
/*
$(function(){
   $('button.popA').popover();

   $('button.popB').popover();

   $('button.popC').popover();

   $('button.popD').popover();
});
*/
$('[data-toggle="popover"]').popover();


/*--------end popover-------------*/



/*--------novbar--------------*/

!function(t) {
    "use strict";
    t("a.page-scroll").bind("click", function(o) {
        var a = t(this);
        t("html, body").stop().animate({
            scrollTop: t(a.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"),
        o.preventDefault()
    }),
    t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }),
    t(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function() {
        t(".navbar-toggle:visible").click()
    }),
    t("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery);
