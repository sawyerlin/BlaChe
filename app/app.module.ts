import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { FacebookService } from "ng2-facebook-sdk";
import { CarService } from "./adminComponent/annoncementsComponent/car.service";
import { SearchService } from "./searchComponent/search.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule, routedComponent } from "./app-routing.module";

import { HeaderComponent }  from "./headerComponent/header.component";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ],
    declarations: [
        AppComponent,
        routedComponent,
        HeaderComponent
    ],
    //providers: [FacebookService, CarService, SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {}
