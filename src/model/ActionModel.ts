import IActionModel from "./IActionModel";
import Entity from "./Entity";
import Type from "./Type";


export class ActionModel implements IActionModel{
    name:string;
    entity: Entity;
    payload: Object;

    constructor(name:string, entity:Entity, payload:Object) {
        this.name = name;
        this.entity = entity;
        this.payload = payload;
    }

    getObject(): Object {
        return {
            "entity" : this.entity.getName(),
            "type" : this.name + this.entity.getName(),
            "payload" : this.payload
        };
    }


}