$(document).ready(function(){
    $('.level-competences').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

        if (isInView) {
            // l'élément est visible
            $(this).addClass('go');

            if (visiblePartY == 'top') {
                // Le haut de l'élément est visible
                $(this).find('.level');
            } 

            else if (visiblePartY == 'bottom') {
                // Le bas de l'élément est visible
                $(this).find('.level');
            } 

            else {
                // Les deux parties sont visibles (tout l'élément)
                $(this).find('.level');
            }
        } 

        else {
            // l'élément n'est pas visible
            // on fait quoi maintenant ?
            $(this).removeClass('go');
        }
    });
});