import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Car } from "./car";

@Injectable()
export class CarService {
    private carsUrl = 'app/cars';

    constructor(private http: Http) {}

    private handleError(error: any) {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }

    getCars(): Promise<Car[]> {
        return this.http.get(this.carsUrl)
            .toPromise()
            .then(response=>response.json().data)
            .catch(this.handleError);
    }
    getCar(id: number) {
        return this.getCars().then(cars=>cars.find(car=>car.id == id));
    }

    post(car: Car): Promise<Car> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.carsUrl, JSON.stringify(car), {headers: headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError);
    }

    put(car: Car) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.carsUrl}/${car.id}`;

        return this.http
            .put(url, JSON.stringify(car), {headers: headers})
            .toPromise()
            .then(()=>car)
            .catch(this.handleError);
    }

    delete(car: Car) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.carsUrl}/${car.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    save(car: Car): Promise<Car> {
        if (car.id) {
            return this.put(car);
        }
        return this.post(car);
    }
}
