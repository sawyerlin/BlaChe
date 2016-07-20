import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "blache-home",
    templateUrl: "app/homeComponent/home.component.html"
})
export class HomeComponent implements OnInit {
    title: string = "Find Car";
    @Input() fromDate: Date;
    @Input() toDate: Date;

    ngOnInit() {
        var today = new Date(Date.now());
        this.fromDate = today;
        this.toDate = today;
    }
}
