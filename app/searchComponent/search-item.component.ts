import { Component, Input } from "@angular/core";

import { SearchItem } from "./search-item";

@Component({
    moduleId: module.id,
    selector: "blache-search-item",
    templateUrl: "search-item.component.html",
    styleUrls: ['search-item.component.css']
})
export class SearchItemComponent {
    @Input() item: SearchItem;
}
