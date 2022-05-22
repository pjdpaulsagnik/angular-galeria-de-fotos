import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileUserDetails } from 'src/shared/tokenserviceauthentication.service';
import { UserAuthentication } from 'src/shared/user-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'fotographia';

  constructor(private userObjServ: ProfileUserDetails, public userAuthObj: UserAuthentication, public userServObj : ProfileUserDetails){
    let res = this.userObjServ.getJwtFromSession();
    this.userAuthObj.isLoggedIn = res;
  }

  logout(){
    console.log("LOGOUT");
    localStorage.clear();
    sessionStorage.clear();
    this.userAuthObj.isLoggedIn = false;
    this.userObjServ.logoutAction();
  }
  
}
