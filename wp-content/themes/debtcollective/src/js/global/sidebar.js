const Sticky = require('sticky-js');

const sticky = new Sticky('.sidebar');

const sidebar = document.querySelector('.sidebar');
sidebar.setAttribute('data-sticky-for', '1080');
sidebar.setAttribute('data-margin-top', '32');
sidebar.setAttribute('data-margin-bottom', '64');
