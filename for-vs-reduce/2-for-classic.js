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