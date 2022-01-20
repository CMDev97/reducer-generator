

export class PaginationContent{
    private readonly _content : Object;
    private readonly _page : Number;
    private readonly _tot : Number;


    constructor(content:Object, page:Number, tot:Number) {
        this._content = content;
        this._page = page;
        this._tot = tot;
    }

    extract(){
        return {
            "content" : this._content,
            "page" : this._page,
            "tot" : this._tot
        }
    }


}