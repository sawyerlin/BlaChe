import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.date = params["date"];
            this.from = params["from"];
            this.to = params["to"];
        });
    }
}
