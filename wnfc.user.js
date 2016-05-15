// ==UserScript==
// @name         Southwest Fare Class and Price Per Dollar Calculator
// @namespace    http://chrisnolan.org
// @version      0.2
// @description  try to take over the world!
// @author       Chris Nolan
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.southwest.com/*
// @updateURL    https://github.com/minamhere/WNFC/blob/master/wnfc.user.js
// @grant        none
// ==/UserScript==

(function() {

/*
T = 72 pts / $ 70 pts /$ ($52.93/3705)
N = 72 pts / $ 70 pts /$ ($77.12/5398)
M = 72 pts / $ 70 pts /$ ($147.35/10315) 
S = 72 pts / $ 70 pts / $ ($93.86/6570)
O = 72 pts / $ 70 pts / $ ($180.84/12659) 
————
R = 74 pts / $ ($219.92/16273) 
————
W = 76 pts / $ ($241.30/18339) 
H = 76 pts / $ ($275.72/20955)
————
Q = 78 pts / $ ($238.98/18640)
B = 78 pts / $ ($276.19/21543)
————
L = 80 pts / $ ($331.05/26484)
————
AT Fare Classes = Applicable Ratio
YL = 100 pts /$ ($242.70/24270)
BS Fare Classes = Applicable Ratio
K = 120 pts/ $ ($458.41/55021)

*/

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
