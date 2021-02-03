// ==UserScript==
// @name        Expedia Property Expander
// @namespace   Expedia Property Expander
// @description ZUZU Hospitality - Expedia Property Expander is created to auto click 'Show more' button on Expedia Partner Central main page.
// @version		1.0
// @author		Last Roze
// @description	Dominion With Domination
// @copyright	©2021 - Yoga Budiman
// @homepage	https://github.com/LastRoze/
// @homepageURL	https://github.com/LastRoze/
// @website		https://lastroze.github.io/
// @icon        https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1503462675/pnd8ig9snambqtixjnge.jpg
// @updateURL   https://github.com/LastRoze/Expedia-Property-List-Expander/raw/master/STAAH-Unlocker.meta.js
// @downloadURL https://github.com/LastRoze/Expedia-Property-List-Expander/raw/master/STAAH-Unlocker.user.js
// @supportURL	https://lastroze.github.io/
// @match		*://apps.expediapartnercentral.com/*
// @grant		none
// ==/UserScript==

setInterval(function(){
  var xPathRes = document.evaluate ('//*[@id="content"]/div/div/div/div[2]/div[1]/button/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  xPathRes.singleNodeValue.click();
},2000);
