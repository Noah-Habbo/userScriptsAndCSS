// ==UserScript==
// @name        Make usernames more clickable on theHabboWH.org
// @description Adds clickable usernames where they are missing on theHabboWH.org
// @namespace   net.libreDucks
// @match       https://thehabbowh.org/community/tags
// @match       https://thehabbowh.org/eedb/search/*
// @grant       none
// @version     0.1
// @author      NoahC500
// @license     Unlicense
// @downloadURL https://update.greasyfork.org/scripts/565306/Make%20usernames%20more%20clickable%20on%20theHabboWHorg.user.js
// @updateURL   https://update.greasyfork.org/scripts/565306/Make%20usernames%20more%20clickable%20on%20theHabboWHorg.meta.js
// ==/UserScript==
if(document.location.href.split('/')[4] == 'tags') {
  let x = document.getElementById('app').getElementsByClassName('list-group-item');
  for(i=0;i<x.length;i++) {
    y = x[i].getElementsByTagName('b')[0];
    y.outerHTML = `<a href='https://thehabbowh.org/eedb/search/${y.innerText}?&auto=1'>${y.outerHTML}</a>`;
  }
} else {
  if(document.location.href.split('/')[4] == 'search') {
    if(new URLSearchParams(document.location.href).get('auto') == '1') {
      document.location.href = document.getElementById('app').getElementsByTagName('a')[0].href;
    }
  }
}
