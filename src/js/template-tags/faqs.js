import * as hashquery from 'hashquery';

(function (dc) {
	dc.faqs = {
		activeFAQ: null,
	};

	dc.faqs.initialize = function (groupSelector, faqSelector) {
		const faqLists = document.querySelectorAll(groupSelector)
		faqLists.forEach(function (faqList, i) {
			const faqs = faqList.querySelectorAll(faqSelector)
			const internalLinks = faqList.querySelectorAll('.answer-wrapper a');
			internalLinks.forEach( function(link) {
				link.setAttribute('target', '_blank');
				link.addEventListener('click', function(e) {
					e.stopPropagation();
				})
			});
			faqs.forEach(function (aFaq, j) {
				aFaq.addEventListener('click', function (e) {
					e.preventDefault()
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
		const hash = window.location.hash
		const hashValues = hash.split('&')
		hashValues.forEach( function(hashVal) {
			const keyVal = hashVal.split('=')
			const key = keyVal[0].split('#')[1]
			const val = keyVal[1]
			if (key && key.indexOf('faqs') > -1) {
				const faqHash = hashquery.get(key)
				if( faqHash ) {
					if (document.getElementById(faqHash)) {
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
