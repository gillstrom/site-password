'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');

module.exports = function (site, account) {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	var cmd = 'security';
	var args = ['find-internet-password', '-w', '-s', site];

	if (account) {
		args = args.concat(['-a', account]);
	}

	return pify(execFile)(cmd, args).then(function (res) {
		return res.trim();
	});
};
