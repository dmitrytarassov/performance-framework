// @prepare
const dataArray = process.env.INIT;
let result = 0;
// @end-prepare

// @run
for (const el of dataArray) {
    result += ~~el;
}
// @end-run

// @clear
result = 0;
// @end-clear