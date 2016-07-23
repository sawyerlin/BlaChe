import { Component, Input } from "@angular/core";

@Component ({
    selector: "blache-login",
    templateUrl: "app/signComponent/sign-in.component.html"
})
export class SigninComponent {
    @Input() lastname: string;
    @Input() firstname: string;
    @Input() email: string;
    @Input() password: string;
    @Input() passwordConfirmation: string;
    @Input() birthday: Date;

    signin() {
        console.log(this.lastname + this.firstname + this.email + this.password + this.passwordConfirmation + this.birthday);
    }
}
