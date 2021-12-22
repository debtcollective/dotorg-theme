import Masonry from 'masonry-layout';

const purchaseAgreements = document.querySelector('.purchase-agreements');

if (purchaseAgreements) {
	const msnry = new Masonry(purchaseAgreements, {
		itemSelector: '.purchase-agreement',
		// columnWidth: 36,
		gutter: 18,
	});
}
