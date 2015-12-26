'use strict';

var sprintf = require('sprintf'),
	path = require('path'),
	fs = require('fs'),
	swintHelper = require('swint-helper'),
	defaultize = swintHelper.defaultize;

module.exports = function(options) {
	defaultize({
		dir: path.join(path.dirname(require.main.filename), 'config'),
		mode: 'local',
		secret: {}
	}, options);

	return makeConfig(options);
};

var makeConfig = function(options) {
	if (!fs.existsSync(options.dir)) {
		var msg = 'swint-configure: dir doesn\'t exist';
		print(4, msg);
		throw new Error(msg);
	}

	var ret = {},
		cmmnCfg = require(path.join(options.dir, 'common.js')),
		modeCfg = require(path.join(options.dir, sprintf('%s.js', options.mode)));

	if (typeof cmmnCfg === 'function') {
		defaultize(
			(require(path.join(options.dir, 'common.js')))(options.secret),
			ret
		);
	} else {
		defaultize(
			require(path.join(options.dir, 'common.js')),
			ret
		);
	}

	if (typeof modeCfg === 'function') {
		defaultize(
			(require(path.join(options.dir, sprintf('%s.js', options.mode))))(options.secret),
			ret
		);
	} else {
		defaultize(
			require(path.join(options.dir, sprintf('%s.js', options.mode))),
			ret
		);
	}

	return ret;
};

