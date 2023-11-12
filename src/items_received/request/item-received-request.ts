export class ItemReceivedRequest {

    name: string
    status: number

    constructor(create: any) {
        this.name = create.name
        this.status = create.status 
    }
}