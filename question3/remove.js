var fs = require('fs');
var dir = './Logs';

function removeLogFiles() {
    if (fs.existsSync(dir)){
        for(let i = 0; i < 10; i++) {
            let fileName = `log${i}.txt`;
            fs.unlink(`./${dir}/${fileName}`, function (err) {
                if (err) throw err;
            })
            console.log(`delete files...${fileName}`);
        }
        fs.rmSync(dir, { recursive: true, force: true });
    } else {
        console.log("There is no folder to delete")
    }
}

removeLogFiles();