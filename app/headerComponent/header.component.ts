import { Component, Input, OnInit } from "@angular/core";
import { LoginButtonComponent } from "../loginComponent/login-button.component"

@Component({
    moduleId: module.id,
    selector: "blache-header",
    templateUrl: "header.component.html"
})
export class HeaderComponent implements OnInit {
    @Input() logo: string;

    ngOnInit() {}
}
