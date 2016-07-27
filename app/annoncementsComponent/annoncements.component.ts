import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';
import { CarDetailComponent } from './car-detail.component';

@Component({
    selector: 'blache-annoncements',
    templateUrl: 'app/annoncementsComponent/annoncements.component.html',
    styleUrls: ['app/annoncementsComponent/annoncements.component.css'],
    directives: [CarDetailComponent]
})
export class AnnoncementsComponent implements OnInit {
    cars: Car[];
    selectedCar: Car;
    addingCar= false;
    error: any;

    constructor(
        private router: Router,
        private carService: CarService) {
    }

    getCars() {
        this.carService.getCars().then(cars=> this.cars = cars);
    }

    ngOnInit() {
        this.getCars();
    }

    onSelect(car: Car) {
        this.selectedCar = car;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedCar.id]);
    }

    addCar() {
        this.addingCar = true;
        this.selectedCar = null;
    }

    close(savedCar: Car) {
        this.addingCar= false;
        if (savedCar) { this.getCars(); }
    }

    deleteCar(car: Car, event: any) {
        event.stopPropagation();
        this.carService
            .delete(car)
            .then(res => {
                this.cars = this.cars.filter(c => c !== car);
                if (this.selectedCar === car) { this.selectedCar = null; }
            })
            .catch(error => this.error = error);
    }
}
