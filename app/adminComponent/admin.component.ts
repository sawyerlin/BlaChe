import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AdminHeaderComponent } from "./admin-header.component"

@Component({
    selector: "blache-admin",
    templateUrl: "app/adminComponent/admin.component.html",
    directives: [ROUTER_DIRECTIVES, AdminHeaderComponent]
})
export class AdminComponent {}
