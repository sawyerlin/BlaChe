import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { SearchItem } from "./search-item";

@Injectable()
export class SearchService {
    private searchUrl = 'app/search';

    constructor(private http: Http) {}

    private handleError(error: any) {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }

    search(size: number, page: number): Promise<SearchItem[]> {
        return this.http.get(this.searchUrl)
            .toPromise()
            .then(response=>{
                let searchResult = response.json().data;
                let pageSize = Math.ceil(searchResult.size / size);
                let items = searchResult.items.slice(page * size, (page + 1) * size);
                return {
                    pageSize: pageSize,
                    page: page,
                    items: items
                };
            })
            .catch(this.handleError);
    }
}
