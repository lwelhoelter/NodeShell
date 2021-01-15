//output prompt

const pwdFunc = require('./pwd');
const lsFunc = require('./ls');
const catFunc = require('./cat');

process.stdout.write('prompt > ');

//the stdin 'data' event fires after user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      pwdFunc();
    } else if (cmd === 'ls') {
      lsFunc();
    } else if (cmd.includes('cat')) {
      catFunc(cmd);
    }
  }
);

