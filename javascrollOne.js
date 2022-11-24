$(document).ready(function(){
    $("#showHideContentThree").click(function () {
        if ($("#contentThree").is(":hidden")) {
            $("#contentThree").show("slow");
        } else {
            $("#contentThree").hide("slow");
        }
        return false;
    });
});

"use strict"

const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS()  ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


if (isMobile.any()){
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.link_inside');
    if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e){
                menuArrow.parentElement.classList.toggle('_activetree');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}