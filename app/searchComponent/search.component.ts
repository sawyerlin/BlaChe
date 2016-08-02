import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SearchItem } from "./search-item";
import { SearchService } from "./search.service";
import { SearchItemComponent } from "./search-item.component";
import { SearchHeaderComponent } from "./search-header.component";

@Component({
    selector: "blache-search",
    templateUrl: "app/searchComponent/search.component.html",
    directives: [SearchItemComponent, SearchHeaderComponent]
})
export class SearchComponent implements OnInit {
    sub: any;
    search: 
    date: Date;
    fromPlace: string;
    toPlace: string;
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
