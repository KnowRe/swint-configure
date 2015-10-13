var path = require('path'),
	assert = require('assert'),
	swintHelper = require('swint-helper'),
	configure = require('../lib');

global.swintVar.printLevel = 5;

describe('configure', function() {
	it('Error when inDir doesn\'t exist', function() {
		assert.throws(function() {
			var config = configure({
				dir: '/this-directory-does-not-exist'
			});
		});
	});

	it('Simple case - Function form', function() {
		var config = configure({
			dir: path.join(__dirname, '../test_case'),
			mode: 'local',
			secret: {
				ccc: 'CCC',
				fff: 'FFF'
			}
		});

		assert.deepEqual(config, {
			aaa: 'AAA',
			bbb: 'BBB',
			ccc: 'CCC',
			ddd: 'DDD',
			eee: 'EEE',
			fff: 'FFF'
		});
	});

	it('Simple case - Object form', function() {
		var config = configure({
			dir: path.join(__dirname, '../test_case'),
			mode: 'production',
			secret: {
				ccc: 'CCC',
				fff: 'FFF'
			}
		});

		assert.deepEqual(config, {
			aaa: 'AAA',
			bbb: 'BBB',
			ccc: 'CCC',
			ddd: 'DDD',
			eee: 'EEE',
			ggg: 'GGG'
		});
	});
});
