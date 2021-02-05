import express, {Application, Request, Response} from 'express'
import http from 'http'
import WebSocket from 'ws'
import { exec } from 'child_process'

const app: Application = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({server})

app.get('/', (request: Request, response: Response) => {
    response.send("Welcome using HTTP")
})

wss.on('connection', (client: WebSocket) => {
    let i = 0;

    console.log('WebSocket connection...')

    client.on('message', (message: String) => {
        console.log(message)
        if(message === 'reset') {
            i = 0;
        }
    })

    client.send(JSON.stringify( { message: 'welcome', value: "Welcome using WebSocket"}))

    setInterval(() => {
        // client.send(`Counter: ${i++}`)
        client.send( JSON.stringify( { message: 'counter', value: i++}))
    }, 1000)

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


