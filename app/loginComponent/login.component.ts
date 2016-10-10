import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

import { FacebookService, FacebookLoginStatus, FacebookLoginResponse, FacebookInitParams } from "ng2-facebook-sdk";

@Component ({
    selector: "blache-login",
    templateUrl: "app/loginComponent/login.component.html",
    providers: [FacebookService]
})
export class LoginComponent {
    @Input() lastname: string;
    @Input() firstname: string;
    @Input() email: string;
    @Input() password: string;
    @Input() passwordConfirmation: string;
    @Input() birthday: Date;

    constructor(
        private fb: FacebookService,
        private router: Router) {
        let fbParams: FacebookInitParams = {
            appId: "989605347851369",
            //cookie: true,
            xfbml: true,
            version: "v2.8"
        };
        this.fb.init(fbParams);
        this.fb.getLoginStatus().then(
            (loginStatus: FacebookLoginStatus) => {
                if (loginStatus.status == "connected") {
                    this.router.navigate(['/dashboard']);
                }
            }
        );
    }

    loginFacebook(): void {
        this.fb.login().then(
            (response: FacebookLoginResponse) => {
                if (response.status == "connected") {
                    this.router.navigate(['/dashboard']);
                }
            },
            (error: any) => console.log(error)
        );
    }

    login() {
        console.log(this.lastname + this.firstname + this.email + this.password + this.passwordConfirmation + this.birthday);
    }
}
