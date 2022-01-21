import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) {}

    loginByAuth({email, password}) {
        try {
            var url = "https://reqres.in/api/login";
            var body = {
                "email": email,
                "password": password
            }
            const response = this.http.post(url, body);
            return response;
           
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    getUserList(page: any) {
        try { 
            //var url = "https://reqres.in/api/users?page="+ page +"&per_page=9";
             var url = "https://reqres.in/api/users?per_page=12";   ////// for testing infinite scroll use this API
            const response = this.http.get(url);
            return response;
           
        } catch (error) {
            this.toastr.error(error.message);
        }
    }
    getUserDetails(id:any) {
        try {
            var url = "https://reqres.in/api/users/"+id;
            const response = this.http.get(url);
            return response;
           
        } catch (error) {
            this.toastr.error(error.message);
        }
    }
}
