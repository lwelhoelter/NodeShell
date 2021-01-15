const fs = require('fs');


module.exports = function catFunc (cmd) {
    let fileName = cmd.slice(4);
    fs.readFile(`${fileName}`, (err, data) => {
        if (err) throw err;
        process.stdout.write(`${data}`);
    });
};