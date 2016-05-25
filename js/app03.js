/*global console, document, window, log */

// Chose à faire

// Récupérer les liens dans un tableau

// Au click chargé la classes css

(function lightbox() {
    'use strict';

    var byId,
        links,
        log,
        loadImages,
        preloadImages,
        prepare,
        selectAll,
        select;

    log = function (d) {
        console.log(d);
    };

    select = function (sCSS) {
        return document.querySelector(sCSS);
    };

    selectAll = function (sCSS) {
        return document.querySelectorAll(sCSS);
    };

    byId = function (ID) {
        return document.getElementById(ID);
    };

}());