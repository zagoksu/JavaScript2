    'use strict'

    //right click on google image and inspect, then you can find out id and src of the image.

    function hijackGoogleLogo(){

    let logoGoogle = document.getElementById("hplogo");
    let parentNode = logoGoogle.parentNode // this should give us parent node/element of google logo

    // document.getElementById("lga");
    let newLogo = document.createElement("img");
    newLogo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    newLogo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    return parentNode.replaceChild(newLogo, logoGoogle);
    }

    hijackGoogleLogo(); 