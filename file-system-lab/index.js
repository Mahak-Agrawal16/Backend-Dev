import fs from "fs";
import path from "path";

const command = process.argv[2];
const file1 = process.argv[3];
const file2 = process.argv[4];

const filePath1 = path.join(process.cwd(), file1);
const filePath2 = file2 ? path.join(process.cwd(), file2) : null;

switch (command) {
    case "read":
    fs.readFile(filePath1, "utf8", (err, data) => {
        if (err) return console.log("Error:", err.message);
        console.log(data);
    });
    break;

    case "write":
    fs.writeFile(filePath1, file2, (err) => {
        if (err) return console.log(err.message);
        console.log("File written successfully");
    });
    break;

    case "copy":
    fs.copyFile(filePath1, filePath2, (err) => {
        if (err) return console.log(err.message);
        console.log("File copied");
    });
    break;

    case "delete":
    fs.unlink(filePath1, (err) => {
        if (err) return console.log(err.message);
        console.log("File deleted");
    });
    break;

    case "list":
    fs.readdir(process.cwd(), (err, files) => {
        if (err) return console.log(err.message);
        files.forEach(f => console.log(f));
    });
    break;

    default:
    console.log("Invalid command");
}
