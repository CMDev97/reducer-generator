import Entity from "./Entity";
import Type from "./Type";

interface IActionModel {
    name:string;
    entity:Entity;
    payload:Object;


    getObject() : Object;
}

export default IActionModel;