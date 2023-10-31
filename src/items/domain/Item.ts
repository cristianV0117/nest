export class Item {

    private entity: object

    constructor(entity: object) {
        this.entity = entity
    }

    public value(): object {
        return this.entity
    }
}