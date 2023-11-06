import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { io } from "socket.io-client";

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}

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