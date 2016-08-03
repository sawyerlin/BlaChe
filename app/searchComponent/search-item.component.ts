import { Component, Input } from "@angular/core";

import { SearchItem } from "./search-item";

@Component({
    selector: "blache-search-item",
    templateUrl: "app/searchComponent/search-item.component.html",
    styleUrls: ['app/searchComponent/search-item.component.css']
})
export class SearchItemComponent {
    @Input() item: SearchItem;
}
