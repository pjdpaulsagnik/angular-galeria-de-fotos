import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import {UserPost , specificuserposts } from "../app/shared-models/posts.model";
import { Observable } from 'rxjs';
import { BackendDetails } from 'src/shared/apicallspath.service';
import { UserDetails } from 'src/shared/user-details.service'; 
import { ProfileUserDetails } from './tokenserviceauthentication.service';

export interface uploadpostdetails {
    postname : string;
    postdescription : string;
    postpath : string;
}

@Injectable({providedIn:'root'})
export class PostStorage {
    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){}
    allPost: UserPost[] = [];
    userposts: specificuserposts[] = [];
    userid : String;
    private baseUrl ;

    idforpost(uid){
        this.userid = uid;
        console.log(uid);
    }

    uploadPst(obj): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
    
        formData.append('file', obj.postpath);
        formData.append('posttitle', obj.posttitle);
        formData.append('postdescription', obj.postdescription);

        console.log(this.userid);
        this.baseUrl = this.backendConfigObj.uploadpostApi(this.userid);
    
        const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
          reportProgress: true,
          responseType: 'json'
        });
    
        return this.http.request<specificuserposts[]>(req);
    }

    fetchCurrentUsersPost(){
        return this.http.get<specificuserposts[]>(this.backendConfigObj.getCurrenUserPost(sessionStorage.getItem('uuid')), {
        });
    }

    fetchuserID(){
        return this.http.get(this.backendConfigObj.fetchidforpost(sessionStorage.getItem('username')),{
        })
    }

}