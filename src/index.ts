import Entity from "./model/Entity";
import StateGenerator from "./commander/StateGenerator";
import Type from "./model/Type";
import {ActionsPagination} from "./model/pagination/PaginationActions";


const PRODUCT = new Entity("PRODUCT");

const generator = new StateGenerator([Type.PAGINATION, Type.SINGLE]);

console.log(generator.execute());

let actions = new ActionsPagination(PRODUCT);

console.log(actions.setPage(10));