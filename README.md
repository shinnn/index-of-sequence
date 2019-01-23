# index-of-sequence

[![npm version](https://img.shields.io/npm/v/index-of-sequence.svg)](https://www.npmjs.com/package/index-of-sequence)
[![Build Status](https://travis-ci.com/shinnn/index-of-sequence.svg?branch=master)](https://travis-ci.com/shinnn/index-of-sequence)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/index-of-sequence.svg)](https://coveralls.io/github/shinnn/index-of-sequence)

Find the first index at which a given sequence of elements can be found in the array

```javascript
import indexOfSequence from 'index-of-sequence';

indexOfSequence(['a', 'b', 'a', 'b', 'c', 'a', 'b', 'c'], ['a', 'b', 'c']); //=> 2
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install index-of-sequence
```

## API

```javascript
import indexOfSequence from 'index-of-sequence';
```

### indexOfSequence(*array*, *searchArray* [, *fromIndex*])

*array*: `any[]`  
*searchArray*: `any[]` (the sequence of values to search for)  
*fromIndex*: `integer` (index in the string where to begin searching)  
Return: `integer` (the first index of the sequence of values)

It returns a non-negative integer (`0`, `1`, ...) when it finds at least one sequence of values in the array.

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

Copyright (c) 2016 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
