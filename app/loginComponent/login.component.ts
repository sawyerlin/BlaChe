import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component ({
    selector: "blache-login",
    templateUrl: "app/loginComponent/login.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    @Input() email: string;
    @Input() password: string;
    @Output() loginEvent = new EventEmitter();

    loginFacebook(): void {
        this.loginEvent.emit(null);
    }
}
