const os = require("os");
const fs = require("fs");

setInterval(() => {
    const info = `
Time: ${new Date()}
CPU: ${os.cpus()[0].model}
Memory: ${os.totalmem() / 1024 / 1024} MB
Platform: ${os.platform()}
-------------------------
`;

    fs.appendFile("system.log", info, () => {
    console.log("System info logged");
    });
}, 5000);
