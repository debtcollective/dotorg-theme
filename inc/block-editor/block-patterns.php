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
          'description' => __( 'A pattern holding most of what folks need to build a content-rich page.'),
          'categories'  => ['pages'],
          'content'     => "<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"lede\"} -->\n<p class=\"lede\">We are building a movement to abolish debts and win a world where no one has to take on debt to survive.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>Our tactics for debt abolition include:</h3>\n<!-- /wp:heading -->\n\n<!-- wp:list {\"start\":12,\"reversed\":true,\"placeholder\":\"Add list items ...\",\"className\":\"inline-bullet-list\"} -->\n<ul reversed start=\"12\" class=\"inline-bullet-list\"><li>Pressuring the state to cancel debts and change policy through <a href=\"/what-we-do\" data-type=\"URL\" data-id=\"/what-we-do\">strategic organizing campaigns</a></li><li>Providing our members with a <a href=\"http://tools.debtcollective.org\">suite of debt dispute tools</a> that keep money in their pockets.</li><li>Purchasing debts in order to erase them in collaboration with the Rolling Jubilee Fund.</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:site-functionality/impactful-callout {\"className\":\"impactful-callout emphasis\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add content...\",\"className\":\"callout__content\"} -->\n<h3 class=\"callout__content\">Through our debt abolition debt buying process, we\'ve abolished <strong>$31,982,455.76</strong> in existing debt.</h3>\n<!-- /wp:heading -->\n<!-- /wp:site-functionality/impactful-callout -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"ptag\"} -->\n<p class=\"ptag\">The Rolling Jubilee Fund is a groundbreaking initiative that has abolished hundreds of millions of dollars of medical bills, payday loans, tuition debt, probation debt, judgement debt, and more belonging to tens of thousands of people across the country--while helping to educate the public about the predatory nature of debt and build debtor power. The debts abolished by the Rolling Jubilee Fund should not exist in the first place. The relief provided is an act of solidarity and a no-strings-attached gift.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>FAQs</h3>\n<!-- /wp:heading -->\n\n<!-- wp:site-functionality/faqs {\"recordId\":\"fc994f09-f5f9-4190-b51e-cac7891dc350\",\"anchor\":\"rolling-jubilee-faqs\"} -->\n<div class=\"wp-block-site-functionality-faqs faq-list\" id=\"rolling-jubilee-faqs\"><!-- wp:site-functionality/faq {\"question\":\"What is the Rolling Jubilee Fund?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie vehicula posuere. Phasellus aliquet nec ipsum eu condimentum. Praesent quis nulla id arcu luctus gravida in eget eros. Nam justo metus, commodo sed dictum nec, finibus sed metus. Vestibulum varius commodo tortor, a feugiat orci faucibus id. Praesent a nisi nibh. Aenean neque nibh, sollicitudin et venenatis sed, faucibus eget nisi. Vestibulum volutpat elit vitae commodo posuere. Mauris dui odio, tincidunt ut rhoncus quis, cursus nec eros. In rhoncus rhoncus ligula, ut accumsan ante tempus sollicitudin.\\u003c/p\\u003e\",\"anchor\":\"what-it-is\"} /-->\n\n<!-- wp:site-functionality/faq {\"question\":\"How does it work?\",\"answer\":\"\\u003cp\\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue velit, dapibus id tellus sed, ornare lobortis quam. Nullam elementum erat a dapibus gravida. Fusce dapibus neque ut imperdiet porttitor. Pellentesque eget lacus sit amet nibh mattis venenatis. Sed feugiat condimentum odio sed cursus. Mauris mollis, metus sed bibendum viverra, massa ex tristique est, sit amet laoreet sapien nisi vitae quam. Suspendisse vitae quam ornare lacus tincidunt varius non cursus magna. Morbi id porttitor quam, ut iaculis nunc. Sed convallis mollis magna a ornare. Pellentesque feugiat nunc vitae ligula volutpat, vitae lobortis mauris feugiat. Cras maximus tristique metus, ac eleifend urna. Ut at dictum urna. Nunc urna arcu, consectetur quis ante id, efficitur facilisis tellus.\\u003c/p\\u003e\"} /-->\n",
      )
  );

  \register_block_pattern(
      'debtcollective/landing-page',
      array(
          'title'       => __( 'Landing Page', 'debtcollective' ),
          'description' => __( 'A pattern holding most of what folks need to build a landing page.'),
          'categories'  => ['pages'],
          'content'     => "<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"lede\"} -->\n<p class=\"lede\">We are the country’s first debtors’ union. When people who have debt or unpaid bills unite, we can turn our individual financial burdens into a source of collective power. We do this by running campaigns that use our debts as leverage to fight financial exploitation so we can abolish unjust debts and win a world where everyone can thrive.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout jade\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Cancel Student Debt</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1463,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/student-debt-5.png\" alt=\"\" class=\"wp-image-1463\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout canary\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Abolish Bail Debt<br></h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1464,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-large tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/carceral-debt-1-1389x1080.png\" alt=\"\" class=\"wp-image-1464\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout salmon\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Tenant Power Toolkit</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1465,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/housing-debt.png\" alt=\"\" class=\"wp-image-1465\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph -->",
      )
  );

  \register_block_pattern(
      'debtcollective/tout-tryptic',
      array(
          'title'       => __( 'Tout Tryptic', 'debtcollective' ),
          'description' => __( 'A group of touts that at dektop screen sizes show up as three columns.', 'site-functionality'),
          'categories'  => ['components'],
          'content'     => "<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout salmon\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Build <br>a Union</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1448,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/handsup.png\" alt=\"\" class=\"wp-image-1448\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout canary\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Run Campaigns</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1452,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-large tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/crowd-1619x1080.png\" alt=\"\" class=\"wp-image-1452\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:site-functionality/tout {\"className\":\"tout link-tout jade\"} -->\n<!-- wp:heading {\"level\":3,\"placeholder\":\"Add Heading...\",\"className\":\"tout__title\"} -->\n<h3 class=\"tout__title\">Debt <br>Abolition</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"placeholder\":\"Add content...\",\"className\":\"tout__content\"} -->\n<p class=\"tout__content\"></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":1455,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"tout__image\"} -->\n<figure class=\"wp-block-image size-full tout__image\"><img src=\"https://wordpress-test.debtcollective.org/wp-content/uploads/2021/12/fishies.png\" alt=\"\" class=\"wp-image-1455\"/></figure>\n<!-- /wp:image -->\n<!-- /wp:site-functionality/tout --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->",
      )
  );

	\register_block_pattern(
      'debtcollective/three-points',
      array(
				'title'       => __( 'Three Points', 'debtcollective' ),
				'description' => __( 'Three bits of plain conten that at dektop screen sizes show up as three columns.'),
				'categories'  => ['components'],
				'content'     => "<!-- wp:columns {\"className\":\"\\\\\\u0022wp-block-columns\\\\\\u0022\"} -->\n<div class=\"wp-block-columns \\\&quot;wp-block-columns\\\&quot;\"><!-- wp:column {\"className\":\"\\\\\\u0022wp-block-column\\\\\\u0022\"} -->\n<div class=\"wp-block-column \\\&quot;wp-block-column\\\&quot;\"><!-- wp:heading -->\n\\n<h4><strong>Join us via social media</strong></h4>\\n\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>\\n<p class=\"\\\&quot;ptag\\\&quot;\">Some text here about what use cases would be best fulfilled by contacting us via social media. Perhaps members of the press and things like that? People who want to support and amplify but maybe not get too involved?</p>\\n</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:social-links {\"className\":\"\\\\\\u0022wp-block-social-links\\\\\\u0022\"} -->\n<ul class=\"wp-block-social-links \\\&quot;wp-block-social-links\\\&quot;\"><!-- wp:social-link /-->\n\n<!-- wp:social-link /-->\n\n<!-- wp:social-link /--></ul>\n<!-- /wp:social-links --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"className\":\"\\\\\\u0022wp-block-column\\\\\\u0022\"} -->\n<div class=\"wp-block-column \\\&quot;wp-block-column\\\&quot;\"><!-- wp:heading -->\n\\n<h4>Engage with our community</h4>\\n\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>\\n<p class=\"\\\&quot;ptag\\\&quot;\">Have specific questions about policy minutiae, your debt or other things? We’re working to make our community a thriving place for discussion and mutual support in relation to the debt crisis.</p>\\n</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons {\"className\":\"\\\\\\u0022wp-block-buttons\\\\\\u0022\"} -->\n<div class=\"wp-block-buttons \\\&quot;wp-block-buttons\\\&quot;\"><!-- wp:button {\"className\":\"\\\\\\u0022wp-block-button\"} -->\n\\n<div class=\\\"wp-block-button is-style-fill\\\"><a class=\\\"wp-block-button__link\\\">Join the Union</a></div>\\n\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->\n\n<!-- wp:paragraph -->\n<p>\\n<p></p>\\n</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"className\":\"\\\\\\u0022wp-block-column\\\\\\u0022\"} -->\n<div class=\"wp-block-column \\\&quot;wp-block-column\\\&quot;\"><!-- wp:heading -->\n\\n<h4>Having trouble?We’re here to help.</h4>\\n\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>\\n<p>If you are having problems joining, or having issues with your account reach out to us via Chatwoot, and members of our staff will respond within 24 hrs.</p>\\n</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons {\"className\":\"\\\\\\u0022wp-block-buttons\\\\\\u0022\"} -->\n<div class=\"wp-block-buttons \\\&quot;wp-block-buttons\\\&quot;\"><!-- wp:button {\"className\":\"\\\\\\u0022wp-block-button\"} -->\n\\n<div class=\\\"wp-block-button chatwoot\\\"><a class=\\\"wp-block-button__link\\\" rel=\\\"help\\\">Contact Our Staff</a></div>\\n\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n",
      )
  );

  \register_block_pattern(
      'debtcollective/four-points',
      array(
				'title'       => __( 'Four Points', 'debtcollective' ),
				'description' => __( 'Four bits of plain content that  at dektop screen sizes show up as three columns.'),
				'categories'  => ['components'],
				'content'     => "",
      )
  );

}

add_action( 'init', __NAMESPACE__ . '\register_block_patterns' );
