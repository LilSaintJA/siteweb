/*global console, document, window, log */

var Lightbox = function () {
    'use strict';

    var byId,
        links,
        loadImages,
        log,
        preloadImages,
        prepare,
        select,
        selectAll;

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

    links = selectAll('a.lightbox');
    log('links');
    log(links);

    preloadImages = function () {
        var i, a, src, img;
        for (i = 0; i < links.length; i += 1) {
            a = links[i];
            src = a.href;
            img = new Image();
            img.src = src;
        }

        log('links tableau');
        log(a);
        log('------------');
    };

    prepare = function () {
        var body, outerWrapper, innerWrapper;
        body = byId('images');
        outerWrapper = document.createElement('div');
        outerWrapper.id = 'lightbox-overlay';
        innerWrapper = document.createElement('div');
        innerWrapper.id = 'lightbox-wrapper';
        innerWrapper.innerHTML = '<span id="lightbox-close"></span><img id="lightbox-image"/>';
        body.appendChild(outerWrapper);
        body.appendChild(innerWrapper);
        log('------------');
        log(outerWrapper);
        log(innerWrapper);
        log('------------');
        log('body');
        log(body);
    };

    loadImages = function () {
        var a, close, image, inner, j, outer;
        close = byId('lightbox-close');
        image = byId('lightbox-image');
        inner = byId('lightbox-wrapper');
        outer = byId('lightbox-overlay');
        close.addEventListener('click', function () {
            inner.style.display = 'none';
            outer.style.display = 'none';
        }, false);

        for (j = 0; j < links.length; j += 1) {
            a = links[j];
        }
        a.addEventListener('click', function (event) {
            event.preventDefault();
            var src = a.href;
            image.src = src;
            inner.style.display = 'block';
            outer.style.display = 'block';
        }, false);
    };

    this.init = function () {
        preloadImages();
        prepare();
        loadImages();

        log('-----------');
        log('this');
        log(this);
    };
};

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var lightbox = new Lightbox();
    lightbox.init();
    console.log('Lightbox en dehors de la fonction principale');
    console.log(lightbox);

}, false);