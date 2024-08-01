const fs = require("fs");
const path = require("path");

const [file, tmpFilePath] = process.argv.reverse();
const fileName = path.basename(file);
const [dirName] = file.split(fileName);

const fileData = fs.readFileSync(file, "utf-8");

function findContent(string, macros) {
    const [_, data] = string.split(`// @${macros}`);

    const [content] = data.split(`// @end-${macros}`);

    if (!content) {
        throw new Error(`Incorrect macros data: ${content}`);
    }

    return content;
}

function replaceContent(string, macros, content, spaces) {
    return string.replace(
        `// @${macros}`,
        `// @${macros}\n${" ".repeat(spaces)}${content.replaceAll("\n", `\n${" ".repeat(spaces)}`).trim()}`
    );
}

const prepare = findContent(fileData, 'prepare');
const run = findContent(fileData, 'run');
const clear = findContent(fileData, 'clear');

let baseFileData = fs.readFileSync("base.js", "utf-8");

baseFileData = replaceContent(baseFileData, 'prepare', prepare, 4);
baseFileData = replaceContent(baseFileData, 'run', run, 8);
baseFileData = replaceContent(baseFileData, 'clear', clear, 8);

const initFile = path.join(tmpFilePath, dirName, 'init.json');

if (fs.existsSync(initFile)) {
    baseFileData = baseFileData.replace('process.env.INIT', fs.readFileSync(initFile));
}

if (!fs.existsSync(`${tmpFilePath}/${dirName}`)) {
    fs.mkdirSync(`${tmpFilePath}/${dirName}`);
}

fs.writeFileSync(`${tmpFilePath}/${dirName}/${fileName}`, baseFileData);

