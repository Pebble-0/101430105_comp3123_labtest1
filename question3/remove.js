
const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");
//finds folder
if (fs.existsSync(logsDir)) {   
    //finds files and deletes
    fs.readdirSync(logsDir).forEach(file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file)); 
    });

    //deletes folder
    fs.rmdirSync(logsDir);
}
