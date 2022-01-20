import {PAGINATION_STATE} from "./initialStates/State";

class Type {
    static PAGINATION = new Type("PAGINATION", PAGINATION_STATE);
    static SINGLE = new Type("SINGLE", PAGINATION_STATE);


    private readonly _name : string;
    private readonly _state : Object;


    constructor(name : string, state:Object) {
        this._name = name;
        this._state = state;
    }

    getName() : string {
        return this._name;
    }

    getState() : Object {
        return this._state;
    }

}

export default Type;