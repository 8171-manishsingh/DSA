# Dynamic Memory Allocation / Memory Allocation (Calculator) (JS)


## What it does
This folder contains a small **Memory Calculator** utility for DSA practice.

It provides approximate memory sizes for:
- `number`, `boolean`, `bigint`
- `string` (assumes **UTF-16: 2 bytes/char**)
- arrays (shallow sum of element sizes)

## Usage
```js
const { memoryOf } = require('./memory-calculator');

console.log(memoryOf(42, 'kb'));
console.log(memoryOf('hello', 'bytes'));
console.log(memoryOf([1, 2, 3], 'mb'));
```

## Notes
JavaScript doesn’t expose true object memory size reliably.
So for objects we return a conservative placeholder approximation.

