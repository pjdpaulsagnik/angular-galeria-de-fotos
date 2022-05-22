import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { BackendDetails } from 'src/shared/apicallspath.service';
import { UserDetails } from 'src/shared/user-details.service'; 


export interface UserDataModule {
    fullname: string;
    username: string;
    email: string;
    password: string;
    bio: string;
    usertype: string;
    file: File;
}
export interface uploadpostdetails {
    postname : string;
    postdescription : string;
    postpath : string;
}


@Injectable({providedIn:'root'})
export class UserAuthentication {
    //fetch from backend and init all these.
    isLoggedIn = false;
    private baseUrl ;
    
    constructor(private httpClient: HttpClient, private backendConfigObj: BackendDetails, private idrecieve : UserDetails){
        
    }
    registerANewAccount(inputObj){
        const backendApiData : FormData = new FormData(); 
        
            backendApiData.append('fullname', inputObj.fullname),
            backendApiData.append('username', inputObj.username),
            backendApiData.append('email', inputObj.email),
            backendApiData.append('password', inputObj.password),
            backendApiData.append('bio', inputObj.bio),
            backendApiData.append('usertype', inputObj.usertype),
            backendApiData.append('file', inputObj.file)
        
            this.baseUrl = this.backendConfigObj.registrationApi;
    
            const req = new HttpRequest('POST', `${this.baseUrl}`, backendApiData, {
              reportProgress: true,
              responseType: 'json'
            });
        
            return this.httpClient.request(req);
    }
    loginUser(inputObj){
        const backendApiData = {
            "username":inputObj.username,
            "password":inputObj.password
        }
        
        return this.httpClient.post<any>(this.backendConfigObj.loginApi, backendApiData)
        .pipe(
            map(userData => {
              sessionStorage.setItem("username", inputObj.username);
              let tokenStr = "Bearer " + userData.token;
              sessionStorage.setItem("token", tokenStr);
              return userData;
            })
          );
    }
    // uploadPost(inputObj){
    //     const testData:FormData = new FormData();
    //     testData.append('file', inputObj.file);
    //     testData.append('posttitle', inputObj.posttitle);
    //     testData.append('postdescription', inputObj.postdescription);
    //     console.log(testData);
    //     return this.http.post(this.backendConfigObj.uploadpostApi(this.idrecieve.profile_data.id), testData
    //       );
    // }
    
}