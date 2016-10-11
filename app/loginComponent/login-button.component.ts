import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { FacebookService, FacebookLoginStatus, FacebookLoginResponse, FacebookInitParams } from "ng2-facebook-sdk";

@Component ({
    selector: "login-button",
    templateUrl: "app/loginComponent/login-button.component.html",
    styleUrls: ["app/loginComponent/login-button.component.css"],
    directives: [ROUTER_DIRECTIVES],
    providers: [FacebookService]
})
export class LoginButtonComponent {
    isVisible: bool = false;
    constructor(
        private fb: FacebookService,
        private router: Router) {
            let fbParams: FacebookInitParams = {
                appId: "989605347851369",
                cookie: true,
                xfbml: true,
                version: "v2.8"
            };
            this.fb.init(fbParams);
            this.fb.getLoginStatus().then(
                (loginStatus: FacebookLoginStatus) => {
                    if (loginStatus.status != "connected") {
                        this.isVisible = true;
                    }
                }
            );
        }

        loginFacebook(): void {
            this.fb.login().then(
                (response: FacebookLoginResponse) => {
                    if (response.status == "connected") {
                        this.isVisible = false;
                        this.router.navigate(['/dashboard']);
                    }
                },
                (error: any) => console.log(error)
            );
        }
}
