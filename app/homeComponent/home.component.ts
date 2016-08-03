import { Component } from "@angular/core";

import { SearchHeaderComponent } from "../searchComponent/search-header.component";

@Component({
    selector: "blache-home",
    templateUrl: "app/homeComponent/home.component.html",
    styleUrls: ["app/homeComponent/home.component.css"],
    directives: [SearchHeaderComponent]
})
export class HomeComponent {}
