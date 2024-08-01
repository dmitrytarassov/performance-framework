// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);
// @end-prepare

// @run
const result = dataArray.reduce((acc, e) => {
    return acc + e;
}, 0);
// @end-run

// @clear

// @end-clear