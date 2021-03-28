const util = require("util");
const { exec } = require("child_process");
const execProm = util.promisify(exec);

// https://stackoverflow.com/questions/47629756/how-can-i-get-the-returned-value-from-the-child-process-exec-in-javascript
export default async function executeShell(cmd: string) {
    let result;
    try {
        result = await execProm(cmd);
    } catch(ex) {
        result = ex;
    }
    if ( Error[Symbol.hasInstance](result) ){
        return ;
    }
    return result.stdout;
}

// export default function executeShell(cmd: string) {
//     let msg = 'tst'
//     exec(cmd, (error: any, stdout: any, stderr: any) => {
//         if (error) {
//             console.log(error.message);
//             msg = error.message
//         }
//         if (stderr) {
//             console.log(stderr);
//             msg = stderr
//         }
//         else {
//             msg = stdout
//         }
//     });
    
//     return msg
// }
