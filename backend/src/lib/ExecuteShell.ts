const util = require("util");
const { exec } = require("child_process");
const execProm = util.promisify(exec);

export default async function run_shell_command(command: string) {
    let result;
    try {
        result = await execProm(command);
    } catch(ex) {
        result = ex;
    }
    if ( Error[Symbol.hasInstance](result) ){
        return ;
    }
    return result;
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
