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

    search(): Promise<SearchItem[]> {
        return this.http.get(this.searchUrl)
            .toPromise()
            .then(response=>response.json().data)
            .catch(this.handleError);
    }
}
