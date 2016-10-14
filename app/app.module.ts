import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FacebookService } from "ng2-facebook-sdk";
import { CarService } from "./adminComponent/annoncementsComponent/car.service";
import { SearchService } from "./searchComponent/search.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from './homeComponent/home.component';
import { SearchComponent } from './searchComponent/search.component';
import { LoginComponent } from './loginComponent/login.component';
import { AdminComponent } from "./adminComponent/admin.component";
import { DashboardComponent } from "./adminComponent/dashboardComponent/dashboard.component";
import { ReservationComponent } from "./adminComponent/reservationComponent/reservation.component";
import { CarDetailComponent } from './adminComponent/annoncementsComponent/car-detail.component';
import { AnnoncementsComponent } from "./adminComponent/annoncementsComponent/annoncements.component";
import { MessageComponent } from "./adminComponent/messageComponent/message.component";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot([
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
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        LoginComponent,
        AdminComponent,
        DashboardComponent, 
        ReservationComponent,
        CarDetailComponent, 
        AnnoncementsComponent,
        MessageComponent,
    ],
    providers: [FacebookService, CarService, SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {}
