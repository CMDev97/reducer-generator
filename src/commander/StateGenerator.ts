import Type from "../model/Type";


export default class StateGenerator {

    private readonly _types: Array<Type>;

    constructor(types:Array<Type>) {
        this._types = types;
    }

    execute(){
        let initialState = {};
        if (this._types !== null) {
            this._types.forEach(item => {
                // @ts-ignore
                initialState[item.getName().toUpperCase()] = item.getState();
            });
        }

        return initialState;
    }

}