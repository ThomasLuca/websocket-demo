import express, {Application, Request, Response} from 'express'
import http from 'http'
import WebSocket from 'ws'
import { exec } from 'child_process'
import SenseAppApi from './lib/SenseAppApi'

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
        api.send(msg)
    })

    client.send(JSON.stringify( { message: 'welcome', value: "Welcome using WebSocket"}))

    api.on('message', (message) => {
        console.log("*** Message ***")
        console.log(JSON.stringify(message, null, 2));
        client.send(JSON.stringify(message))
    })
    
    api.connect();

    exec("hostname", (stderr, stdout) => {
        if(stderr) {
            console.error(stderr)
        }
        console.log(stdout)
        client.send(JSON.stringify( { message: 'hostname', value: stdout}))
    })
})

server.listen(3000, () => {
    console.log("Listening on port 3000")
})
