import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { CarService } from "./car.service";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    directives: [ROUTER_DIRECTIVES],
    providers: [CarService]
})
export class AppComponent {
    title = "BlaCheApp";
}
