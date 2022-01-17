import {PAGINATION} from "../Entity";
import {ActionModel} from "../ActionModel";

const SET_CONTENT = "SET_CONTENT_PAGINATION";
const SET_PAGE = "SET_PAGE_PAGINATION";
const SET_TOT = "SET_TOT_PAGINATION";
const SET_PROGRESS = "SET_PROGRESS_PAGINATION";
const SET_ERROR = "SET_ERROR_PAGINATION";


const PaginationContent = (content, page, tot) => (
    {
        content : content,
        page : page,
        tot : tot
    }
);

let genericStatePagination = {

    searched : "",
    content : [],
    page : 1,
    tot : 10,
    progress : false,
    error : null,

}


export class ActionsPagination {


    static setContent = (model) => {
        if (!(model instanceof PaginationContent)) throw new Error("Model is not compatible with PaginationContent");

        return new ActionModel(PAGINATION, SET_CONTENT, model);
    }

    static setPage = (page) => {
        if (!(page instanceof Number)) throw new Error("Page type is not correct");
        return new ActionModel(PAGINATION, SET_PAGE, page);
    }

    static setTot = (tot) => {
        if (!(tot instanceof Number)) throw new Error("Page type is not correct");
        return new ActionModel(PAGINATION, SET_TOT, tot);
    }

    static setProgress = (progress) => {
        if (!(progress instanceof Boolean)) throw new Error("Progress type is not correct");
        return new ActionModel(PAGINATION, SET_PROGRESS, progress);
    }

    static setError = (error) => {
        return new ActionModel(PAGINATION, SET_ERROR, error);
    }

}


