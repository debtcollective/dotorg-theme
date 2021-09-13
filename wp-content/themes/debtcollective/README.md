# wd_s <!-- omit in toc -->

Debt Collective Theme

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Quick Start](#quick-start)
	- [Advanced](#advanced)
- [Setup](#setup)
	- [Development](#development)
- [Contributing and Support](#contributing-and-support)

## Introduction

Hi. I'm a starter theme called `wd_s`, or `wdunderscores`. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead, try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for!

I feature some of the web's most proven technologies like: , [npm](https://www.npmjs.com/), [webpack](https://webpack.js.org/), [Sass](http://sass-lang.com/), and [PostCSS](https://github.com/postcss/postcss). To help you write clean code (that meets [WordPress standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/)), we tap into [@wordpress/scripts](https://developer.wordpress.org/block-editor/packages/packages-scripts/) for linting CSS and JavaScript. Did I mention that I'm also accessible? Yup. I pass both WCAG 2.1AA and Section 508 standards out of the box.

I also support [Selective Refresh](https://make.wordpress.org/core/2016/03/22/implementing-selective-refresh-support-for-widgets/) and [Live Preview](https://codex.wordpress.org/Theme_Customization_API#Part_3:_Configure_Live_Preview_.28Optional.29) in the Theme Customizer.

Not to mention, I use [Browsersync](https://www.browsersync.io/) so you can watch your project update in real-time while you work.

Looking to use some of our Advanced Custom Fields Gutenberg Blocks? It's also easy! Add the [WDS ACF Blocks](https://github.com/WebDevStudios/wds-acf-blocks) plugin for a whole set of blocks built with ACF including: Accordion, Carousel, Call To Action, Fifty/Fifty, Hero, Recent Posts, and Related Posts.

## Getting Started

### Prerequisites

Because I compile and bundle assets via NPM scripts, basic knowledge of the command line and the following dependencies are required:

- [Node](https://nodejs.org) (v14+)
- [NPM](https://npmjs.com) (v7+)
- [Composer](https://getcomposer.org/)

## Setup

From the command line, change directories to your new theme directory:

```bash
cd /wp-content/themes/debtcollective
```

Install theme dependencies and trigger an initial build.

>Note: You will need to have Composer and NPM 7 installed first.

```bash
npm i --legacy-peer-deps
```

If you see any errors thrown by webpack dependencies on build, update wordpress-scripts dependencies with
```bash
npm run packages-update
```

### Development

From the command line, type any of the following to perform an action:

Command | Action
:- | :-
`npm run watch` | Builds assets and starts Live Reload and Browsersync servers
`npm run start` | Builds assets and starts Live Reload server
`npm run build` | Builds production-ready assets for a deployment
`npm run lint` | Check all CSS, JS, MD, and PHP files for errors
`npm run format` | Fix all CSS, JS, MD, and PHP formatting errors automatically

