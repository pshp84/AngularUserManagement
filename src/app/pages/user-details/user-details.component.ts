import {
    Component,
    OnInit,
    Renderer2,} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent  implements OnInit {
    userDetail :any;
    showDetail: boolean =false;
    constructor(
        private appService: AppService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(user => {
            this.getUserDetails(user.id);
        });
    }
    ngOnInit() {
       
    }
    getUserDetails(id:any) {
        this.appService.getUserDetails(id)
        .subscribe((response: any) => {
            this.userDetail = response.data;
            this.showDetail= true;
        },
        (error: any) => {
            if(error.status == 404){
                this.router.navigate(["error/"]);
            }
        });
    }
    goToHome(){
        this.router.navigate([""]);
    }
}
