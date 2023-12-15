import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer() server: Server

    afterInit(server: any) {
        console.log('WebSocket Inicializado')

        const io = require('socket.io')(server, {
            cors: {
                origin: '*',
                credentials: false
            },
        });
    }

    handleConnection(client: any, ...args: any[]) {
        console.log(`Cliente conectado: ${client.id}`)
    }

    handleDisconnect(client: any) {
        console.log(`Cliente desconectado: ${client.id}`)
    }

    /*@SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message)
    }*/
}