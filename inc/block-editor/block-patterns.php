<?php
/**
 * Block Patterns
 *
 * A place to put custom block patterns.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/
 *
 * @package DebtCollective
 */
namespace DebtCollective\Inc;

/**
 * Regster custom patterns
 *
 * @return void
 */
function register_block_patterns() {

	\register_block_pattern_category(
		'components',
		[
			'label' => __( 'Components', 'debtcollective' ),
		]
	);

	\register_block_pattern_category(
		'pages',
		[
			'label' => __( 'Pages', 'debtcollective' ),
		]
	);

  \register_block_pattern(
      'debtcollective/longform-content',
      array(
          'title'       => __( 'Longform Content', 'debtcollective' ),
          'description' => __( 'A pattern holding most of what folks need to build a content-rich page.' ),
          'categories'  => ['pages'],
          'content'     => "<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"lede\"} -->\n<p class=\"lede\">We are building a movement to abolish debts and win a world where no one has to take on debt to survive.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>Our tactics for debt abolition include:</h3>\n<!-- /wp:heading -->\n\n<!-- wp:list {\"start\":12,\"reversed\":true,\"placeholder\":\"Add list items ...\",\"className\":\"inline-bullet-list\"} -->\n<ul reversed start=\"12\" class=\"inline-bullet-list\"><li>Pressuring the state to cancel debts and change policy through <a href=\"/what-we-do\" data-type=\"URL\" data-id=\"/what-we-do\">strategic organizing campaigns</a></li><li>Providing our members with a <a href=\"http://tools.debtcollective.org\">suite of debt dispute tools</a> that keep money in their pockets.</li><li>Purchasing debts in order to erase them in collaboration with the Rolling Jubilee Fund.</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:site-functionality/impactful-callout {\"className\":\"impactful-callout emphasis\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add content...\",\"className\":\"callout__content\"} -->\n<h3 class=\"callout__content\">Through our debt abolition debt buying process, we\'ve abolished <strong>$31,982,455.76</strong> in existing debt.</h3>\n<!-- /wp:heading -->\n<!-- /wp:site-functionality/impactful-callout -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"ptag\"} -->\n<p class=\"ptag\">The Rolling Jubilee Fund is a groundbreaking initiative that has abolished hundreds of millions of dollars of medical bills, payday loans, tuition debt, probation debt, judgement debt, and more belonging to tens of thousands of people across the country--while helping to educate the public about the predatory nature of debt and build debtor power. The debts abolished by the Rolling Jubilee Fund should not exist in the first place. The relief provided is an act of solidarity and a no-strings-attached gift.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>FAQs</h3>\n<!-- /wp:heading -->\n\n<!-- wp:site-functionality/faqs {\"recordId\":\"fc994f09-f5f9-4190-b51e-cac7891dc350\",\"anchor\":\"rolling-jubilee-faqs\"} -->\n<div class=\"wp-block-site-functionality-faqs faq-list\" id=\"rolling-jubilee-faqs\"><!-- wp:site-functionality/faq {\"question\":\"What is the Rolling Jubilee Fund?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie vehicula posuere. Phasellus aliquet nec ipsum eu condimentum. Praesent quis nulla id arcu luctus gravida in eget eros. Nam justo metus, commodo sed dictum nec, finibus sed metus. Vestibulum varius commodo tortor, a feugiat orci faucibus id. Praesent a nisi nibh. Aenean neque nibh, sollicitudin et venenatis sed, faucibus eget nisi. Vestibulum volutpat elit vitae commodo posuere. Mauris dui odio, tincidunt ut rhoncus quis, cursus nec eros. In rhoncus rhoncus ligula, ut accumsan ante tempus sollicitudin.\\u003c/p\\u003e\",\"anchor\":\"what-it-is\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"How does it work?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, dapibus id tellus sed, ornare lobortis quam. Nullam elementum erat a dapibus gravida. Fusce dapibus neque ut imperdiet porttitor. Pellentesque eget lacus sit amet nibh mattis venenatis. Sed feugiat condimentum odio sed cursus. Mauris mollis, metus sed bibendum viverra, massa ex tristique est, sit amet laoreet sapien nisi vitae quam. Suspendisse vitae quam ornare lacus tincidunt varius non cursus magna. Morbi id porttitor quam, ut iaculis nunc. Sed convallis mollis magna a ornare. Pellentesque feugiat nunc vitae ligula volutpat, vitae lobortis mauris feugiat. Cras maximus tristique metus, ac eleifend urna. Ut at dictum urna. Nunc urna arcu, consectetur quis ante id, efficitur facilisis tellus.\\u003c/p\\u003e\"} /-->\n",
      )
  );

  \register_block_pattern(
      'debtcollective/landing-page',
      array(
          'title'       => __( 'Landing Page', 'debtcollective' ),
          'description' => __( 'A pattern holding most of what folks need to build a landing page.' ),
          'categories'  => ['pages'],
          'content'     => "<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"lede\"} -->\n<p class=\"lede\">We are the country’s first debtors’ union. When people who have debt or unpaid bills unite, we can turn our individual financial burdens into a source of collective power. We do this by running campaigns that use our debts as leverage to fight financial exploitation so we can abolish unjust debts and win a world where everyone can thrive.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout jade\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Cancel Student Debt</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1463,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/student-debt-5.png\" alt=\"\" class=\"wp-image-1463\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout canary\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Abolish Bail Debt<br></h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1464,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-large tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/carceral-debt-1-1389x1080.png\" alt=\"\" class=\"wp-image-1464\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout salmon\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Tenant Power Toolkit</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1465,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/housing-debt.png\" alt=\"\" class=\"wp-image-1465\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph -->",
      )
  );

  \register_block_pattern(
      'debtcollective/tout-tryptic',
      array(
          'title'       => __( 'Tout Tryptic', 'debtcollective' ),
          'description' => __( 'A group of touts that at dektop screen sizes show up as three columns.', 'site-functionality' ),
          'categories'  => ['components'],
          'content'     => "<!-- wp:heading {\"level\":3} -->\n<h3>FAQs</h3>\n<!-- /wp:heading -->\n\n<!-- wp:site-functionality/faqs {\"recordId\":\"d069895c-6a31-4940-adf9-4df0ada72b58\",\"anchor\":\"rolling-jubilee-faqs\"} -->\n<div class=\"wp-block-site-functionality-faqs faq-list\" id=\"rolling-jubilee-faqs\"><!-- wp:site-functionality/faq {\"question\":\"What is the Rolling Jubilee Fund?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie vehicula posuere. Phasellus aliquet nec ipsum eu condimentum. Praesent quis nulla id arcu luctus gravida in eget eros. Nam justo metus, commodo sed dictum nec, finibus sed metus. Vestibulum varius commodo tortor, a feugiat orci faucibus id. Praesent a nisi nibh. Aenean neque nibh, sollicitudin et venenatis sed, faucibus eget nisi. Vestibulum volutpat elit vitae commodo posuere. Mauris dui odio, tincidunt ut rhoncus quis, cursus nec eros. In rhoncus rhoncus ligula, ut accumsan ante tempus sollicitudin.\\u003c/p\\u003e\",\"anchor\":\"what-it-is\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"How does it work?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, dapibus id tellus sed, ornare lobortis quam. Nullam elementum erat a dapibus gravida. Fusce dapibus neque ut imperdiet porttitor. Pellentesque eget lacus sit amet nibh mattis venenatis. Sed feugiat condimentum odio sed cursus. Mauris mollis, metus sed bibendum viverra, massa ex tristique est, sit amet laoreet sapien nisi vitae quam. Suspendisse vitae quam ornare lacus tincidunt varius non cursus magna. Morbi id porttitor quam, ut iaculis nunc. Sed convallis mollis magna a ornare. Pellentesque feugiat nunc vitae ligula volutpat, vitae lobortis mauris feugiat. Cras maximus tristique metus, ac eleifend urna. Ut at dictum urna. Nunc urna arcu, consectetur quis ante id, efficitur facilisis tellus.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Does the Debt Collective think that cancelling debt is how we can win?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies sodales orci. Aenean nec facilisis dolor. Morbi luctus lectus sit amet scelerisque placerat. Maecenas sed lacus urna. Nullam ullamcorper enim at tempor convallis. Aenean porta feugiat ullamcorper. Aenean faucibus fermentum pulvinar. Cras faucibus, libero sed tristique lobortis, purus libero tempor elit, eget accumsan risus augue at neque. Phasellus vehicula lectus velit, at molestie nulla mattis a. Praesent interdum orci ac fermentum facilisis. Cras luctus eget lectus non semper.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Can you abolish my debt or the debt of a specific community or place?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex enim, ac dictum lacus finibus vel. Nam et elit sagittis elit lobortis molestie vitae in leo. Nulla eu risus dolor. Mauris gravida aliquam odio et cursus. Vivamus luctus mauris eget vulputate finibus. Quisque ut est dapibus, facilisis diam sed, posuere diam. Fusce ut nibh in velit dictum eleifend a imperdiet lorem. Nullam sollicitudin eget dui vitae luctus. Aenean vel condimentum est. Duis et risus eu diam accumsan scelerisque. Donec neque justo, aliquet scelerisque accumsan eu, vehicula at justo. Aliquam sit amet rhoncus lacus. Ut tristique semper velit venenatis egestas. Etiam id risus vel elit bibendum blandit.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Does this create a tax burden for debtors?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus condimentum nisi non ornare. Ut non convallis sapien. Suspendisse eu nibh sem. Maecenas tempor felis eget porta imperdiet. Vivamus ante nulla, maximus eget dolor ac, euismod rhoncus nulla. Quisque posuere metus quis dictum cursus. Vivamus efficitur porttitor leo, eget maximus quam semper non. Ut lobortis pellentesque vulputate. Aenean id mi volutpat, auctor est sed, dictum tellus. Nulla risus felis, hendrerit at luctus eu, ullamcorper vitae libero. Ut dictum finibus metus porttitor pretium.\\u003c/p\\u003e\\u003cp\\u003eThere could be more text\\u003c/p\\u003e\"} /--></div>\n<!-- /wp:site-functionality/faqs -->",
      )
  );

	\register_block_pattern(
      'debtcollective/three-points',
      array(
				'title'       => __( 'Three Points', 'debtcollective' ),
				'description' => __( 'Three bits of plain conten that at dektop screen sizes show up as three columns.' ),
				'categories'  => ['components'],
				'content'     => "<!-- wp:group {\"tagName\":\"section\",\"className\":\"grid-three\"} -->\n<section id=\"help-touts\" class=\"wp-block-group three-points\"><!-- wp:group {\"tagName\":\"article\"} -->\n<article class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>Join us via social media</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"ptag\"} -->\n<p class=\"ptag\">dwedewdSome text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:social-links -->\n<ul class=\"wp-block-social-links\"><!-- wp:social-link {\"service\":\"twitter\"} /-->\n\n<!-- wp:social-link {\"service\":\"instagram\"} /-->\n\n<!-- wp:social-link {\"service\":\"facebook\"} /--></ul>\n<!-- /wp:social-links --></article>\n<!-- /wp:group -->\n\n<!-- wp:group {\"tagName\":\"article\"} -->\n<article class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>Engage with our community</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"ptag\"} -->\n<p class=\"ptag\">Have specific questions about policy minutiae, your debt or other things? We’re working to make our community a thriving place for discussion and mutual support in relation to the debt crisis.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link\">Join the Union</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></article>\n<!-- /wp:group -->\n\n<!-- wp:group {\"tagName\":\"article\"} -->\n<article class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>Having trouble?We’re here to help.</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"ptag\"} -->\n<p class=\"ptag\">If you are having problems joining, or having issues with your account reach out to us via Chatwoot, and members of our staff will respond within 24 hrs.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"className\":\"chatwoot\"} -->\n<div class=\"wp-block-button chatwoot\"><a class=\"wp-block-button__link\" rel=\"help\">Contact our Staff</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></article>\n<!-- /wp:group -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></section>\n<!-- /wp:group -->",
      )
  );

  \register_block_pattern(
      'debtcollective/four-points',
      array(
				'title'       => __( 'Four Points', 'debtcollective' ),
				'description' => __( 'Four bits of plain content that  at dektop screen sizes show up as three columns.' ),
				'categories'  => ['components'],
				'content'     => "<!-- wp:group {\"tagName\":\"section\",\"className\":\"four-points\"} -->\n<section id=\"donation-impact\" class=\"wp-block-group four-points\"><!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>We Build a Member-Led Union</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Some text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n\n<!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>We Run Campaigns</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Some text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n\n<!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>Build Tools for Debt Dispute</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Some text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n\n<!-- wp:group -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"level\":3} -->\n<h3>Organize Actions</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Some text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group --></section>\n<!-- /wp:group -->",
      )
  );

	\register_block_pattern(
		'debtcollective/faqs',
		array(
			'title'					=> __( 'FAQs', 'debtcollective' ),
			'description'		=> __( 'Frequently asked questions' ),
			'categories'  	=> ['components'],
			'content'				=> "<!-- wp:heading {\"level\":3} -->\n<h3>FAQs</h3>\n<!-- /wp:heading -->\n\n<!-- wp:site-functionality/faqs {\"recordId\":\"d069895c-6a31-4940-adf9-4df0ada72b58\",\"anchor\":\"rolling-jubilee-faqs\"} -->\n<div class=\"wp-block-site-functionality-faqs faq-list\" id=\"rolling-jubilee-faqs\"><!-- wp:site-functionality/faq {\"question\":\"What is the Rolling Jubilee Fund?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie vehicula posuere. Phasellus aliquet nec ipsum eu condimentum. Praesent quis nulla id arcu luctus gravida in eget eros. Nam justo metus, commodo sed dictum nec, finibus sed metus. Vestibulum varius commodo tortor, a feugiat orci faucibus id. Praesent a nisi nibh. Aenean neque nibh, sollicitudin et venenatis sed, faucibus eget nisi. Vestibulum volutpat elit vitae commodo posuere. Mauris dui odio, tincidunt ut rhoncus quis, cursus nec eros. In rhoncus rhoncus ligula, ut accumsan ante tempus sollicitudin.\\u003c/p\\u003e\",\"anchor\":\"what-it-is\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"How does it work?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, dapibus id tellus sed, ornare lobortis quam. Nullam elementum erat a dapibus gravida. Fusce dapibus neque ut imperdiet porttitor. Pellentesque eget lacus sit amet nibh mattis venenatis. Sed feugiat condimentum odio sed cursus. Mauris mollis, metus sed bibendum viverra, massa ex tristique est, sit amet laoreet sapien nisi vitae quam. Suspendisse vitae quam ornare lacus tincidunt varius non cursus magna. Morbi id porttitor quam, ut iaculis nunc. Sed convallis mollis magna a ornare. Pellentesque feugiat nunc vitae ligula volutpat, vitae lobortis mauris feugiat. Cras maximus tristique metus, ac eleifend urna. Ut at dictum urna. Nunc urna arcu, consectetur quis ante id, efficitur facilisis tellus.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Does the Debt Collective think that cancelling debt is how we can win?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies sodales orci. Aenean nec facilisis dolor. Morbi luctus lectus sit amet scelerisque placerat. Maecenas sed lacus urna. Nullam ullamcorper enim at tempor convallis. Aenean porta feugiat ullamcorper. Aenean faucibus fermentum pulvinar. Cras faucibus, libero sed tristique lobortis, purus libero tempor elit, eget accumsan risus augue at neque. Phasellus vehicula lectus velit, at molestie nulla mattis a. Praesent interdum orci ac fermentum facilisis. Cras luctus eget lectus non semper.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Can you abolish my debt or the debt of a specific community or place?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex enim, ac dictum lacus finibus vel. Nam et elit sagittis elit lobortis molestie vitae in leo. Nulla eu risus dolor. Mauris gravida aliquam odio et cursus. Vivamus luctus mauris eget vulputate finibus. Quisque ut est dapibus, facilisis diam sed, posuere diam. Fusce ut nibh in velit dictum eleifend a imperdiet lorem. Nullam sollicitudin eget dui vitae luctus. Aenean vel condimentum est. Duis et risus eu diam accumsan scelerisque. Donec neque justo, aliquet scelerisque accumsan eu, vehicula at justo. Aliquam sit amet rhoncus lacus. Ut tristique semper velit venenatis egestas. Etiam id risus vel elit bibendum blandit.\\u003c/p\\u003e\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"Does this create a tax burden for debtors?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus condimentum nisi non ornare. Ut non convallis sapien. Suspendisse eu nibh sem. Maecenas tempor felis eget porta imperdiet. Vivamus ante nulla, maximus eget dolor ac, euismod rhoncus nulla. Quisque posuere metus quis dictum cursus. Vivamus efficitur porttitor leo, eget maximus quam semper non. Ut lobortis pellentesque vulputate. Aenean id mi volutpat, auctor est sed, dictum tellus. Nulla risus felis, hendrerit at luctus eu, ullamcorper vitae libero. Ut dictum finibus metus porttitor pretium.\\u003c/p\\u003e\\u003cp\\u003eThere could be more text\\u003c/p\\u003e\"} /--></div>\n<!-- /wp:site-functionality/faqs -->"
		)
	);

}

add_action( 'init', __NAMESPACE__ . '\register_block_patterns' );

remove_theme_support( 'core-block-patterns' );
