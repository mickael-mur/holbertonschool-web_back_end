console.log("Welcome to Holberton School, what is your name?\n")
process.stdin.on('data', (data) => {
    let dataBinaries = data;
    let string = dataBinaries.toString();
    console.log('Your name is: ', string)
})
