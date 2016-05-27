/*global console, document, window, log */

(function () {
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

    window.addEventListener('load', function () {
        links = selectAll('a.lightbox');
        preloadImages();
        prepare();
        loadImages();
        log('links tableau');
        log(links);
    });

    prepare = function () {
        var container, outerWrapper, innerWrapper;
        container = byId('images');
        outerWrapper = document.createElement('div');
        innerWrapper = document.createElement('div');
        outerWrapper.id = 'lightbox-overlay';
        innerWrapper.id = 'lightbox-wrapper';
        innerWrapper.innerHTML = '<span id="lightbox-close"></span><img id="lightbox-image"/>';
        container.appendChild(outerWrapper);
        container.appendChild(innerWrapper);
        log('outerWrapper');
        log(outerWrapper);
        log('innerWrapper');
        log(innerWrapper);
        log('-----------');
        log(container);
    };

    loadImages = function () {
        var a, close, image, inner, i, outer;
        close = byId('lightbox-close');
        image = byId('lightbox-image');
        inner = byId('lightbox-wrapper');
        outer = byId('lightbox-overlay');

        close.addEventListener('click', function () {
            inner.style.display = 'none';
            outer.style.display = 'none';
        }, false);

        for (i = 0; i < links.lenght; i += 1) {
            a = links[i].addEventListener('click', function (event) {
                event.preventDefault();
                var src = a.href;
                image.src = src;
                inner.style.display = 'block';
                outer.style.display = 'block';
            }, false);
        }
    };

    preloadImages = function () {
        var i, a, src, img;
        for (i = 0; i < links.length; i += 1) {
            a = links[i];
            src = a.href;
            img = new Image();
            img.src = src;
        }

        log('i');
        log(i);
    };

}());