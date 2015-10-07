#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fn = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ site-password github.com',
		'  $ site-password github.com --account example@mail.com',
		'',
		'Options',
		'  -a, --account <account>      Get password for specific account'
	]
}, {
	string: ['account'],
	alias: {a: 'account'}
});

fn(cli.input[0], cli.flags.account)
	.then(console.log)
	.catch(function (err) {
		console.error(err.message);
		process.exit(1);
	});
