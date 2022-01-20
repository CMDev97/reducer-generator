

export default class Entity {
    private readonly _name : string;

    constructor(entity : string) {
        this._name = entity;
    }

    getName() : string {
        return this._name;
    }


}