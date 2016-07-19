import { Component, Input, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: "blache-header",
    templateUrl: "app/headerComponent/header.component.html",
    directives [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    @Input() logo: string;

    ngOnInit() {}
}
