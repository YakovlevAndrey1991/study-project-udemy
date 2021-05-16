'use strict'
window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/carsd'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    forms();
    slider();
    calc();

});