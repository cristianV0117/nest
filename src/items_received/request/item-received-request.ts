export class ItemReceivedRequest {

    name: string
    status: number

    constructor(create: any) {
        this.name = create.name
        this.status = create.status 
    }

    public getName(): string {
        return this.name
    }

    public getStatus(): number {
        return this.status
    }
}