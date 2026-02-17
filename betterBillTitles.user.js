// ==UserScript==
// @name			Better statute & bill titles on theHabboWH.org
// @description		Adds much more descriptive titles to bill & statute pages on theHabboWH.org
// @match			https://thehabbowh.org/slr/*
// @match			https://thehabbowh.org/legislation/index
// @match			https://thehabbowh.org/legislation/show/*
// @namespace		net.libreDucks
// @grant			none
// @version			0.1
// @license			Unlicense
// @author			NoahC500
// ==/UserScript==
loc = document.location.href.split('/')
if (loc[3] == 'legislation') {
	if (loc[4] == 'index') {
		/* Titles for all bill list pages, dynamically changing based on tab */
		document.title = "Submitted Bills | " + document.title.split(' | ')[document.title.split(' | ').length - 1];
		strs = ['Submitted Bills', 'Bills Under Vote', 'Bills Failed Vote', 'Bills Passed Vote', 'Draft Bills'];
		for (let i = 1; i < document.getElementsByTagName('button').length; i++) {
			document.getElementsByTagName('button')[i].addEventListener('click', function(e) {
				document.title = strs[i - 1] + " | " + document.title.split(' | ')[document.title.split(' | ').length - 1];
			})
		}
	} else {
		/* Adds titles for SIs */
		if (document.getElementById('app').getElementsByTagName('h5')[1].innerText.toLowerCase().includes('order')) {
			document.title = document.getElementById('app').getElementsByTagName('h5')[1].innerText.split(' - ')[1].replace(/ Act \d{4}| \d{4}| Act| Bill| Order/g, '') + " Order | Viewing Bill | " + document.title.split(' | ')[document.title.split(' | ').length - 1];
		} else {
			/* Adds titles for bills */
			document.title = document.getElementById('app').getElementsByTagName('h5')[1].innerText.split(' - ')[1].replace(/ Act \d{4}| \d{4}| Act| Bill/g, '') + " Bill | Viewing Bill | " + document.title.split(' | ')[document.title.split(' | ').length - 1];
			if (loc[5] == 1) {
				/* Fixes random broken image on CONST */
				document.getElementById('app').getElementsByTagName('p')[0].outerHTML = document.getElementById('app').getElementsByTagName('p')[0].outerHTML.replace(/background-color:.*?;/, '');
			}
		}
	}
} else {
	if (loc[3] == 'slr') {
		/* Adds titles for statute */
		if (loc[5] == 1) {
			/* CONST formatting is different, so adds title manually, also fixes broken image as above */
			document.title = "The Constitution | " + document.title;
			document.getElementById('app').getElementsByTagName('p')[0].outerHTML = document.getElementById('app').getElementsByTagName('p')[0].outerHTML.replace(/background-color:.*?;/, '');
		} else {
			if (loc[4] == 'index') {
				document.title = "SLR | " + document.title.split(' | ')[document.title.split(' | ').length - 1]
			} else {
				for (let i = 0; i < document.getElementsByTagName('h4').length; i++) {
					if (document.getElementsByTagName('h4')[i].className == 'mb-0') {
						document.title = document.getElementsByTagName('h4')[i].innerText + " | " + document.title
					}
				}
			}
		}
	}
}