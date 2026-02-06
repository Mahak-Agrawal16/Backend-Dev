import fs from "fs";
import path from "path";

const logPath = path.join(process.cwd(), "app.log");

let errorCount = 0;
let totalLines = 0;

const stream = fs.createReadStream(logPath, "utf8");

stream.on("data", (chunk) => {
    const lines = chunk.split("\n");
    totalLines += lines.length;

    lines.forEach(line => {
    if (line.includes("ERROR")) {
        errorCount++;
    }
    });
});

stream.on("end", () => {
    console.log("Total Lines:", totalLines);
    console.log("Error Count:", errorCount);
});

stream.on("error", (err) => {
    console.log("Error:", err.message);
});
