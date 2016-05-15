// ==UserScript==
// @name         Southwest Fare Class and Price Per Dollar Calculator
// @namespace    http://chrisnolan.org
// @version      0.31
// @description  Display base price, fare class, and points per dollar required
// @author       Chris Nolan
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.southwest.com/flight/select-flight.html?fareType=POINTS*
// @updateURL    https://github.com/minamhere/WNFC/raw/master/wnfc.user.js
// @grant        none
// ==/UserScript==

(function() {

var fare_classes = {
    {'T':72},
    {'N':72},
    {'M':72},
    {'S':72},
    {'O':72},
    {'R':74},
    {'W':76},
    {'H':76},
    {'Q':78},
    {'B':78},
    {'L':80},
    {'YL':100},
    {'K':120}};

    $('[class*=boundRadio]').each(function() {
        var re = /(\d+\.*\d*)\@(\w)\@.*@/;
        var m,points,ppd;
        if ((m = re.exec($(this).val())) !== null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
        };
        //debugger;
        points = parseInt($(this).parent().next().text().trim().replace(/,/g, ''),10);
        ppd = (points/(parseInt(m[1],10))).toFixed();
        bf = $('<span> (BF:$'+m[1]+') (PPD:'+ppd+') (FC:'+m[2]+') </span>\n').insertAfter($(this));
    }
                                 );
})();
