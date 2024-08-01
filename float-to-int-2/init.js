const fs = require("fs");
const path = require("path");

const [directory] = process.argv.reverse();

const initialData = [...Array(+process.env.DATA_ARRAY_LENGTH)].map(() => 1 + Math.random() + Math.random() * (1 + Math.random()));

fs.writeFileSync(path.join(directory, "init.json"), JSON.stringify(initialData));
