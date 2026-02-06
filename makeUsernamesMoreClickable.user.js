// ==UserScript==
// @name        Make usernames more clickable on theHabboWH.org
// @description Adds clickable usernames where they are missing on theHabboWH.org
// @namespace   net.libreDucks
// @match       https://thehabbowh.org/community/tags
// @match       https://thehabbowh.org/eedb/search/*
// @match       https://thehabbowh.org/legislative/index
// @match       https://thehabbowh.org/ss/index
// @match       https://thehabbowh.org/executive/index
// @match       https://thehabbowh.org/judicial/index
// @match       https://thehabbowh.org/*/leadership/members
// @grant       none
// @version     0.2
// @author      NoahC500
// @license     Unlicense
// ==/UserScript==

if (document.location.href.split('/')[5] == 'members') {
  x = document.getElementsByClassName('col-lg-8')[0].getElementsByClassName('title-lr'); /* Branch tasking pages */
  for(i=0;i<x.length;i++) {
    y = x[i].outerHTML.split('\"');
    z = `<h5 style='color: unset;' class='${y[1]}'>${y[2].split('>')[1].split('<')[0]}</h5>`;
    x[i].outerHTML = `<a href='https://thehabbowh.org/eedb/search/${x[i].innerText}?&auto=1'>${z}</a>`;
  }
} else {if (document.location.href.split('/')[4] == 'index') { /* Branch dashboards */
  x = document.getElementsByClassName('col-lg-8')[0].children[2].getElementsByTagName('h5'); /* Announcements */
  for(i=1;i<x.length;i++) {
    for(i=0;i<x.length;i++) {
      y = x[i];
      y.outerHTML = `<a href='https://thehabbowh.org/eedb/search/${y.innerText}?&auto=1'>${y.outerHTML}</a>`;
    }
  };
  x = document.getElementsByClassName('col-lg-8')[0].children[3].getElementsByTagName('tr'); /* Members */
  for(i=1;i<x.length;i++) {
    y = x[i].getElementsByTagName('td')[0];
    y.innerHTML = `<a href='https://thehabbowh.org/eedb/search/${y.innerText}?&auto=1'>${y.innerText}</a>`;
  }
} else {
  if(document.location.href.split('/')[4] == 'tags') {
    x = document.getElementById('app').getElementsByClassName('list-group-item'); /* Promo tags */
    for(i=0;i<x.length;i++) {
      y = x[i].getElementsByTagName('b')[0];
      y.outerHTML = `<a href='https://thehabbowh.org/eedb/search/${y.innerText}?&auto=1'>${y.outerHTML}</a>`;
    }
  } else {
    if(document.location.href.split('/')[4] == 'search') { /* Redirect EE:DB search results (this is as EE:DB pages use numerical IDs, not usernames) */
      if(new URLSearchParams(document.location.href).get('auto') == '1') {
        document.location.href = document.getElementById('app').getElementsByTagName('a')[0].href;
      }
    }
  }
}}
