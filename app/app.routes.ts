import { provideRouter, RouterConfig } from "@angular/router";

import { AnnoncementsComponent } from "./annoncementsComponent/annoncements.component";
import { DashboardComponent } from "./dashboard.component";
import { CarDetailComponent } from './annoncementsComponent/car-detail.component';
import { HomeComponent } from './homeComponent/home.component';
import { SearchComponent } from './searchComponent/search.component';
import { SigninComponent } from './signComponent/sign-in.component';

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
        path: "annoncements",
        component: AnnoncementsComponent
    },
    {
        path: "detail/:id",
        component: CarDetailComponent
    },
    {
        path: "search/:date",
        component: SearchComponent
    },
    {
        path: "signin",
        component: SigninComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];
