// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
let result = 0;
// @end-prepare

// @run
dataArray.forEach(e => {
    result += e;
});
// @end-run

// @clear
result = 0;
// @end-clear