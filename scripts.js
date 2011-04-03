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
			var style = '', cards = $('#cards'), n = 0, i = 0, vals = 13, suits = ['clubs', 'diams', 'spades', 'hearts'];
			
			if (!s) {
				style = 'classic';
			} else {
				style = s;
			}
			
			$('#cardstyle').attr('href', style + '.css');
			
			cards.empty();
			
			for (n = 1; n <= vals; n = n + 1) {
				for (i = 0; i < suits.length; i = i + 1) {
					cards.append(this.makeCard(n, suits[i]));
				}
			}
			
			cards.append('<div class="break"></div>');
		},
		
		makeCard: function (value, suit) {
			var val = value, h = '';
			
			switch (val) {
			case 1:
				val = 'A';
				break;
			case 11:
				val = 'J';
				break;
			case 12:
				val = 'Q';
				break;
			case 13:
				val = 'K';
				break;
			}
			
			h = h + '<div class="card ' + suit + '" id="' + suit + '-' + val + '">';
			h = h + '<div class="value">';
			h = h + '<span class="amount">' + val + '</span>';
			h = h + '<span class="suit">&' + suit + ';</span>';
			h = h + '</div>';
			h = h + '<span class="suit">&' + suit + ';</span>';
			h = h + '<div class="value">';
			h = h + '<span class="amount">' + val + '</span>';
			h = h + '<span class="suit">&' + suit + ';</span>';
			h = h + '</div>';
			h = h + '</div>';
			
			return h;
		}
	};
	
	$(document).ready(function () {
		window.CARDS.init();
	});
}());