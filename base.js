const maxRunsCount = 100_000;

let RUNS_COUNT = +process.env.RUNS_COUNT || maxRunsCount;

if (RUNS_COUNT > maxRunsCount) {
    RUNS_COUNT = maxRunsCount;
}

(() => {


    // @prepare

    for (let i = 0; i < RUNS_COUNT; i++) {

        // @run

        // @clear

    }

})();
