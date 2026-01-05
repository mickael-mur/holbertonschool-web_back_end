process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log(`Welcome to Holberton School, what is your name?\n${data.toString().trim()}\nThis important software is now closing\n`);
  process.exit();
});
