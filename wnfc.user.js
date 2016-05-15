// ==UserScript==
// @name         Southwest Fare Class and Price Per Dollar Calculator
// @namespace    http://chrisnolan.org
// @version      0.1
// @description  try to take over the world!
// @author       Chris Nolan
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.southwest.com/*
// @updateURL    https://github.com/minamhere/WNFC/blob/master/wnfc.user.js
// @grant        none
// ==/UserScript==

(function() {


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
