//
const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

//makes new folder
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

//loop to write text in log and write file names to console
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `log file`);
    console.log(fileName);
}
