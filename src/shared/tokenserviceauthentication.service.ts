import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendDetails } from 'src/shared/apicallspath.service';

export interface profileImage{
    profileimageid: string;
    fileName: string;
}

@Injectable({providedIn: 'root'})

export class ProfileUserDetails {
    uuid:number = 0;
    username:string = "@rolker2020";
    posticon:string = "./assets/icon.png"
    profileLink:string = "./assets/you_have_just_logged_in.png";
    followerCount: number = 420;
    followingCount:number = 69;
    description: string = "ART OF WISDOM";
    jwtToken = "";

    profileImageData : profileImage[] = [];

    constructor(private http: HttpClient, private backendConfigObj: BackendDetails){}

    setDetails(username, description, uuid ){
        this.username = username;
        this.description = description;
        this.uuid = uuid;
    }

    setImageLink(profileimage){
        this.profileLink = profileimage;
    }

    setidToSession(id){
        sessionStorage.setItem("uuid", id);
        console.log(id);
        let idgot = sessionStorage.getItem('uuid');
        console.log(idgot);
    }

    getCurrentLoggedUserDetails(username : string) {
        console.log(this.jwtToken);
        return this.http.get(this.backendConfigObj.fetchUserDetailsApi(username) );
    }

    fetchCurrentUserProfileImage(){
        return this.http.get<profileImage[]>(this.backendConfigObj.fetchUserProfileImage(sessionStorage.getItem('username')), {
        });
    }

    
    logoutAction(){
        this.jwtToken = "";
        this.username = '';
        this.uuid = 0;
    }


    setJWTToSession(jsontoken){
        this.jwtToken = 'Bearer '+jsontoken;
        this.username = sessionStorage.getItem('username');    
        console.log(this.username);
    }

    getJwtFromSession(){
        if (sessionStorage.getItem('token') && sessionStorage.getItem('username')){
            this.jwtToken = sessionStorage.getItem('token');
            this.username = sessionStorage.getItem('username');
            return true;
        }
        return false;
    }
}