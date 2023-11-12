import { Controller, Get } from '@nestjs/common';
import { io } from "socket.io-client";

@Controller()
export class AppController {

  @Get()
  home() {
    const socket = io("http://localhost:3000")
    socket.emit('message', { data: "hola" })
    socket.on('message', ({ data }) => {
      console.log(data)
      socket.disconnect()
    })
  }
}