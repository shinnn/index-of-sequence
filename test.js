'use strict';

const indexOfSequence = require('.');
const test = require('tape');

test('indexOfSequence()', t => {
	t.equal(
		indexOfSequence(['a', 'b', 'c', 'b', 'c'], ['b', 'c']),
		1,
		'should return the first index of the search sequence.'
	);

	t.equal(
		indexOfSequence([1, 3, '1', '3', 1, 1, 3], [1, 3], 1),
		5,
		'should support the third `fromIndex` parameter.'
	);

	t.equal(
		indexOfSequence(['foo', 'bar'], ['bar'], -9999),
		1,
		'should treat negative `fromIndex` as 0.'
	);

	t.equal(
		indexOfSequence(['Hello', 'world'], ['Hello', Buffer.from('world')]),
		-1,
		'should return -1 when the it cannot find the sequence anywhere.'
	);

	t.equal(
		indexOfSequence([], ['p']),
		-1,
		'should return -1 when the first argument is an empty array.'
	);

	t.equal(
		indexOfSequence(['q'], []),
		-1,
		'should return -1 when the second argument is an empty array.'
	);

	t.throws(
		() => indexOfSequence(1, ['a']),
		/^TypeError.*Expected an array, but got 1 \(number\)\./u,
		'should throw a type error when the first argument is a non-array value.'
	);

	t.throws(
		() => indexOfSequence([true], new Map()),
		/^TypeError.*Expected an array, but got \[object Map\] \(object\)\./u,
		'should throw a type error when the second argument is a non-array value.'
	);

	t.throws(
		() => indexOfSequence(['a'], ['b'], 'c'),
		/^TypeError.*Expected an index where to start the searching forwards in the array, but got c \(string\)\./u,
		'should throw a type error when the third argument is not a number.'
	);

	t.throws(
		() => indexOfSequence(['a'], ['b'], ''),
		/^TypeError.*Expected an index where to start the searching forwards in the array, but got an empty string\./u,
		'should throw a type error when the third argument is an empty string.'
	);

	t.end();
});
