import express, {Application, Request, Response} from 'express'
import http from 'http'
import WebSocket from 'ws'
import SenseAppApi from './lib/SenseAppApi'
import executeShell from './lib/ExecuteShell'

const app: Application = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({server})
const api = new SenseAppApi()

app.get('/', (request: Request, response: Response) => {
    response.send("Welcome using HTTP")
})

wss.on('connection', (client: WebSocket) => {

    console.log('WebSocket connection...')

    client.on('message', (message: string) => {
        const msg = JSON.parse(message)
        console.log(msg)
        if(msg.get == 'system_info'){
            console.log(system_info)
            client.send(JSON.stringify(system_info))
        }
        api.send(msg)
    })

    client.send(JSON.stringify( { message: 'welcome', value: "Welcome using WebSocket"}))

    api.on('message', (message) => {
        console.log("*** Message ***")
        console.log(JSON.stringify(message, null, 2));
        client.send(JSON.stringify(message))
    })
    
    api.connect();
    executeShell("hostname").then( res => client.send(JSON.stringify( { message: 'hostname', value: res}))) 
})

function formatSystemInfo(arg: string, key: string){
    system_info["system_info"][key] = arg
}

let system_info: {[key: string]: {[key: string]: string}}= {
    "system_info": {}
}


executeShell(`ip --brief addr | awk '{print $1} {print $3}'`)
    .then( res => {
        res = res.trim().split('\n')
        console.log(res.length)
        for(let i = 0; i < res.length ; i+=2){
            formatSystemInfo(res[i+1], res[i])
        }
    })
executeShell(`hostnamectl | grep "Kernel"`).then( res => formatSystemInfo(res.replace('Kernel:', '').trim(), "kernel"))
executeShell("uptime -p").then( res => formatSystemInfo(res.replace('up', '').trim(), "uptime"))
executeShell("python3 --version").then( res => formatSystemInfo(res.replace('Python', '').trim(), "python version"))
executeShell("node --version").then( res => formatSystemInfo(res.replace('v', '').trim(), "node version"))
executeShell(`grep '^ID=' /etc/os-release`).then( res => formatSystemInfo(res.trim().replace('ID=', ''), "os"))
executeShell("hostname").then( res => formatSystemInfo(res.trim(), "hostname"))

server.listen(3000, () => {
    console.log("Listening on port 3000")
})
