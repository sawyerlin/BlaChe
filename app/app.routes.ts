import { provideRouter, RouterConfig } from "@angular/router";

import { CarsComponent } from "./cars.component";
import { DashboardComponent } from "./dashboard.component";
import { CarDetailComponent } from './car-detail.component';

const routes: RouterConfig = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
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
