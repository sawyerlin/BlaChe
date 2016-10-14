import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: "blache-login",
    templateUrl: "login.component.html",
})
export class LoginComponent {
    @Input() email: string;
    @Input() password: string;
    @Output() loginEvent = new EventEmitter();

    loginFacebook(): void {
        this.loginEvent.emit(null);
    }
}
