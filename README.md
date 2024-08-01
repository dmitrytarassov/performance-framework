# JS Performance Testing Framework

This framework facilitates performance testing for JavaScript code. Each test is located in a separate directory and follows a specific structure using macros to define preparation, execution, and cleanup code blocks.

## Directory Structure

Each test should be placed in its own directory. Inside the directory, you should have `.js` files that contain the following macros:

- `// @prepare` - Code to prepare the test.
- `// @end-prepare` - End of preparation code.
- `// @run` - Code for the test execution.
- `// @end-run` - End of execution code.
- `// @clear` - Code to clean up after each run.
- `// @end-clear` - End of cleanup code.

### Example

A test file might look like this:

```javascript
// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
let result = 0;
// @end-prepare

// @run
for (const el of dataArray) {
    result += el;
}
// @end-run

// @clear
result = 0;
// @end-clear
```

## Running a Test
To run a test, use the following command:

```sh
yarn test DIRECTORY_NAME
```
Replace DIRECTORY_NAME with the name of the directory containing your test files.

## How It Works
- The script will collect the content of each macro and insert it into a template.
- The generated test file will look like this:

```javascript
const maxRunsCount = 100_000;

let RUNS_COUNT = +process.env.RUNS_COUNT || maxRunsCount;

if (RUNS_COUNT > maxRunsCount) {
    RUNS_COUNT = maxRunsCount;
}

(() => {
    // @prepare
    const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
    let result = 0;

    for (let i = 0; i < 100_000; i++) {
        // @run
        for (const el of dataArray) {
            result += el;
        }

        // @clear
        result = 0;
    }
})();
```

After assembling the script, it will execute each generated file using /usr/bin/time.

## Environment Variables
- `RUNS_COUNT` - The number of times each test will be executed (maximum of 100,000).
- `DATA_ARRAY_LENGTH` - The length of the array used in the test.

## Example Usage

- Create a directory for your test, for example, myTest.

- Inside the myTest directory, create a file named 1-test.js with the following content:

```javascript
// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
let result = 0;
// @end-prepare

// @run
for (const el of dataArray) {
    result += el;
}
// @end-run

// @clear
result = 0;
// @end-clear
```
- Inside the myTest directory, create second file named 2-test.js with the following content:

```javascript
// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
let result = 0;
// @end-prepare

// @run
for (let i = 0; i < dataArray.length; i++) {
    result += dataArray[i];
}
// @end-run

// @clear
result = 0;
// @end-clear
```

- Run the test using the following command:

```sh
yarn test myTest
```

The framework will handle the assembly and execution of the test, providing performance metrics for analysis.

## Requirements
- Node.js
- Yarn
- 
Ensure you have the necessary environment variables set before running your tests to customize the execution based on your requirements.

## License
This project is licensed under the MIT License.

For any questions or contributions, feel free to open an issue or submit a pull request.