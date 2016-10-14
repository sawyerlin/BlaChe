import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Car } from "../annoncementsComponent/car";
//import { CarService } from "../annoncementsComponent/car.service";

@Component({
    moduleId: module.id,
    selector: "my-dashboard",
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    cars: Car[] = [];

    constructor(
        private router: Router) {//,
        //private carService: CarService) {
    }

    ngOnInit() {
        //this.carService.getCars().then(cars => this.cars = cars.slice(1, 5));
    }

    gotoDetail(car: Car) {
        let link = ['/admin/detail', car.id];
        this.router.navigate(link);
    }
}
