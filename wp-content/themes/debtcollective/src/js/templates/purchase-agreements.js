import Masonry from 'masonry-layout';

const purchaseAgreements = document.querySelector('.purchase-agreements');

const msnry = new Masonry(purchaseAgreements, {
	itemSelector: '.purchase-agreement',
	// columnWidth: 36,
	gutter: 22,
});
