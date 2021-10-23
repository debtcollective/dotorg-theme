!function(e){var t={};function o(c){if(t[c])return t[c].exports;var l=t[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(c,l,function(t){return e[t]}.bind(null,l));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=15)}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.lodash},,,,,,,,,,,,,function(e,t,o){o(18),e.exports=o(17)},function(e,t){},function(e,t,o){"use strict";o.r(t)},function(e,t,o){"use strict";o.r(t);var c=o(2),l=o.n(c);const{addFilter:n}=wp.hooks;wp.hooks.addFilter("blocks.registerBlockType","debtcollective/social-links",(function(e,t){return"core/social-links"!==t?e:l.a.assign({},e,{style:l.a.assign({},e.style,"")})})),o(16);var a=o(1),i=o(0);[{name:"banner-media",title:Object(i.__)("Media Banner","debtcollective"),description:Object(i.__)("A banner that displays a media item on the left and text on the right.","debtcollective"),keywords:[Object(i.__)("banner","debtcollective"),Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective")],category:"components",attributes:{className:"banner",backgroundColor:"canary",verticalAlignment:"center"},innerBlocks:[["core/column",{verticalAlignment:"top"},[["core/embed",{type:"video",providerNameSlug:"youtube",responsive:!0,className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media"}]]],["core/column",{verticalAlignment:"top"},[["core/heading",{level:2,className:"banner__heading",placeholder:Object(i.__)("Add Heading...","debtcollective")}],["core/paragraph",{className:"banner__content",placeholder:Object(i.__)("Add content...","debtcollective")}]]]],example:{attributes:{className:"banner",backgroundColor:"canary"},innerBlocks:[{name:"core/column",attributes:{width:"33.33%",verticalAlignment:"top"},innerBlocks:[{name:"core/embed",attributes:{type:"video",providerNameSlug:"youtube",responsive:!0,className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media",url:"https://youtu.be/PyLDFT2GW-A"}}]},{name:"core/column",attributes:{width:"66.66%",verticalAlignment:"top"},innerBlocks:[{name:"core/heading",attributes:{level:2,className:"banner__heading",placeholder:Object(i.__)("Our Movement Has <em>Abolished</em> More Than <em>$2.8 Billion</em>","debtcollective")}},{name:"core/paragraph",attributes:{className:"banner__content",placeholder:Object(i.__)("in student debt, medical debt, payday loans, probation debt and credit card debt. Our student debt campaign put full student debt cancellation and free public college on the political map.","debtcollective")}}]}]}}].forEach(e=>{Object(a.registerBlockVariation)("core/columns",e)}),[{name:"btn",title:Object(i.__)("Button","debtcollective"),description:Object(i.__)("Add a standard button.","debtcollective"),keywords:[Object(i.__)("component","debtcollective"),Object(i.__)("link","debtcollective"),Object(i.__)("action","debtcollective")],parent:!1,isDefault:!0,attributes:{placeholder:Object(i.__)("Add Button Text...","debtcollective"),className:"btn"},styles:[],scope:["block","inserter","transform"],isActive:(e,t)=>e.className===t.className},{name:"button-minor",title:Object(i.__)("Minor Button","debtcollective"),description:Object(i.__)("Add a secondary button.","debtcollective"),keywords:[Object(i.__)("component","debtcollective"),Object(i.__)("link","debtcollective"),Object(i.__)("action","debtcollective")],attributes:{placeholder:Object(i.__)("Add Button Text...","debtcollective"),className:"btn minor"},styles:[],scope:["block","inserter","transform"],isActive:(e,t)=>e.className===t.className},{name:"button-jade",title:Object(i.__)("Jade Button","debtcollective"),description:Object(i.__)("Add a jade-colored button.","debtcollective"),keywords:[Object(i.__)("component","debtcollective"),Object(i.__)("link","debtcollective"),Object(i.__)("action","debtcollective")],attributes:{placeholder:Object(i.__)("Add Button Text...","debtcollective"),className:"btn jade"},styles:[],scope:["block","inserter","transform"],isActive:(e,t)=>e.className===t.className},{name:"button-outlined",title:Object(i.__)("Outlined Button","debtcollective"),description:Object(i.__)("Add a white button with outline.","debtcollective"),keywords:[Object(i.__)("component","debtcollective"),Object(i.__)("link","debtcollective"),Object(i.__)("action","debtcollective")],attributes:{placeholder:Object(i.__)("Add Button Text...","debtcollective"),className:"btn outline"},styles:[],scope:["block","inserter","transform"],isActive:(e,t)=>e.className===t.className}].forEach(e=>{Object(a.registerBlockVariation)("core/button",e)}),Object(i.__)("Impactful Callout","debtcollective"),Object(i.__)("Add a fullwidth callout.","debtcollective"),Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective"),Object(i.__)("callout","debtcollective"),Object(i.__)("Add content...","debtcollective"),Object(i.__)("Add Heading...","debtcollective"),Object(i.__)("Add content...","debtcollective"),Object(i.__)("Through Our Debt Abolition Debt Buying Process We’ve abolished","debtcollective"),Object(i.__)("$31,982,455.76","debtcollective"),Object(i.__)("In Assorted medical / BLAH BLAH.","debtcollective"),Object(a.registerBlockCollection)("debtcollective",{title:Object(i.__)("Debt Collective","debtcollective")}),[{name:"hero",title:Object(i.__)("Hero","debtcollective"),description:Object(i.__)("Add a hero with background image.","debtcollective"),keywords:[Object(i.__)("banner","debtcollective"),Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective")],category:"components",keywords:[Object(i.__)("banner","debtcollective"),Object(i.__)("hero","debtcollective"),Object(i.__)("image","debtcollective")],icon:"format-image",attributes:{className:"hero",contentPosition:"top left",url:"https://wordpress-cdn-test.debtcollective.org/wp-content/uploads/2021/08/24080707/hero-1.png",id:307,dimRatio:0},innerBlocks:[["core/heading",{className:"hero__heading",level:1,placeholder:Object(i.__)("Add Heading...","debtcollective"),content:Object(i.__)("Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>","debtcollective"),textColor:"white"}],["core/heading",{className:"hero__content",level:3,placeholder:Object(i.__)("Add content...","debtcollective"),content:Object(i.__)("We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective"),textColor:"white"}],["core/buttons",{className:"buttons"},[["core/button",{className:"hero__button button",placeholder:Object(i.__)("Add Button Text...","debtcollective"),backgroundColor:"emphasis",textColor:"white",content:Object(i.__)("Join the Union","debtcollective")}],["core/button",{className:"hero__button button--minor",placeholder:Object(i.__)("Add Button Text...","debtcollective"),backgroundColor:"white",textColor:"grey-dark",content:Object(i.__)("Membership Benefits","debtcollective")}]]]],example:{attributes:{className:"hero",contentPosition:"top left",dimRatio:0,overlayColor:"jade",url:"https://cdn.pixabay.com/photo/2018/03/02/20/38/fantasy-3194227_960_720.jpg"},innerBlocks:[{name:"core/heading",attributes:{content:Object(i.__)("Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.","debtcollective"),className:"hero__heading",level:1,textColor:"white"}},{name:"core/heading",attributes:{content:Object(i.__)("We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective"),className:"hero__heading",level:3,textColor:"white"}},{name:"core/buttons",innerBlocks:[{name:"core/button",attributes:{content:Object(i.__)("Join the Union","debtcollective"),className:"hero__button btn",backgroundColor:"emphasis",textColor:"white"}},{name:"core/button",attributes:{content:Object(i.__)("Membership Benefits","debtcollective"),className:"hero__button button--minor",backgroundColor:"white",textColor:"grey-dark"}}]}]}},{name:"hero-solid",title:Object(i.__)("Solid Hero","debtcollective"),description:Object(i.__)("Add a hero with background color.","debtcollective"),category:"components",keywords:[Object(i.__)("banner","debtcollective"),Object(i.__)("hero","debtcollective"),Object(i.__)("image","debtcollective")],icon:"format-image",attributes:{className:"hero-solid",contentPosition:"top left",overlayColor:"canary",backgroundColor:"canary"},innerBlocks:[["core/heading",{className:"hero__heading",level:1,placeholder:Object(i.__)("Add Heading...","debtcollective"),content:Object(i.__)("Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>","debtcollective"),textColor:"grey-darker"}],["core/heading",{className:"hero__content",level:3,placeholder:Object(i.__)("Add content...","debtcollective"),content:Object(i.__)("We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective"),textColor:"grey-darker"}]],example:{attributes:{className:"hero",contentPosition:"top left",overlayColor:"canary",backgroundColor:"canary"},innerBlocks:[{name:"core/heading",attributes:{content:Object(i.__)("Housing Debt","debtcollective"),className:"hero__heading",level:1,textColor:"grey-darker"}},{name:"core/heading",attributes:{content:Object(i.__)("As of summer 2021, nearly 6 million US households were behind on rent payments, owing over $20 billion dollars. Those behind on rent debt are overwhelmingly low income and people of color. (Yup. Racial capitalism.) Sound like a lot of debt? Sounds like a lot of power over landlords to us!","debtcollective"),className:"hero__heading",level:3,textColor:"grey-darker"}}]}}].forEach(e=>{Object(a.registerBlockVariation)("core/cover",e)}),[{name:"inline-list",title:Object(i.__)("Inline Bullet List","debtcollective"),description:Object(i.__)("Display stylised list.","debtcollective"),category:"components",attributes:{className:"inline-bullet-list",placeholder:Object(i.__)("Add list items ...","debtcollective")},example:{attributes:{className:"inline-bullet-list"}},scope:["block","inserter","transform"]}].forEach(e=>{Object(a.registerBlockVariation)("core/list",e)}),[{name:"tout-jade",title:Object(i.__)("Jade Tout","debtcollective"),category:"components",description:Object(i.__)("Display a jade tout on page.","debtcollective"),keywords:[Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective"),Object(i.__)("callout","debtcollective")],attributes:{className:"tout jade"},example:{attributes:{className:"tout jade"},innerBlocks:[{name:"core/heading",attributes:{level:2,className:"tout__heading",content:Object(i.__)("Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.","debtcollective")}},{name:"core/paragraph",attributes:{className:"tout__content",content:Object(i.__)("We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective")}},{name:"core/image",attributes:{className:"tout__image",id:134,sizeSlug:"full",linkDestination:"none"}}]}},{name:"tout-canary",title:Object(i.__)("Canary Tout","debtcollective"),category:"components",description:Object(i.__)("Display a canary tout on page.","debtcollective"),keywords:[Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective"),Object(i.__)("callout","debtcollective")],attributes:{className:"tout canary"},example:{attributes:{className:"tout canary"},innerBlocks:[{name:"core/heading",attributes:{level:2,className:"tout__heading",content:Object(i.__)("Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.","debtcollective")}},{name:"core/paragraph",attributes:{className:"tout__content",content:Object(i.__)("We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective")}},{name:"core/image",attributes:{className:"tout__image",id:134,sizeSlug:"full",linkDestination:"none"}}]}},{name:"tout-salmon",title:Object(i.__)("Salmon Tout","debtcollective"),category:"components",description:Object(i.__)("Display a salmon tout on page.","debtcollective"),keywords:[Object(i.__)("tout","debtcollective"),Object(i.__)("call to action","debtcollective"),Object(i.__)("callout","debtcollective")],attributes:{className:"tout salmon"},example:{attributes:{className:"tout salmon"},innerBlocks:[{name:"core/heading",attributes:{level:2,className:"tout__heading",content:Object(i.__)("Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.","debtcollective")}},{name:"core/paragraph",attributes:{className:"tout__content",content:Object(i.__)("We are a debtors' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.","debtcollective")}},{name:"core/image",attributes:{className:"tout__image",id:134,sizeSlug:"full",linkDestination:"none"}}]}}].forEach(e=>{Object(a.registerBlockVariation)("site-functionality/tout",e)}),[{name:"lede",title:Object(i.__)("Lede","debtcollective"),description:Object(i.__)("Add opening sentence or paragraph.","debtcollective"),category:"components",keywords:[Object(i.__)("intro","debtcollective"),Object(i.__)("paragraph","debtcollective"),Object(i.__)("sentence","debtcollective")],icon:"editor-justify",attributes:{className:"lede",placeholder:Object(i.__)("Add content...","debtcollective")},example:{attributes:{className:"lede",content:Object(i.__)("We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.","debtcollective")}},scope:["block","inserter","transform"]}].forEach(e=>{Object(a.registerBlockVariation)("core/paragraph",e)})}]);