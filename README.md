# index-of-sequence

[![NPM version](https://img.shields.io/npm/v/index-of-sequence.svg)](https://www.npmjs.com/package/index-of-sequence)
[![Bower version](https://img.shields.io/bower/v/index-of-sequence.svg)](https://github.com/shinnn/index-of-sequence/releases)
[![Build Status](https://travis-ci.org/shinnn/index-of-sequence.svg?branch=master)](https://travis-ci.org/shinnn/index-of-sequence)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/index-of-sequence.svg)](https://coveralls.io/r/shinnn/index-of-sequence)
[![dependencies Status](https://david-dm.org/shinnn/index-of-sequence/status.svg)](https://david-dm.org/shinnn/index-of-sequence)
[![devDependencies Status](https://david-dm.org/shinnn/index-of-sequence/dev-status.svg)](https://david-dm.org/shinnn/index-of-sequence?type=dev)

Find the first index at which a given sequence of elements can be found in the array

```javascript
import indexOfSequence from 'index-of-sequence';

indexOfSequence(['a', 'b', 'a', 'b', 'c', 'a', 'b', 'c'], ['a', 'b', 'c']); //=> 2
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install index-of-sequence
```

### [bower](https://bower.io/)

```
bower install index-of-sequence
```

## API

### indexOfSequence(*array*, *searchArray* [, *fromIndex*])

*array*: `Array`  
*searchArray*: `Array` (the sequence of values to search for)  
*fromIndex*: `Number` (index in the string where to begin searching)  
Return: `Number` (the first index of the sequence of values)

It returns `0` or a positive integer (`1`, `2`, ...) when it finds at least one sequence of values in the array.

```javascript
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1']); //=> 0
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1'], 1); //=> 7
```

Otherwise, it returns `-1`.

```javascript
indexOfSequence([], [4]); //=> -1
indexOfSequence([1, 2, 3], [4]); //=> -1
indexOfSequence([1, 2, 3], []); //=> -1
```

## License

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
