var fs = require('fs');
var dir = './Logs';

function createLogFiles() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        for(let i = 0; i < 10; i++) {
            let fileName = `log${i}.txt`;
            fs.writeFile(`./${dir}/${fileName}`, `Hello World ${i}`, function (err) {
                if (err) throw err;
            })
            console.log(fileName);
        }
    } else {
        console.log("Folder already exist!")
    }

}

createLogFiles();

