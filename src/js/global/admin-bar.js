document.addEventListener('DOMContentLoaded', function () {
	const wpadminbar = document.getElementById('wpadminbar');
	const dcheader = document.getElementsByTagName('dc-header');
	// create <style> outside of function scope so that it gets updated when called onresize
	const style = document.createElement('style');

	const addTopMargin = function () {
		if (wpadminbar) {
			const adminbarHeight = wpadminbar.offsetHeight;
			style.innerText = `:host(dc-header) .navbar-top {margin-top:${adminbarHeight}px;}`;
			// return if style tag is already present, as it has been updated at this point
			if (dcheader[0].shadowRoot.lastChild && dcheader[0].shadowRoot.lastChild.tagName === 'STYLE') {
				return
			}
			dcheader[0].shadowRoot.appendChild(style);
		}
	};

	addTopMargin();
	window.onresize = addTopMargin;
});
