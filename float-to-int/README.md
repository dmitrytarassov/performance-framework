# Performance Test: Float to Int Conversion

This test aims to compare the performance of different methods for converting a float to an integer in JavaScript under the condition that 0 < float < 1. The test measures the time taken by each method to perform the conversion.

## Test Files

The test is organized into three separate files, each containing the implementation for one of the methods:

- [1-or-zero.js](1-or-zero.js)
- [2-left-shift.js](2-left-shift.js)
- [3-unsigned-right-shift.js](3-unsigned-right-shift.js)
- [4-double-bitwise-not.js](4-double-bitwise-not.js)
- [5-parseInt.js](5-parseInt.js)
- [6-math-trunc.js](6-math-trunc.js)