'use strict';

function createBase(x) {
    return function (y) {
        console.log(x + y);
    };
};
const addSix = createBase(6);
addSix(9);
addSix(18);
addSix(30);
