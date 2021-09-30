import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const BLOCK_EXAMPLE = '<!-- wp:query {\n\"query\":{\n    \"perPage\":\"3\",\n    \"pages\":0,\n    \"offset\":0,\n    \"postType\":\"an_event\",\n    \"tagIds\":[],\n    \"order\":\"desc\",\n    \"orderBy\":\"date\"\n    ,\"inherit\":false\n},\n\"displayLayout\":{\n    \"type\":\"flex\",\n    \"columns\":3\n    }\n} -->\n<div class=\"wp-block-query\">\n<!-- wp:query-title {\"type\":\"archive\"} \/-->\n\n<!-- wp:paragraph -->\n<p>Section description text might go here.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:post-template -->\n<!-- wp:group {\"layout\":{\"inherit\":false}} -->\n<div class=\"wp-block-group\"><!-- wp:post-title {\"isLink\":true} \/-->\n\n<!-- wp:code -->\n<pre class=\"wp-block-code\"><code>{Date}<\/code><\/pre>\n<!-- \/wp:code -->\n\n<!-- wp:code -->\n<pre class=\"wp-block-code\"><code>{Time}<\/code><\/pre>\n<!-- \/wp:code -->\n\n<!-- wp:code -->\n<pre class=\"wp-block-code\"><code>{Location}<\/code><\/pre>\n<!-- \/wp:code --><\/div>\n<!-- \/wp:group -->\n<!-- \/wp:post-template --><\/div>\n<!-- \/wp:query -->';

registerBlockVariation(
    'core/query',
    [
        {
            name: 'query-events',
            title: __( 'Events Grid', 'site-functionality' ),
            description: __( 'A grid of Events.', 'site-functionality' ),
            icon: 'calendar-alt',
            attributes: {
                className: 'events events__default',
                query: {
                    perPage: 3,
                    pages: 0,
                    offset: 0,
                    postType: "an_event",
                    tagIds: [],
                    order: "desc",
                    orderBy: "date",
                    inherit: false
                },
                displayLayout: {
                    type: "flex",
                    columns: 3
                }
            },
            usesContext: [ 'queryId', 'query' ],
            innerBlocks: [
                [ 'core/heading', 
                    {
                        placeholder: __( 'Add a Section Heading...', 'site-functionality' ),
                        attributes: {
                            level: 2,
                            className: 'section-title',
                        }
                    } 
                ],
                [ 'core/paragraph', 
                    {
                        placeholder: __( 'Add a short description...', 'site-functionality' ),
                        attributes: {
                            className: 'section-description',
                        }
                    }
                ],
                [
                    'core/post-template',
                    {},
                    [ 
                        [ 'core/post-title', 
                            {
                                className: 'entry-title, event-title',
                                isLink: true
                            } 
                        ], 
                        [ 'site-functionality/event-date', 
                            {
                                className: 'event-date',
                                attributes: {
                                    format: ''
                                }
                            }
                        ],
                        [ 'core/code', 
                            {
                                content: __( '{date}', 'site-functionality' ),
                                className: 'event-date'
                            }
                        ],
                        [ 'core/code', 
                            {
                                content: __( '{time}', 'site-functionality' ),
                                className: 'event-time'
                            }
                        ],
                        [ 'core/code', 
                            {
                                content: __( '{location}', 'site-functionality' ),
                                className: 'event-location'
                            }
                        ] 
                    ]
                ]
            ],
            scope: [ 'block' ]
        }

    ]
);