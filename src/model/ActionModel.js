export class ActionModel {

    constructor(entity, type, payload) {
        this._entity = entity;
        this._type = type;
        this._payload = payload;
    }

    get entity() {
        return this._entity;
    }

    get model(){
        return {
            type : this._type,
            payload : this._payload
        }
    }

}
