import Masonry from 'masonry-layout';

const purchaseAgreements = document.querySelector('.purchase-agreements');

if (purchaseAgreements) {
	const msnry = new Masonry(purchaseAgreements, {
		itemSelector: '.purchase-agreement',
		gutter: 18,
	});
}
