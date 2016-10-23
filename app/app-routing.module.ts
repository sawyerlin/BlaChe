import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { HomeComponent } from './homeComponent/home.component';
import { SearchComponent } from './searchComponent/search.component';
import { LoginComponent } from './loginComponent/login.component';
import { AdminComponent } from "./adminComponent/admin.component";
import { DashboardComponent } from "./adminComponent/dashboardComponent/dashboard.component";
import { ReservationComponent } from "./adminComponent/reservationComponent/reservation.component";
import { CarDetailComponent } from './adminComponent/annoncementsComponent/car-detail.component';
import { AnnoncementsComponent } from "./adminComponent/annoncementsComponent/annoncements.component";
import { MessageComponent } from "./adminComponent/messageComponent/message.component";

const Routes = [
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
            {path: 'annoncements',  component: AnnoncementsComponent},
            {path: 'reservation', component: ReservationComponent},
            {path: 'message', component: MessageComponent},
            {path: "detail/:id", component: CarDetailComponent}
        ]
    },
    {
        path: "search/:date",
        component: SearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponent = [HomeComponent, AdminComponent, SearchComponent, DashboardComponent, AnnoncementsComponent, ReservationComponent, MessageComponent, CarDetailComponent];
