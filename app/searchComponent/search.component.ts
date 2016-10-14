import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SearchItem } from "./search-item";
import { SearchService } from "./search.service";
import { SearchItemComponent } from "./search-item.component";
import { SearchHeaderComponent } from "./search-header.component";

@Component({
    moduleId: module.id,
    selector: "blache-search",
    templateUrl: "search.component.html"
})
export class SearchComponent implements OnInit {
    sub: any;
    date: Date;
    from: string;
    to: string;
    items: SearchItem[];
    pages: number[];
    pageSize: number;
    page: number;
    size = 4;

    constructor(private route: ActivatedRoute,
                private searchService: SearchService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.date = params["date"];
            this.from = params["from"];
            this.to = params["to"];
            this.searchService.search(this.size, 0).then(searchResult => {
                this.items = searchResult.items;
                this.pageSize = searchResult.pageSize;
                this.pages = Array(this.pageSize).fill(this.pageSize).map((x, i) => i);
                this.page = searchResult.currentPage;
            });
        });
    }

    changePage(pageNumber: number) {
        this.searchService.search(this.size, pageNumber).then(searchResult => {
            this.items = searchResult.items;
            this.pageSize = searchResult.pageSize;
            this.pages = Array(this.pageSize).fill(this.pageSize).map((x, i) => i);
            this.page = searchResult.currentPage;
        });
        return false; // do not reload page
    }
}
