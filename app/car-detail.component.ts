import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from  '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';

@Component ({
    selector: 'my-car-detail',
    templateUrl: 'app/car-detail.component.html',
    styleUrls: ['app/car-detail.component.css']
})
export class CarDetailComponent implements OnInit, OnDestroy {
    @Input() car: Car;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;
    navigated = false;

    constructor(
        private carService: CarService,
        private route: ActivatedRoute) {
    }

    save() {
        this.carService
            .save(this.car)
            .then(car => {
                this.car = car;
                this.goBack(car);
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params["id"] !== undefined) {
                let id = +params["id"];
                this.navigated = true;
                this.carService.getCar(id)
                    .then(car=>this.car = car);
            } else {
                this.navigated = false;
                this.car = new Car();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack(savedCar: Car = null) {
        this.close.emit(savedCar);
        if (this.navigated) { window.history.back(); }
    }
}
