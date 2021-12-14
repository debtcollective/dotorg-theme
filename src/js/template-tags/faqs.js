import * as hashquery from 'hashquery';

(function (dc) {
	dc.faqs = {
		activeFAQ: null,
	};

	dc.faqs.initialize = function (groupSelector, faqSelector) {
		const faqLists = document.querySelectorAll(groupSelector)
		faqLists.forEach(function (faqList, i) {
			const faqs = faqList.querySelectorAll(faqSelector)
			faqs.forEach(function (aFaq, j) {
				aFaq.addEventListener('click', function (e) {
					e.preventDefault();
					hashquery.set(faqList.id || 'faq', aFaq.id)
					dc.faqs.onFAQClicked(aFaq.id);
				});
			});
		});
		dc.faqs.handleDeeplink()
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

	// a bit convoluted, but it allows us to have multiple faq elements per page (for example in tabs groupd)
	dc.faqs.handleDeeplink = function() {
		var hash = window.location.hash
		var hashValues = hash.split('&')
		hashValues.forEach( function(hashVal) {
			var keyVal = hashVal.split('=')
			var key = keyVal[0].split('#')[1]
			var val = keyVal[1]
			if (key && key.indexOf('faqs') > -1) {
				var faqHash = hashquery.get(key)
				if( faqHash ) {
					var faqElement = document.getElementById(faqHash)
					if (faqElement) {
						dc.faqs.onFAQClicked(val)
						setTimeout( function() {
			        // not setting a await was causing some weird stuff!
			        document.getElementById(faqHash).scrollIntoView()
			      }, 500)
					}
				}
			}
		})
  };


	// Make sure everything is loaded first.
	if (window && document.querySelectorAll('.faq-list').length > 0) {
		if (
			( 'complete' === document.readyState ||
				'loading' !== document.readyState ) &&
			! document.documentElement.doScroll
		) {
			dc.faqs.initialize('.faq-list', '.wp-block-site-functionality-faq');
		} else {
			document.addEventListener( 'DOMContentLoaded', function() {
				dc.faqs.initialize('.faq-list', '.wp-block-site-functionality-faq');
			});
		}
	}

})((window.dc = window.dc || {}, hashquery));
