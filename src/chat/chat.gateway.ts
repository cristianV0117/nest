import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server: Server

    afterInit(server: any) {
        console.log("Esto se ejecuta cuando inicia")
    }

    handleConnection(client: any, ...args: any[]) {
        console.log("Alguien se conecto al socket")
    }

    handleDisconnect(client: any) {
        console.log("Esto se ejecuta cuando se desconecta alguien")
    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message)
    }
}