import { Component, Input, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { LoginButtonComponent } from "../loginComponent/login-button.component"

@Component({
    selector: "blache-header",
    templateUrl: "app/headerComponent/header.component.html",
    directives: [ROUTER_DIRECTIVES, LoginButtonComponent]
})
export class HeaderComponent implements OnInit {
    @Input() logo: string;

    ngOnInit() {}
}
