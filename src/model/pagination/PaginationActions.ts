import Entity from "../Entity";
import {PaginationContent} from "./PaginationContent";
import {ActionModel} from "../ActionModel";


const SET_CONTENT = "SET_CONTENT_PAGINATION_";
const SET_PAGE = "SET_PAGE_PAGINATION_";
const SET_TOT = "SET_TOT_PAGINATION_";
const SET_PROGRESS = "SET_PROGRESS_PAGINATION_";
const SET_ERROR = "SET_ERROR_PAGINATION_";
const SET_SEARCH = "SET_SEARCH_PAGINATION_";

export class ActionsPagination {
    private _entity:Entity;


    constructor(entity:Entity) {
        this._entity = entity;
    }


    setContent = (model:PaginationContent) => {
        return new ActionModel(SET_CONTENT, this._entity, model).getObject();
    }

    setPage = (page:Number) => {
        return new ActionModel(SET_PAGE, this._entity, page).getObject();
    }

    setTot = (tot:Number) => {
        return new ActionModel(SET_TOT, this._entity, tot).getObject();
    }

    setProgress = (progress:Boolean) => {
        return new ActionModel(SET_PROGRESS, this._entity, progress).getObject();
    }

    setError = (error:Object) => {
        return new ActionModel(SET_ERROR, this._entity, error).getObject();
    }

    setSearch = (search:string) => {
        return new ActionModel(SET_SEARCH, this._entity, search).getObject();
    }

}