import XRegExp from 'xregexp'
import net from 'net'
import { EventEmitter } from 'events'

export default class SenseAppApi extends EventEmitter {

  client: null | net.Socket = null

  constructor() {
    super()
  }

  connect(file = '/tmp/senseapp.sock') {
    this.client = net.createConnection(file, () => {
      console.log('connected to server!')
      this.emit("connect", this.client)
    });
    this.client!.addListener('data', this.onData.bind(this))
  }

  send(data: object) {
    if(this.client) {
      this.client.write(JSON.stringify(data))
    }
  }

  private onData(data: any){
    data = data.toString()
    try {
      const groups = XRegExp.matchRecursive(data, '{', '}', 'gy').map((match) => `{${match}}`)
      groups.forEach((result) => {
        this.emit('message', JSON.parse(result))
      })
    } finally {}
  }
}