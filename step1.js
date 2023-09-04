const {exec} = require("child_process")

const argv = process.argv;

const cat = (path) => {
    exec(`cat ${path}`, (error, stdout, stderr) => {
        if(error){
            console.log(error)
            return;
        }
        if (stderr){
            console.log(stderr)
            return;
        }
        console.log(stdout);
    })
}
cat(argv[2])