import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { FacebookService, FacebookLoginStatus, FacebookLoginResponse, FacebookInitParams } from "ng2-facebook-sdk";

import { LoginComponent } from "./login.component"

@Component ({
    selector: "login-button",
    templateUrl: "app/loginComponent/login-button.component.html",
    styleUrls: ["app/loginComponent/login-button.component.css"],
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    providers: [FacebookService]
})
export class LoginButtonComponent {
    user: any;
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
                    if (loginStatus.status == "connected") {
                        this.fb.api('/me', "get").then(
                            (response: any) => {
                                this.user = response;
                            }
                        );
                    }
                }
            );
        }

        loginFacebook(): void {
            this.fb.login().then(
                (response: FacebookLoginResponse) => {
                    if (response.status == "connected") {
                        this.fb.api('/me', "get").then(
                            (response: any) => {
                                this.user = response;
                                this.router.navigate(['/admin']);
                            }
                        );
                    }
                },
                (error: any) => console.log(error)
            );
        }

        logout() {
            this.fb.logout().then(
                (response: FacebookLoginResponse) => {
                    this.user = null;
                    this.router.navigate(['/home']);
                },
                (error: any) => console.log(error)
            );
            return false;
        }
}
