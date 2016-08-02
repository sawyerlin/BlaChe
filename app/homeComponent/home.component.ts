import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "blache-home",
    templateUrl: "app/homeComponent/home.component.html",
    styleUrls: ['app/homeComponent/home.component.css'],
})
export class HomeComponent implements OnInit {
    @Input() from: string = "";
    @Input() to: string = "";
    @Input() selectedDate: Date;

    constructor(private router: Router) {}

    ngOnInit() {}

    findCar() {
        this.router.navigate(['/search', this.selectedDate, {
            from: this.from,
            to: this.to
        }]);
    }
}
