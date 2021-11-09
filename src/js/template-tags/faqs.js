(function (dc) {
	dc.faqs = {
		activeFAQ: null,
	};

	dc.faqs.initialize = function (elId) {
		const faqs = document.querySelectorAll(
			'.wp-block-site-functionality-faq'
		);

		faqs.forEach(function (item) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				dc.faqs.onFAQClicked(item.id);
			});
		});
	};

	dc.faqs.onFAQClicked = function (id) {
		if (dc.faqs.activeFAQ && dc.faqs.activeFAQ.id !== id) {
			dc.faqs.hideFAQ(dc.faqs.activeFAQ);
		}
		dc.faqs.activeFAQ = document.getElementById(id);
		dc.faqs.toggleFAQ(dc.faqs.activeFAQ);
	};

	dc.faqs.toggleFAQ = function (el) {
		el.classList.toggle('active');
	};

	dc.faqs.hideFAQ = function (el) {
		el.classList.remove('active');
	};
})((window.dc = window.dc || {}));

document.addEventListener('DOMContentLoaded', function () {
	window.dc.faqs.initialize();
});
