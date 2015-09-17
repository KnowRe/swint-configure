'use strict';

module.exports = function(secret) {
	return {
		aaa: 'AAA',
		bbb: 'BBB',
		ccc: secret.ccc
	};
};
