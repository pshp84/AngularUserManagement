import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public useremail;
    public menu = MENU;

    constructor(public appService: AppService) {}

    ngOnInit() {
        this.useremail = localStorage.getItem("email");
    }
}

export const MENU = [
    {
        name: 'User list',
        path: ['/']
    }
];
