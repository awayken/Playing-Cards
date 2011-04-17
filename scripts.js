/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global $: false, window: false */

(function () {
	"use strict";
	
	window.CARDS = {
		init: function () {
			var style = '';
			
			this.handleNav();
			
			switch (window.location.hash) {
			case '#bww':
				style = 'bww';
				break;
			case '#antique':
				style = 'antique';
				break;
			case '#tarot':
				style = 'tarot';
				break;
			default:
				style = 'classic';
			}

			this.makeCards(style);
		},
		
		handleNav: function () {
			var that = this;
			$('#nav a')
				.click(function () {
					that.makeCards($(this).attr('href').split('#')[1]);
				});
		},
		
		makeCards: function (s) {
			var style = '';
			
			if (!s) {
				style = 'classic';
			} else {
				style = s;
			}
			
			$('#cardstyle').attr('href', style + '.css');
		}
	};
	
	$(document).ready(function () {
		window.CARDS.init();
	});
}());