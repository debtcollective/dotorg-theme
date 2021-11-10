const Sticky = require('sticky-js');

const sidebar = document.querySelector('.sidebar');
if (sidebar) {
	const sticky = new Sticky('.sidebar');
	sidebar.setAttribute('data-sticky-for', '1080');
	sidebar.setAttribute('data-margin-top', '128');
	sidebar.setAttribute('data-margin-bottom', '64');
}
