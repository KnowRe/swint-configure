'use strict';

module.exports = function(secret) {
	return {
		ddd: 'DDD',
		eee: 'EEE',
		fff: secret.fff
	};
};
