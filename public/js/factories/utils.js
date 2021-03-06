// public/js/factories/utils.js
(function () {
	"use strict";

	module.exports = function () {

		return {

			/**
			 * TODO
			 */
			buffer2hexa: function (buffer, reverse) {
				var uint8Array = new Uint8Array(buffer);
				if (reverse) { uint8Array = uint8Array.reverse(); }
				return Array.prototype.map.call(uint8Array, x => ("00" + x.toString(16)).slice(-2)).join("");
			},

			/**
			 * TODO
			 */
			getUrlParameterByName: function (name, url) {
				if (!url) {
					url = window.location.href;
				}
				name = name.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
				var results = regex.exec(url);
				if (!results) {
					return null;
				}
				if (!results[2]) {
					return "";
				}
				return decodeURIComponent(results[2].replace(/\+/g, " "));
			}

		};

	};

})();
