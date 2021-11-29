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

	dc.faqs.handleDeeplink = function() {
    var faqHash = hashquery.get('faq')
    if (faqHash) {
			console.log('handleDeepLink', faqHash)
      dc.faqs.onFAQClicked(faqHash)
      //console.log( 'document.getElementById(faqHash)', document.getElementById(faqHash) )
      setTimeout( function() {
        // not setting a await was causing some weird stuff!
        document.getElementById(faqHash).scrollIntoView()
      }, 500)
    }
  };


	// Make sure everything is loaded first.
	if (window) {
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
