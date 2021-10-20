// const hashquery = require('./hashquery.js');

(function (dc) {
	dc.faqs = {
		activeFAQ: null,
	};

	dc.faqs.initialize = function (elId) {
		// const faqGroups = document.querySelectorAll(elId);
		// faqGroups.forEach(function (faqGroup) {
		// const faqs = document.querySelectorAll('.faq');
		const faqs = document.querySelectorAll(
			'.wp-block-site-functionality-faq'
		);

		faqs.forEach(function (item) {
			// dc.faqs.ids.push(item.id);
			item.addEventListener('click', function (e) {
				// hashquery.set('faq', item.id);
				dc.faqs.onFAQClicked(item.id);
			});
		});
	};

	dc.faqs.onFAQClicked = function (id) {
		if (dc.faqs.activeFAQ && dc.faqs.activeFAQ.id !== id) {
			dc.faqs.hideFAQ(dc.faqs.activeFAQ);
		}
		const currentFAQ = document.getElementById(id);
		dc.faqs.activeFAQ = currentFAQ;
		dc.faqs.showFAQ(currentFAQ);
		// currentFAQ.scrollIntoView({
		// 	behavior: 'smooth',
		// 	block: 'center',
		// });
	};

	dc.faqs.toggleFAQ = function (el) {
		el.classList.toggle('active');
	};

	dc.faqs.hideFAQ = function (el) {
		el.classList.remove('active');
	};

	dc.faqs.showFAQ = function (el) {
		el.classList.add('active');
	};
})((window.dc = window.dc || {}));

document.addEventListener('DOMContentLoaded', function () {
	window.dc.faqs.initialize('.faq-list');
});
