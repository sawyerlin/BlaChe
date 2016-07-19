import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { CarService } from "./car.service";
import { HeaderComponent }  from "./headerComponent/header.component";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [CarService]
})
export class AppComponent {
    logo: string = 'Blache'
}
