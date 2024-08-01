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