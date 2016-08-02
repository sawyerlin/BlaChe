import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "blache-search-header",
    templateUrl: "app/searchComponent/search-header.component.html",
    styleUrls: ['app/searchComponent/search-header.component.css']
})
export class SearchHeaderComponent {
    @Input() from: string;
    @Input() to: string;
    @Input() selectedDate: Date;

    constructor(private router: Router) {}

    findCar() {
        this.router.navigate(['/search', this.selectedDate, {
            from: this.from,
            to: this.to
        }]);
    }
}
