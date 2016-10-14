import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "blache-search-header",
    templateUrl: "search-header.component.html",
    styleUrls: ['search-header.component.css']
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
