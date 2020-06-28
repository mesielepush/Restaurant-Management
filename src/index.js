import navbar from './navbar'
navbar()

window.scroll(function(){
    if (document.scrollTop() > 50){
        var logo_place = document.getElementsByClassName("logo");
        var navb = document.getElementsByClassName('nav')
        navb.addClass('back_nav');
        logo_place.remooveClass('logo').addClass('logo_short')
    } else{
        var logo_place = document.getElementsByClassName("logo_short");
        logo_place.remooveClass('logo_short').addClass('logo');
        navb.remooveClass('back_nav');
    }
});
var navTrigger = document.getElementsByClassName('navTrigger')
navTrigger.click(function () {

    this.toggleClass('active');
    document.getElementById("mainListDiv").toggleClass("show_list");
    document.getElementById("mainListDiv").fadeIn();

});