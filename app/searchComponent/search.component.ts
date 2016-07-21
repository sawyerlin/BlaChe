import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SearchItem } from "./search-item";
import { SearchService } from "./search.service";

@Component({
    selector: "blache-search",
    templateUrl: "app/searchComponent/search.component.html"
})
export class SearchComponent implements OnInit {
    title: string = "Search Cars";
    sub: any;
    date: Date;
    from: string;
    to: string;
    items: SearchItem[];

    constructor(private route: ActivatedRoute,
                private searchService: SearchService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.date = params["date"];
            this.from = params["from"];
            this.to = params["to"];
            this.searchService.search().then(items => this.items = items);
        });
    }
}
