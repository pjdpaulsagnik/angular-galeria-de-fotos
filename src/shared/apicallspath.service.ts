import { Injectable } from "@angular/core";
import { UserDetails } from './user-details.service';

@Injectable({providedIn: 'root'})
export class BackendDetails{

    constructor(){}
    baseApi = 'http://localhost:8080';
    registrationApi = this.baseApi + '/register';
    loginApi = this.baseApi + '/authenticate';

    uploadpostApi = (userid) => this.baseApi + '/uploadFile/' + userid;

    getCurrenUserPost = (userid) => this.baseApi + '/postuser/' + userid;
      
    fetchUserDetailsApi = (username) => this.baseApi + '/user/' + username;

    fetchUserProfileImage = (username) => this.baseApi + '/profileimage/' + username;

    fetchidforpost = (username) => this.baseApi + '/userforpost/' + username;

    fetchlist = this.baseApi + '/list';

    fetchAllPosts = this.baseApi + '/postall'; 
}