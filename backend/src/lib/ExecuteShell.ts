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
