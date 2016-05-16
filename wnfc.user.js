// ==UserScript==
// @name         Southwest Fare Class and Price Per Dollar Calculator
// @namespace    http://chrisnolan.org
// @version      0.32
// @description  Display base price, fare class, and points per dollar required
// @author       Chris Nolan
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://www.southwest.com/flight/select-flight.html?fareType=POINTS*
// @updateURL    https://github.com/minamhere/WNFC/raw/master/wnfc.user.js
// @grant        none
// ==/UserScript==

(function() {

// Dictionary of fare classes and the known values for PPD. I'd like to highlight or alert somehow if the actual PPD does not match this. 
// Not used yet.
/*var fare_classes = {
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
*/

    // Each pricing radio button has the full flight pricing information in an HTML class.
    // This will loop through every flight and fare type on the inbound and outbound grids.
    $('[class*=boundRadio]').each(function() { 
        var re = /(\d+\.*\d*)\@(\w)\@.*@/; // This regular expression will pull out the base fare and fare class
        var m,points,ppd;
        if ((m = re.exec($(this).val())) !== null) { // This saves the BF and FC for use later. There is probably a better way to do this.
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
        };
        //debugger; // Use this to break and allow debugging.
        
        // This is an awkward way to find the points required for a flight.
        // Since we need to make sure we stay in the same column, we can't just blindly search again.
        // So, starting from the radio button above, we go to it's parent, and then to the next element in the DOM. 
        // This should be the "discount points" element. 
        // There's a bunch of white space in the text, so I assume there is a cleanear way to get the point's required.
        // But for now, just strip out the white space and commas. Then convert to integer.
        points = parseInt($(this).parent().next().text().trim().replace(/,/g, ''),10);
        ppd = (points/(parseInt(m[1],10))).toFixed(); // Divide points required by the base fare (m[1]). Round to nearest whole number.
        bf = $('<span> (BF:$'+m[1]+') (PPD:'+ppd+') (FC:'+m[2]+') </span>\n').insertAfter($(this)); // Print the results after the Radio Button.
    }
                                 );
})();
