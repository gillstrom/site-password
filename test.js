'use strict';
import test from 'ava';
import fn from './';

test('get password for github.com', async t => {
	await fn('github.com');
});
