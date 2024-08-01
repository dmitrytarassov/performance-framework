// @prepare
const dataArray = [...Array(+process.env.DATA_ARRAY_LENGTH)].map((e, index) => index);

const callback = (acc, e) => {
    return acc + e;
};
// @end-prepare

// @run
const result = dataArray.reduce(callback, 0);
// @end-run

// @clear

// @end-clear