import { provideRouter, RouterConfig } from "@angular/router";

import { AdminComponent } from "./adminComponent/admin.component";
import { DashboardComponent } from "./dashboard.component";
import { ReservationComponent } from "./reservationComponent/reservation.component";
import { AnnoncementsComponent } from "./annoncementsComponent/annoncements.component";
import { MessageComponent } from "./messageComponent/message.component";

import { CarDetailComponent } from './annoncementsComponent/car-detail.component';
import { HomeComponent } from './homeComponent/home.component';
import { SearchComponent } from './searchComponent/search.component';
import { LoginComponent } from './loginComponent/login.component';

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
        path: "admin",
        component: AdminComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'annoncements', component: AnnoncementsComponent},
            {path: 'reservation', component: ReservationComponent},
            {path: 'message', component: MessageComponent},
        ]
    },
    {
        path: "detail/:id",
        component: CarDetailComponent
    },
    {
        path: "search/:date",
        component: SearchComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
