import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public useremail;

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.useremail = localStorage.getItem("email");
    }

    logout() {
        this.appService.logout();
    }
}
