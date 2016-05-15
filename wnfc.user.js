// ==UserScript==
// @name         Southwest Fare Class and Price Per Dollar Calculator
// @namespace    http://chrisnolan.org
// @version      0.3
// @description  Display base price, fare class, and points per dollar required
// @author       Chris Nolan
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.southwest.com/*
// @updateURL    https://github.com/minamhere/WNFC/raw/master/wnfc.user.js
// @grant        none
// ==/UserScript==

(function() {

var fc_T = 72;
var fc_N = 72;
var fc_M = 72;
var fc_S = 72;
var fc_O = 72;
var fc_R = 74;
var fc_W = 76;
var fc_H = 76;
var fc_Q = 78;
var fc_B = 78;
var fc_L = 80;
var fc_YL = 100;
var fc_K = 120;

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
