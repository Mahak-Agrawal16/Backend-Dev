const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
    if (err) {
    console.log("Error reading file:", err);
    return;
    }

    const text = data.toString().trim();
    const words = text.split(/\s+/);
    const count = words.length;

    fs.writeFile("output.txt", "Word Count: " + count, (err) => {
    if (err) console.log("Error writing file:", err);
    else console.log("Word count written to output.txt");
    });
});
