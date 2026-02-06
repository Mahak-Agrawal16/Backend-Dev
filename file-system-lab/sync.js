import fs from "fs";
import path from "path";

const dir1 = path.join(process.cwd(), "folder1");
const dir2 = path.join(process.cwd(), "folder2");

fs.readdir(dir1, (err, files1) => {
    if (err) return console.log(err.message);

    fs.readdir(dir2, (err, files2) => {
    if (err) return console.log(err.message);

    files1.forEach(file => {
        if (!files2.includes(file)) {
        const src = path.join(dir1, file);
        const dest = path.join(dir2, file);

        fs.copyFile(src, dest, (err) => {
            if (err) return console.log(err.message);
            console.log("Copied:", file);
        });
        }
    });
    });
});
