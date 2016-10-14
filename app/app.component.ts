import { Component } from "@angular/core";

import { CarService } from "./adminComponent/annoncementsComponent/car.service";
import { SearchService } from "./searchComponent/search.service";
import { HeaderComponent }  from "./headerComponent/header.component";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})
export class AppComponent {
    logo: string = "Blache";
}
