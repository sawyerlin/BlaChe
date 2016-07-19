import { provideRouter, RouterConfig } from "@angular/router";

import { CarsComponent } from "./cars.component";
import { DashboardComponent } from "./dashboard.component";
import { CarDetailComponent } from './car-detail.component';
import { HomeComponent } from './homeComponent/home.component';

const routes: RouterConfig = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "cars",
        component: CarsComponent
    },
    {
        path: "detail/:id",
        component: CarDetailComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
