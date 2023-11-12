import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server: Server

    afterInit(server: any) {
        console.log("Esto se ejecuta cuando inicia: " + server)
    }

    handleConnection(client: any, ...args: any[]) {
        console.log("Alguien se conecto al socket: " + client)
    }

    handleDisconnect(client: any) {
        console.log("Esto se ejecuta cuando se desconecta alguien: " + client)
    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message)
    }
}