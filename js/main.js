"use strict";

// Insert correct date for copyright-notice.

var copyrightNotice = document.getElementById('copyrightNotice');
var currentYear = new Date().getFullYear();
copyrightNotice.innerHTML = `© ${currentYear} Siegfried Allmer`;

