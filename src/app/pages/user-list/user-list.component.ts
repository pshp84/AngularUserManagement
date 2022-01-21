import {
    Component,
    OnInit
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@services/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    UserList: any = [];
    throttle = 250;
    scrollDistance = 1;
    scrollUpDistance = 2;
    page = 1;
    constructor(
        private appService: AppService,
        private router: Router,
    ) { }
    ngOnInit() {
        this.getUsersList();
    }
    getUsersList() {
        this.appService.getUserList(this.page)
            .subscribe((response: any) => {
                this.UserList = response.data;
            },
                (error: any) => { });
    }
    getUserDetail(id: any) {
        this.router.navigate(["users/", id]);
    }
    onScrollDown() {
        this.page += 1;
        this.appService.getUserList(this.page)
            .subscribe((response: any) => {
                response.data.forEach(element => {
                    this.UserList.push(element);
                });
            },
                (error: any) => { });
    }

    getWindowHeight() {
        return window.innerHeight - 200;
    }
}
